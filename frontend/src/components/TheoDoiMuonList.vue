<style scoped>
  .tracking-page {
    animation: fadeInUp 0.8s ease-out;
  }

  .page-header {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(219, 215, 210, 0.8));
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 10px 30px rgba(53, 94, 59, 0.1);
    border: 1px solid rgba(156, 175, 136, 0.2);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .page-header::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(circle at 30% 70%, rgba(79, 121, 66, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 30%, rgba(156, 175, 136, 0.1) 0%, transparent 50%);
    animation: float 12s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(2deg); }
  }

  .header-content {
    position: relative;
    z-index: 2;
  }

  .page-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: #355E3B;
    margin-bottom: 0.5rem;
  }

  .page-subtitle {
    color: #4F7942;
    font-size: 1.1rem;
    opacity: 0.8;
  }

  .tracking-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #355E3B, #4F7942);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    font-size: 2rem;
    box-shadow: 0 10px 25px rgba(53, 94, 59, 0.3);
    position: relative;
  }

  .tracking-icon::after {
    content: '';
    position: absolute;
    top: -3px;
    right: -3px;
    width: 25px;
    height: 25px;
    background: linear-gradient(135deg, #28a745, #20c997);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .controls-section {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    box-shadow: 0 8px 25px rgba(53, 94, 59, 0.1);
    border: 1px solid rgba(156, 175, 136, 0.2);
  }

  .controls-grid {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1.5rem;
    align-items: center;
  }

  .page-size-control {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: rgba(156, 175, 136, 0.1);
    padding: 0.75rem 1rem;
    border-radius: 15px;
    border: 1px solid rgba(156, 175, 136, 0.2);
  }

  .page-size-label {
    color: #355E3B;
    font-weight: 600;
    font-size: 0.95rem;
  }

  .page-size-select {
    border: 2px solid rgba(156, 175, 136, 0.3);
    border-radius: 8px;
    padding: 0.5rem;
    background: white;
    color: #355E3B;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .page-size-select:focus {
    outline: none;
    border-color: #4F7942;
  }

  .tracking-section {
    background: rgba(133, 205, 111, 0.15);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(53, 94, 59, 0.1);
    border: 1px solid rgba(156, 175, 136, 0.2);
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid rgba(156, 175, 136, 0.2);
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: #355E3B;
    margin: 0;
  }

  .requests-count {
    background: linear-gradient(135deg, #9CAF88, #DBD7D2);
    color: #355E3B;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .tracking-grid {
    display: grid;
    gap: 1.5rem;
  }

  .tracking-card {
    background: rgba(255, 255, 255, 0.9);
    border: 2px solid rgba(156, 175, 136, 0.2);
    border-radius: 20px;
    padding: 1.5rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .tracking-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    transition: width 0.3s ease;
  }

  .tracking-card.status-pending::before {
    background: linear-gradient(to bottom, #d0be86, #f1ebdb);
  }

  .tracking-card.status-approved::before {
    background: linear-gradient(to bottom, #a5d2d9, #7b999e);
  }

  .tracking-card.status-returned::before {
    background: linear-gradient(to bottom, #8ebb98, #20c997);
  }

  .tracking-card:hover {
    border-color: #4F7942;
    box-shadow: 0 8px 25px rgba(53, 94, 59, 0.15);
    transform: translateY(-3px);
  }

  .tracking-card:hover::before {
    width: 8px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }

  .borrower-info {
    flex: 1;
  }

  .borrower-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    color: #355E3B;
    margin: 0 0 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .borrower-icon {
    width: 35px;
    height: 35px;
    background: linear-gradient(135deg, #9CAF88, #4F7942);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.9rem;
  }

  .book-title {
    color: #4F7942;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }

  .status-badge {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-left: 1rem;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
  }

  .status-badge::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }

  .status-badge:hover::before {
    left: 100%;
  }

  .status-pending {
    background: linear-gradient(135deg, #efe9b6, #e8ce82);
    color: #212529;
  }

  .status-approved {
    background: linear-gradient(135deg, #729ea5, #4a929e);
    color: white;
  }

  .status-returned {
    background: linear-gradient(135deg, #7b9e83, #47b795);
    color: white;
  }

  .card-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .detail-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background: rgba(156, 175, 136, 0.1);
    border-radius: 10px;
    border: 1px solid rgba(156, 175, 136, 0.2);
    transition: all 0.3s ease;
  }

  .detail-item:hover {
    background: rgba(156, 175, 136, 0.15);
    transform: translateY(-1px);
  }

  .detail-icon {
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, #9CAF88, #4F7942);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.8rem;
    flex-shrink: 0;
  }

  .detail-content {
    flex: 1;
  }

  .detail-label {
    font-size: 0.75rem;
    color: #4F7942;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.25rem;
  }

  .detail-value {
    color: #355E3B;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .card-actions {
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
    padding-top: 1rem;
    border-top: 1px solid rgba(156, 175, 136, 0.2);
  }

  .action-btn {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .action-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  .action-btn:hover::before {
    left: 100%;
  }

  .btn-approve {
    background: linear-gradient(135deg, #28a745, #20c997);
    color: white;
    box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
  }

  .btn-approve:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
  }

  .btn-return {
    background: linear-gradient(135deg, #4bb0bf, #138496);
    color: white;
    box-shadow: 0 4px 15px rgba(23, 162, 184, 0.3);
  }

  .btn-return:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(23, 162, 184, 0.4);
  }

  .btn-delete {
    background: linear-gradient(135deg, #cf727b, #be858b);
    color: white;
    box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);
  }

  .btn-delete:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(220, 53, 69, 0.4);
  }

  .pagination-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  .pagination-btn {
    background: linear-gradient(135deg, #4F7942, #355E3B);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 4px 15px rgba(53, 94, 59, 0.3);
  }

  .pagination-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(53, 94, 59, 0.4);
  }

  .pagination-btn:disabled {
    background: linear-gradient(135deg, #9CAF88, #DBD7D2);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .pagination-info {
    background: rgba(255, 255, 255, 0.8);
    padding: 0.75rem 1.5rem;
    border-radius: 20px;
    color: #355E3B;
    font-weight: 600;
    border: 2px solid rgba(79, 121, 66, 0.2);
  }

  .empty-state {
    text-align: center;
    padding: 4rem 2rem;
    color: #9CAF88;
  }

  .empty-state i {
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.6;
  }

  .empty-state h3 {
    font-family: 'Playfair Display', serif;
    color: #4F7942;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  .empty-state p {
    color: #9CAF88;
    font-size: 1rem;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .controls-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .page-size-control {
      justify-content: center;
    }

    .card-details {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }

  @media (max-width: 768px) {
    .page-header {
      padding: 1.5rem;
    }

    .page-title {
      font-size: 2rem;
    }

    .controls-section {
      padding: 1rem;
    }

    .tracking-section {
      padding: 1rem;
    }

    .section-header {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }

    .card-header {
      flex-direction: column;
      gap: 1rem;
      align-items: flex-start;
    }

    .status-badge {
      margin-left: 0;
      align-self: flex-start;
    }

    .card-details {
      grid-template-columns: 1fr;
    }

    .card-actions {
      flex-direction: column;
    }

    .pagination-wrapper {
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>

<template>
  <div class="tracking-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-content">
        <div class="tracking-icon">
          <i class="bi bi-clipboard-check"></i>
        </div>
        <h1 class="page-title">Theo Dõi Mượn Sách</h1>
        <p class="page-subtitle">Quản lý và xử lý các yêu cầu mượn sách từ độc giả</p>
      </div>
    </div>

    <!-- Controls Section -->
    <div class="controls-section">
      <div class="controls-grid">
        <!-- Search -->
        <InputSearch v-model="search" />

        <!-- Page Size Control -->
        <div class="page-size-control">
          <label class="page-size-label">Hiển thị:</label>
          <select v-model="perPage" class="page-size-select">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <span class="page-size-label">yêu cầu / trang</span>
        </div>
      </div>
    </div>

    <!-- Tracking Section -->
    <div class="tracking-section">
      <div class="section-header">
        <h2 class="section-title">Danh Sách Yêu Cầu</h2>
        <div class="requests-count">
          <i class="bi bi-list-check"></i>
          {{ filteredDonMuon.length }} yêu cầu
        </div>
      </div>

      <!-- Tracking Grid -->
      <div v-if="paginatedDonMuon.length > 0" class="tracking-grid">
        <div 
          v-for="don in paginatedDonMuon" 
          :key="don._id" 
          class="tracking-card"
          :class="{
            'status-pending': don.TRANGTHAI === 'Chờ duyệt',
            'status-approved': don.TRANGTHAI === 'Đang mượn',
            'status-returned': don.TRANGTHAI === 'Đã trả'
          }"
        >
          <div class="card-header">
            <div class="borrower-info">
              <h3 class="borrower-name">
                <div class="borrower-icon">
                  <i class="bi bi-person"></i>
                </div>
                {{ loadHoTen(don.MADOCGIA) }}
              </h3>
              <div class="book-title">{{ loadSach(don.MASACH) }}</div>
            </div>
            <span 
              class="status-badge"
              :class="{
                'status-pending': don.TRANGTHAI === 'Chờ duyệt',
                'status-approved': don.TRANGTHAI === 'Đang mượn',
                'status-returned': don.TRANGTHAI === 'Đã trả'
              }"
            >
              {{ don.TRANGTHAI }}
            </span>
          </div>

          <div class="card-details">
            <div class="detail-item">
              <div class="detail-icon">
                <i class="bi bi-calendar-event"></i>
              </div>
              <div class="detail-content">
                <div class="detail-label">Ngày Mượn</div>
                <div class="detail-value">{{ formatDate(don.NGAYMUON) }}</div>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-icon">
                <i class="bi bi-calendar-check"></i>
              </div>
              <div class="detail-content">
                <div class="detail-label">Ngày Trả</div>
                <div class="detail-value">{{ formatNgay(don.NGAYTRA) }}</div>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-icon">
                <i class="bi bi-stack"></i>
              </div>
              <div class="detail-content">
                <div class="detail-label">Số Lượng</div>
                <div class="detail-value">{{ don.SOQUYEN }} quyển</div>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-icon">
                <i class="bi bi-info-circle"></i>
              </div>
              <div class="detail-content">
                <div class="detail-label">Trạng Thái</div>
                <div class="detail-value">{{ don.TRANGTHAI }}</div>
              </div>
            </div>
          </div>

          <div class="card-actions">
            <button
              v-if="don.TRANGTHAI === 'Chờ duyệt'"
              class="action-btn btn-approve"
              @click="$emit('duyetMuon', don)"
            >
              <i class="bi bi-check-circle"></i>
              Duyệt
            </button>
            
            <button
              v-if="don.TRANGTHAI === 'Đang mượn'"
              class="action-btn btn-return"
              @click="$emit('xacNhanTra', don)"
            >
              <i class="bi bi-arrow-return-left"></i>
              Xác Nhận Trả
            </button>
            
            <button
              class="action-btn btn-delete"
              @click="$emit('xoaDonMuon', don)"
            >
              <i class="bi bi-trash"></i>
              Xóa
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="empty-state">
        <i class="bi bi-clipboard-x"></i>
        <h3>Không có yêu cầu mượn sách</h3>
        <p>Hiện tại chưa có yêu cầu mượn sách nào cần xử lý.</p>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="pagination-wrapper">
        <button 
          class="pagination-btn" 
          @click="prevPage" 
          :disabled="currentPage === 1"
        >
          <i class="bi bi-chevron-left"></i>
          Trang trước
        </button>
        
        <div class="pagination-info">
          Trang {{ currentPage }} / {{ totalPages }}
        </div>
        
        <button 
          class="pagination-btn" 
          @click="nextPage" 
          :disabled="currentPage >= totalPages"
        >
          Trang sau
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import InputSearch from '@/components/InputSearch.vue'

  export default {
    components: { InputSearch },
    props: {
      danhSachDonMuon: Array
    },
    data() {
      return {
        currentPage: 1,
        perPage: 10,
        search: ''
      }
    },
    computed: {
      filteredDonMuon() {
        const keyword = this.search.toLowerCase().trim()
        return this.danhSachDonMuon.filter(don => {
          const tenSach = don.MASACH?.TENSACH?.toLowerCase() || ''
          const hoTen = don.MADOCGIA
            ? `${don.MADOCGIA.HOLOT} ${don.MADOCGIA.TEN}`.toLowerCase()
            : ''
          const trangThai = don.TRANGTHAI?.toLowerCase() || ''
          const ngayMuon = this.formatDate(don.NGAYMUON).toLowerCase()
          const ngayTra = this.formatNgay(don.NGAYTRA).toLowerCase()

          return (
            tenSach.includes(keyword) ||
            ngayMuon.includes(keyword) ||
            ngayTra.includes(keyword) ||
            hoTen.includes(keyword) ||
            trangThai.includes(keyword)
          )
        })
      },
      totalPages() {
        return Math.ceil(this.filteredDonMuon.length / this.perPage)
      },
      paginatedDonMuon() {
        const start = (this.currentPage - 1) * this.perPage
        const end = start + this.perPage
        return this.filteredDonMuon.slice(start, end)
      }
    },
    methods: {
      loadHoTen(docGia) {
        if (!docGia || typeof docGia !== 'object') return 'Không tìm thấy'
        return `${docGia.HOLOT} ${docGia.TEN}`
      },
      loadSach(maSach) {
        if (!maSach || typeof maSach !== 'object') return 'Không tìm thấy'
        return `${maSach.TENSACH}`
      },
      formatDate(date) {
        return new Date(date).toLocaleDateString('vi-VN')
      },
      formatNgay(ngay) {
        if (!ngay || ngay === 'null') return 'Chưa trả'
        return new Date(ngay).toLocaleDateString('vi-VN')
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++
        }
      }
    },
    watch: {
      perPage() {
        this.currentPage = 1
      }
    }
  }
</script>
