// const mongoose = require('mongoose')
// const fetch = require('node-fetch')
// const fs = require('fs')
// const path = require('path')
// const { faker } = require('@faker-js/faker')

// const Sach = require('./app/models/Sach')
// const NhaXuatBan = require('./app/models/NhaXuatBan')

// mongoose.connect('mongodb://localhost:27017/quanlymuonsach')

// const uploadDir = path.join(__dirname, 'uploads/sach')
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true })
// }

// async function downloadImage(url, filename) {
//   try {
//     const response = await fetch(url)
//     if (!response.ok) return null

//     const dest = fs.createWriteStream(filename)
//     return new Promise((resolve, reject) => {
//       response.body.pipe(dest)
//       response.body.on('error', reject)
//       dest.on('finish', resolve)
//     })
//   } catch (error) {
//     console.error('Lỗi tải ảnh:', error)
//     return null
//   }
// }

// async function seedNhaXuatBan() {
//   const nxbList = [
//     { MANXB: 'NXB001', TENNXB: 'NXB Kim Đồng', DIACHI: 'Hà Nội' },
//     { MANXB: 'NXB002', TENNXB: 'NXB Trẻ', DIACHI: 'TP. Hồ Chí Minh' },
//     { MANXB: 'NXB003', TENNXB: 'NXB Giáo Dục Việt Nam', DIACHI: 'Đà Nẵng' },
//     { MANXB: 'NXB004', TENNXB: 'NXB Hà Nội', DIACHI: 'Hà Nội' },
//     { MANXB: 'NXB005', TENNXB: 'NXB Đại học Cần Thơ', DIACHI: 'Cần Thơ' },
//     { MANXB: 'NXB006', TENNXB: 'NXB Lao Động', DIACHI: 'Hà Nội' },
//     { MANXB: 'NXB007', TENNXB: 'NXB Hội Nhà văn', DIACHI: 'Hà Nội' }
//   ]

//   await NhaXuatBan.deleteMany({})
//   const insertedNXB = await NhaXuatBan.insertMany(nxbList)
//   console.log('Đã thêm Nhà Xuất Bản vào MongoDB!')
//   return insertedNXB
// }

// async function fetchBooks(nxbMap) {
//   try {
//     const response = await fetch(
//       'https://openlibrary.org/search.json?q=programming&limit=50'
//     )
//     const data = await response.json()

//     const books = []
//     const count = await Sach.countDocuments()
//     let counter = count + 1

//     for (let book of data.docs) {
//       if (!book.cover_i) {
//         console.log(`Không có ảnh: ${book.title}`)
//         continue 
//       }
//       const MASACH = `MS${counter.toString().padStart(3, '0')}`
//       counter++
//       const TENSACH = book.title
//       const DONGIA = faker.number.int({ min: 10, max: 500 }) * 1000
//       const SOQUYEN = faker.number.int({ min: 1, max: 10 })
//       const NAMXUATBAN =
//         book.first_publish_year || faker.number.int({ min: 1950, max: 2024 })
//       const NGUONGOC_TACGIA = book.author_name
//         ? book.author_name[0]
//         : 'Không rõ'

//       const randomNXB = nxbMap[Math.floor(Math.random() * nxbMap.length)]
//       const MANXB = randomNXB._id

//       let HINHANH = ''
//       if (book.cover_i) {
//         const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
//         const coverFilename = path.join(uploadDir, `${book.cover_i}.jpg`)
//         await downloadImage(coverUrl, coverFilename)
//         HINHANH = `/uploads/sach/${book.cover_i}.jpg`
//       }

//       books.push({
//         MASACH,
//         TENSACH,
//         DONGIA,
//         SOQUYEN,
//         NAMXUATBAN,
//         NGUONGOC_TACGIA,
//         MANXB,
//         HINHANH
//       })
//     }

//     await Sach.insertMany(books)
//     console.log('Đã tải ảnh và thêm 48 sách vào MongoDB!')
//   } catch (error) {
//     console.error('Lỗi lấy sách:', error)
//   } finally {
//     mongoose.connection.close()
//   }
// }

// async function seedDatabase() {
//   const insertedNXB = await seedNhaXuatBan()
//   await Sach.deleteMany({})
//   console.log('Đã xóa toàn bộ sách cũ trong MongoDB!')
//   await fetchBooks(insertedNXB)
// }

// seedDatabase()
const mongoose = require('mongoose')
const NhaXuatBan = require('./app/models/NhaXuatBan')
const Sach = require('./app/models/Sach')
const DocGia = require('./app/models/DocGia')
const NhanVien = require('./app/models/NhanVien')
const TheoDoiMuonSach = require('./app/models/TheoDoiMuonSach')

mongoose
  .connect('mongodb://localhost:27017/LibraryDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err))

async function seedDatabase() {
  try {
    // Xóa dữ liệu cũ
    await Promise.all([
      NhaXuatBan.deleteMany({}),
      Sach.deleteMany({}),
      DocGia.deleteMany({}),
      NhanVien.deleteMany({}),
      TheoDoiMuonSach.deleteMany({})
    ])

    // 1. Chèn 5 Nhà Xuất Bản
    const nhaXuatBanData = [
      { MANXB: 'NXB001', TENNXB: 'NXB Kim Đồng', DIACHI: 'Hà Nội' },
      { MANXB: 'NXB002', TENNXB: 'NXB Trẻ', DIACHI: 'TP.HCM' },
      { MANXB: 'NXB003', TENNXB: 'NXB Giáo Dục', DIACHI: 'Hà Nội' },
      { MANXB: 'NXB004', TENNXB: 'NXB Văn Học', DIACHI: 'TP.HCM' },
      { MANXB: 'NXB005', TENNXB: 'NXB Tổng Hợp', DIACHI: 'Đà Nẵng' }
    ]
    const nhaXuatBans = await NhaXuatBan.insertMany(nhaXuatBanData)

    // 2. Chèn 20 Sách
    const sachData = [
      {
        MASACH: 'S001',
        TENSACH: 'Dế Mèn Phiêu Lưu Ký',
        DONGIA: 50000,
        SOQUYEN: 10,
        NAMXUATBAN: 2020,
        MANXB: nhaXuatBans[0]._id,
        NGUONGOC_TACGIA: 'Tô Hoài',
        HINHANH: 'de-men.jpg'
      },
      {
        MASACH: 'S002',
        TENSACH: 'Nhà Giả Kim',
        DONGIA: 80000,
        SOQUYEN: 15,
        NAMXUATBAN: 2019,
        MANXB: nhaXuatBans[1]._id,
        NGUONGOC_TACGIA: 'Paulo Coelho',
        HINHANH: 'nha-gia-kim.jpg'
      },
      {
        MASACH: 'S003',
        TENSACH: 'Số Đỏ',
        DONGIA: 60000,
        SOQUYEN: 8,
        NAMXUATBAN: 2021,
        MANXB: nhaXuatBans[2]._id,
        NGUONGOC_TACGIA: 'Vũ Trọng Phụng',
        HINHANH: 'so-do.jpg'
      },
      {
        MASACH: 'S004',
        TENSACH: 'Tắt Đèn',
        DONGIA: 55000,
        SOQUYEN: 12,
        NAMXUATBAN: 2020,
        MANXB: nhaXuatBans[3]._id,
        NGUONGOC_TACGIA: 'Ngô Tất Tố',
        HINHANH: 'tat-den.jpg'
      },
      {
        MASACH: 'S005',
        TENSACH: 'Harry Potter 1',
        DONGIA: 120000,
        SOQUYEN: 20,
        NAMXUATBAN: 2018,
        MANXB: nhaXuatBans[4]._id,
        NGUONGOC_TACGIA: 'J.K. Rowling',
        HINHANH: 'harry-potter-1.jpg'
      },
      {
        MASACH: 'S006',
        TENSACH: '1984',
        DONGIA: 90000,
        SOQUYEN: 10,
        NAMXUATBAN: 2022,
        MANXB: nhaXuatBans[0]._id,
        NGUONGOC_TACGIA: 'George Orwell',
        HINHANH: '1984.jpg'
      },
      {
        MASACH: 'S007',
        TENSACH: 'Đắc Nhân Tâm',
        DONGIA: 75000,
        SOQUYEN: 15,
        NAMXUATBAN: 2020,
        MANXB: nhaXuatBans[1]._id,
        NGUONGOC_TACGIA: 'Dale Carnegie',
        HINHANH: 'dac-nhan-tam.jpg'
      },
      {
        MASACH: 'S008',
        TENSACH: 'Chiến Binh Cầu Vồng',
        DONGIA: 85000,
        SOQUYEN: 12,
        NAMXUATBAN: 2019,
        MANXB: nhaXuatBans[2]._id,
        NGUONGOC_TACGIA: 'Andrea Hirata',
        HINHANH: 'chien-binh-cau-vong.jpg'
      },
      {
        MASACH: 'S009',
        TENSACH: 'Lão Hạc',
        DONGIA: 40000,
        SOQUYEN: 10,
        NAMXUATBAN: 2021,
        MANXB: nhaXuatBans[3]._id,
        NGUONGOC_TACGIA: 'Nam Cao',
        HINHANH: 'lao-hac.jpg'
      },
      {
        MASACH: 'S010',
        TENSACH: 'Bố Già',
        DONGIA: 95000,
        SOQUYEN: 8,
        NAMXUATBAN: 2020,
        MANXB: nhaXuatBans[4]._id,
        NGUONGOC_TACGIA: 'Mario Puzo',
        HINHANH: 'bo-gia.jpg'
      },
      {
        MASACH: 'S011',
        TENSACH: 'Truyện Kiều',
        DONGIA: 60000,
        SOQUYEN: 15,
        NAMXUATBAN: 2021,
        MANXB: nhaXuatBans[0]._id,
        NGUONGOC_TACGIA: 'Nguyễn Du',
        HINHANH: 'truyen-kieu.jpg'
      },
      {
        MASACH: 'S012',
        TENSACH: 'Đồi Gió Hú',
        DONGIA: 85000,
        SOQUYEN: 10,
        NAMXUATBAN: 2019,
        MANXB: nhaXuatBans[1]._id,
        NGUONGOC_TACGIA: 'Emily Brontë',
        HINHANH: 'doi-gio-hu.jpg'
      },
      {
        MASACH: 'S013',
        TENSACH: 'Tội Ác và Hình Phạt',
        DONGIA: 100000,
        SOQUYEN: 12,
        NAMXUATBAN: 2020,
        MANXB: nhaXuatBans[2]._id,
        NGUONGOC_TACGIA: 'Fyodor Dostoevsky',
        HINHANH: 'toi-ac-va-hinh-phat.jpg'
      },
      {
        MASACH: 'S014',
        TENSACH: 'Cây Cam Ngọt Của Tôi',
        DONGIA: 70000,
        SOQUYEN: 10,
        NAMXUATBAN: 2022,
        MANXB: nhaXuatBans[3]._id,
        NGUONGOC_TACGIA: 'José Mauro de Vasconcelos',
        HINHANH: 'cay-cam-ngot.jpg'
      },
      {
        MASACH: 'S015',
        TENSACH: 'Người Đua Diều',
        DONGIA: 80000,
        SOQUYEN: 15,
        NAMXUATBAN: 2021,
        MANXB: nhaXuatBans[4]._id,
        NGUONGOC_TACGIA: 'Khaled Hosseini',
        HINHANH: 'nguoi-dua-dieu.jpg'
      },
      {
        MASACH: 'S016',
        TENSACH: 'Hài Kịch Nhân Gian',
        DONGIA: 65000,
        SOQUYEN: 8,
        NAMXUATBAN: 2020,
        MANXB: nhaXuatBans[0]._id,
        NGUONGOC_TACGIA: 'Honoré de Balzac',
        HINHANH: 'hai-kich-nhan-gian.jpg'
      },
      {
        MASACH: 'S017',
        TENSACH: 'Chí Phèo',
        DONGIA: 45000,
        SOQUYEN: 10,
        NAMXUATBAN: 2021,
        MANXB: nhaXuatBans[1]._id,
        NGUONGOC_TACGIA: 'Nam Cao',
        HINHANH: 'chi-pheo.jpg'
      },
      {
        MASACH: 'S018',
        TENSACH: 'Hoàng Tử Bé',
        DONGIA: 55000,
        SOQUYEN: 12,
        NAMXUATBAN: 2020,
        MANXB: nhaXuatBans[2]._id,
        NGUONGOC_TACGIA: 'Antoine de Saint-Exupéry',
        HINHANH: 'hoang-tu-be.jpg'
      },
      {
        MASACH: 'S019',
        TENSACH: 'Nhà thờ Đức Bà Paris',
        DONGIA: 90000,
        SOQUYEN: 10,
        NAMXUATBAN: 2019,
        MANXB: nhaXuatBans[3]._id,
        NGUONGOC_TACGIA: 'Victor Hugo',
        HINHANH: 'nha-tho-duc-ba.jpg'
      },
      {
        MASACH: 'S020',
        TENSACH: 'Đi Tìm Thời Gian Đã Mất',
        DONGIA: 110000,
        SOQUYEN: 8,
        NAMXUATBAN: 2022,
        MANXB: nhaXuatBans[4]._id,
        NGUONGOC_TACGIA: 'Marcel Proust',
        HINHANH: 'di-tim-thoi-gian.jpg'
      }
    ]
    const sachs = await Sach.insertMany(sachData)

    // 3. Chèn 12 Độc Giả
    const docGiaData = [
      {
        MADOCGIA: 'DG001',
        HOLOT: 'Nguyễn Văn',
        TEN: 'An',
        NGAYSINH: new Date('1995-05-15'),
        PHAI: 'Nam',
        DIACHI: 'Hà Nội',
        SODIENTHOAI: '0912345671',
        PASSWORD: 'password123'
      },
      {
        MADOCGIA: 'DG002',
        HOLOT: 'Trần Thị',
        TEN: 'Bình',
        NGAYSINH: new Date('1998-08-20'),
        PHAI: 'Nữ',
        DIACHI: 'TP.HCM',
        SODIENTHOAI: '0912345672',
        PASSWORD: 'password123'
      },
      {
        MADOCGIA: 'DG003',
        HOLOT: 'Lê Văn',
        TEN: 'Cường',
        NGAYSINH: new Date('1990-03-10'),
        PHAI: 'Nam',
        DIACHI: 'Đà Nẵng',
        SODIENTHOAI: '0912345673',
        PASSWORD: 'password123'
      },
      {
        MADOCGIA: 'DG004',
        HOLOT: 'Phạm Thị',
        TEN: 'Dung',
        NGAYSINH: new Date('1997-12-25'),
        PHAI: 'Nữ',
        DIACHI: 'Hà Nội',
        SODIENTHOAI: '0912345674',
        PASSWORD: 'password123'
      },
      {
        MADOCGIA: 'DG005',
        HOLOT: 'Hoàng Văn',
        TEN: 'Em',
        NGAYSINH: new Date('1993-07-30'),
        PHAI: 'Nam',
        DIACHI: 'TP.HCM',
        SODIENTHOAI: '0912345675',
        PASSWORD: 'password123'
      },
      {
        MADOCGIA: 'DG006',
        HOLOT: 'Ngô Thị',
        TEN: 'Hương',
        NGAYSINH: new Date('1996-04-12'),
        PHAI: 'Nữ',
        DIACHI: 'Đà Nẵng',
        SODIENTHOAI: '0912345676',
        PASSWORD: 'password123'
      },
      {
        MADOCGIA: 'DG007',
        HOLOT: 'Vũ Văn',
        TEN: 'Khánh',
        NGAYSINH: new Date('1994-09-05'),
        PHAI: 'Nam',
        DIACHI: 'Hà Nội',
        SODIENTHOAI: '0912345677',
        PASSWORD: 'password123'
      },
      {
        MADOCGIA: 'DG008',
        HOLOT: 'Đỗ Thị',
        TEN: 'Lan',
        NGAYSINH: new Date('1999-01-18'),
        PHAI: 'Nữ',
        DIACHI: 'TP.HCM',
        SODIENTHOAI: '0912345678',
        PASSWORD: 'password123'
      },
      {
        MADOCGIA: 'DG009',
        HOLOT: 'Bùi Văn',
        TEN: 'Minh',
        NGAYSINH: new Date('1992-06-22'),
        PHAI: 'Nam',
        DIACHI: 'Đà Nẵng',
        SODIENTHOAI: '0912345679',
        PASSWORD: 'password123'
      },
      {
        MADOCGIA: 'DG010',
        HOLOT: 'Trương Thị',
        TEN: 'Nga',
        NGAYSINH: new Date('1995-11-30'),
        PHAI: 'Nữ',
        DIACHI: 'Hà Nội',
        SODIENTHOAI: '0912345680',
        PASSWORD: 'password123'
      },
      {
        MADOCGIA: 'DG011',
        HOLOT: 'Lý Văn',
        TEN: 'Phúc',
        NGAYSINH: new Date('1991-02-14'),
        PHAI: 'Nam',
        DIACHI: 'TP.HCM',
        SODIENTHOAI: '0912345681',
        PASSWORD: 'password123'
      },
      {
        MADOCGIA: 'DG012',
        HOLOT: 'Hà Thị',
        TEN: 'Thảo',
        NGAYSINH: new Date('1998-10-10'),
        PHAI: 'Nữ',
        DIACHI: 'Đà Nẵng',
        SODIENTHOAI: '0912345682',
        PASSWORD: 'password123'
      }
    ]
    const docGias = await DocGia.insertMany(docGiaData)

    // 4. Chèn 3 Nhân Viên
    const nhanVienData = [
      {
        MANV: 'NV001',
        HOTENNV: 'Nguyễn Văn Hùng',
        PASSWORD: 'admin123',
        CHUCVU: 'QuanLyThuVien',
        DIACHI: 'Hà Nội',
        SODIENTHOAI: '0987654321'
      },
      {
        MANV: 'NV002',
        HOTENNV: 'Trần Thị Mai',
        PASSWORD: 'staff123',
        CHUCVU: 'NhanVienThuVien',
        DIACHI: 'TP.HCM',
        SODIENTHOAI: '0987654322'
      },
      {
        MANV: 'NV003',
        HOTENNV: 'Lê Văn Nam',
        PASSWORD: 'staff123',
        CHUCVU: 'NhanVienThuVien',
        DIACHI: 'Đà Nẵng',
        SODIENTHOAI: '0987654323'
      }
    ]
    const nhanViens = await NhanVien.insertMany(nhanVienData)

    // 5. Chèn 20 Bản ghi Mượn/Trả Sách
    const theoDoiMuonSachData = [
      {
        MADOCGIA: docGias[0]._id,
        MASACH: sachs[0]._id,
        NGAYMUON: new Date('2025-07-01'),
        NGAYTRA: new Date('2025-07-15'),
        TRANGTHAI: 'Đã trả',
        SOQUYEN: 1
      },
      {
        MADOCGIA: docGias[1]._id,
        MASACH: sachs[1]._id,
        NGAYMUON: new Date('2025-07-02'),
        NGAYTRA: null,
        TRANGTHAI: 'Đang mượn',
        SOQUYEN: 2
      },
      {
        MADOCGIA: docGias[2]._id,
        MASACH: sachs[2]._id,
        NGAYMUON: new Date('2025-07-03'),
        NGAYTRA: null,
        TRANGTHAI: 'Chờ duyệt',
        SOQUYEN: 1
      },
      {
        MADOCGIA: docGias[3]._id,
        MASACH: sachs[3]._id,
        NGAYMUON: new Date('2025-07-04'),
        NGAYTRA: new Date('2025-07-18'),
        TRANGTHAI: 'Đã trả',
        SOQUYEN: 1
      },
      {
        MADOCGIA: docGias[4]._id,
        MASACH: sachs[4]._id,
        NGAYMUON: new Date('2025-07-05'),
        NGAYTRA: null,
        TRANGTHAI: 'Đang mượn',
        SOQUYEN: 2
      },
      {
        MADOCGIA: docGias[5]._id,
        MASACH: sachs[5]._id,
        NGAYMUON: new Date('2025-07-06'),
        NGAYTRA: null,
        TRANGTHAI: 'Chờ duyệt',
        SOQUYEN: 1
      },
      {
        MADOCGIA: docGias[6]._id,
        MASACH: sachs[6]._id,
        NGAYMUON: new Date('2025-07-07'),
        NGAYTRA: new Date('2025-07-21'),
        TRANGTHAI: 'Đã trả',
        SOQUYEN: 1
      },
      {
        MADOCGIA: docGias[7]._id,
        MASACH: sachs[7]._id,
        NGAYMUON: new Date('2025-07-08'),
        NGAYTRA: null,
        TRANGTHAI: 'Đang mượn',
        SOQUYEN: 2
      },
      {
        MADOCGIA: docGias[8]._id,
        MASACH: sachs[8]._id,
        NGAYMUON: new Date('2025-07-09'),
        NGAYTRA: null,
        TRANGTHAI: 'Chờ duyệt',
        SOQUYEN: 1
      },
      {
        MADOCGIA: docGias[9]._id,
        MASACH: sachs[9]._id,
        NGAYMUON: new Date('2025-07-10'),
        NGAYTRA: new Date('2025-07-24'),
        TRANGTHAI: 'Đã trả',
        SOQUYEN: 1
      },
      {
        MADOCGIA: docGias[10]._id,
        MASACH: sachs[10]._id,
        NGAYMUON: new Date('2025-07-11'),
        NGAYTRA: null,
        TRANGTHAI: 'Đang mượn',
        SOQUYEN: 2
      },
      {
        MADOCGIA: docGias[11]._id,
        MASACH: sachs[11]._id,
        NGAYMUON: new Date('2025-07-12'),
        NGAYTRA: null,
        TRANGTHAI: 'Chờ duyệt',
        SOQUYEN: 1
      },
      {
        MADOCGIA: docGias[0]._id,
        MASACH: sachs[12]._id,
        NGAYMUON: new Date('2025-07-13'),
        NGAYTRA: new Date('2025-07-27'),
        TRANGTHAI: 'Đã trả',
        SOQUYEN: 1
      },
      {
        MADOCGIA: docGias[1]._id,
        MASACH: sachs[13]._id,
        NGAYMUON: new Date('2025-07-14'),
        NGAYTRA: null,
        TRANGTHAI: 'Đang mượn',
        SOQUYEN: 2
      },
      {
        MADOCGIA: docGias[2]._id,
        MASACH: sachs[14]._id,
        NGAYMUON: new Date('2025-07-15'),
        NGAYTRA: null,
        TRANGTHAI: 'Chờ duyệt',
        SOQUYEN: 1
      },
      {
        MADOCGIA: docGias[3]._id,
        MASACH: sachs[15]._id,
        NGAYMUON: new Date('2025-07-16'),
        NGAYTRA: new Date('2025-07-30'),
        TRANGTHAI: 'Đã trả',
        SOQUYEN: 1
      },
      {
        MADOCGIA: docGias[4]._id,
        MASACH: sachs[16]._id,
        NGAYMUON: new Date('2025-07-17'),
        NGAYTRA: null,
        TRANGTHAI: 'Đang mượn',
        SOQUYEN: 2
      },
      {
        MADOCGIA: docGias[5]._id,
        MASACH: sachs[17]._id,
        NGAYMUON: new Date('2025-07-18'),
        NGAYTRA: null,
        TRANGTHAI: 'Chờ duyệt',
        SOQUYEN: 1
      },
      {
        MADOCGIA: docGias[6]._id,
        MASACH: sachs[18]._id,
        NGAYMUON: new Date('2025-07-19'),
        NGAYTRA: new Date('2025-08-02'),
        TRANGTHAI: 'Đã trả',
        SOQUYEN: 1
      },
      {
        MADOCGIA: docGias[7]._id,
        MASACH: sachs[19]._id,
        NGAYMUON: new Date('2025-07-20'),
        NGAYTRA: null,
        TRANGTHAI: 'Đang mượn',
        SOQUYEN: 2
      }
    ]
    await TheoDoiMuonSach.insertMany(theoDoiMuonSachData)

    console.log('Dữ liệu mẫu đã được chèn thành công!')
  } catch (err) {
    console.error('Lỗi khi chèn dữ liệu:', err)
  } finally {
    mongoose.connection.close()
  }
}

seedDatabase()