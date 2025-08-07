<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.book-management {
  min-height: 100vh;
  background: linear-gradient(135deg, #b4db96 0%, #d0dfee 100%);
  padding: 2rem;
  animation: fadeInUp 0.8s ease-out;
}

.page-header {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95),
    rgba(219, 215, 210, 0.9)
  );
  backdrop-filter: blur(20px);
  border-radius: 25px;
  padding: 3rem 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 15px 35px rgba(53, 94, 59, 0.1);
  border: 1px solid rgba(156, 175, 136, 0.3);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-header::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
      circle at 30% 70%,
      rgba(79, 121, 66, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 30%,
      rgba(156, 175, 136, 0.15) 0%,
      transparent 50%
    );
  animation: pulse 10s ease-in-out infinite;
}

.header-content {
  position: relative;
  z-index: 2;
}

.page-title {
  font-family: "Playfair Display", serif;
  font-size: 3rem;
  color: #355e3b;
  margin-bottom: 0.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(53, 94, 59, 0.1);
}

.page-subtitle {
  color: #4f7942;
  font-size: 1.2rem;
  opacity: 0.9;
  font-weight: 500;
  margin-bottom: 2rem;
}

.library-icon {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #4f7942, #355e3b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: white;
  font-size: 2.5rem;
  box-shadow: 0 15px 30px rgba(79, 121, 66, 0.4);
  position: relative;
  transition: all 0.3s ease;
}

.library-icon:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(79, 121, 66, 0.5);
}

.library-icon::after {
  content: "";
  position: absolute;
  top: -5px;
  right: -5px;
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #ffc107, #e0a800);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(255, 193, 7, 0.4);
}

.library-stats {
  background: rgba(79, 121, 66, 0.1);
  border: 2px solid rgba(79, 121, 66, 0.2);
  border-radius: 20px;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  border: 1px solid rgba(156, 175, 136, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: left 0.6s ease;
}

.stat-item:hover::before {
  left: 100%;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(53, 94, 59, 0.15);
  border-color: #4f7942;
}

.stat-number {
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #355e3b;
  margin: 0 0 0.5rem 0;
  text-shadow: 1px 1px 2px rgba(53, 94, 59, 0.1);
}

.stat-label {
  color: #4f7942;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.controls-section {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(53, 94, 59, 0.1);
  border: 1px solid rgba(156, 175, 136, 0.2);
}

.controls-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.action-btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
  min-width: 160px;
  justify-content: center;
}

.action-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

.action-btn:hover::before {
  left: 100%;
}

.btn-add {
  background: linear-gradient(135deg, #4f7942, #355e3b);
  color: white;
  box-shadow: 0 8px 20px rgba(79, 121, 66, 0.3);
}

.btn-add:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(79, 121, 66, 0.4);
}

.btn-publisher {
  background: linear-gradient(135deg, #9caf88, #4f7942);
  color: white;
  box-shadow: 0 8px 20px rgba(156, 175, 136, 0.3);
}

.btn-publisher:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(156, 175, 136, 0.4);
}

.books-section {
  background: rgba(156, 175, 136, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 20px; /* Bo góc cho khung bảng */
  border: 2px solid #c4debc; /* Viền xanh cho khung bảng */
  padding: 2.5rem;
  box-shadow: 0 15px 35px rgba(53, 94, 59, 0.1);
  border: 1px solid rgba(156, 175, 136, 0.2);
}

.books-section table {
  border-radius: 15px;
  overflow: hidden;
  border: 1.5px solid #b7e8a9;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 3px solid rgba(156, 175, 136, 0.2);
}

.section-title {
  font-family: "Playfair Display", serif;
  font-size: 2.2rem;
  color: #355e3b;
  margin: 0;
  font-weight: 700;
}

.books-count {
  background: linear-gradient(135deg, #9caf88, #dbd7d2);
  color: #355e3b;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(156, 175, 136, 0.3);
}

/* Form Overlay */
.form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(57, 99, 63, 0.8);
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.form-container {
  background: (215, 248, 227, 0.95); /* Đảm bảo không bị ghi đè */
  border-radius: 25px;
  border: 2px solid #4f7942; /* Thêm viền xanh cho form */
  max-width: 700px;
  width: 95%;
  max-height: 95vh;
  overflow-y: auto;
  box-shadow: 0 30px 60px rgba(53, 94, 59, 0.4);
  animation: slideUp 0.3s ease;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .controls-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .action-buttons {
    justify-content: center;
  }

  .library-stats {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media (max-width: 768px) {
  .book-management {
    padding: 1rem;
  }

  .page-header {
    padding: 2rem 1.5rem;
  }

  .page-title {
    font-size: 2.2rem;
  }

  .library-icon {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }

  .controls-section {
    padding: 1.5rem;
  }

  .action-buttons {
    flex-direction: column;
    width: 100%;
  }

  .action-btn {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .books-section {
    padding: 1.5rem;
  }

  .section-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .library-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .stat-item {
    padding: 1rem;
  }

  .stat-number {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.8rem;
  }

  .library-stats {
    grid-template-columns: 1fr;
  }

  .form-container {
    width: 98%;
    margin: 1rem;
  }
}
</style>

<template>
  <div class="book-management">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-content">
        <div class="library-icon">
          <i class="bi bi-journal-bookmark"></i>
        </div>
        <h1 class="page-title">Quản Lý Thư Viện</h1>
        <p class="page-subtitle">
          Quản lý bộ sưu tập sách và nhà xuất bản một cách chuyên nghiệp
        </p>

        <!-- Library Statistics -->
        <div class="library-stats">
          <div class="stat-item">
            <div class="stat-number">{{ books.length }}</div>
            <div class="stat-label">Tổng sách</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ availableBooks }}</div>
            <div class="stat-label">Còn sách</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ outOfStockBooks }}</div>
            <div class="stat-label">Hết sách</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ nxbs.length }}</div>
            <div class="stat-label">Nhà XB</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Controls Section -->
    <div class="controls-section">
      <div class="controls-grid">
        <!-- Search -->
        <InputSearch v-model="search" />

        <!-- Action Buttons -->
        <div class="action-buttons">
          <button @click="openBookForm(null)" class="action-btn btn-add">
            <i class="bi bi-plus-circle"></i>
            Thêm Sách
          </button>

          <button @click="showNxbForm = true" class="action-btn btn-publisher">
            <i class="bi bi-building"></i>
            Thêm NXB
          </button>
        </div>
      </div>
    </div>

    <!-- Books Section -->
    <div class="books-section">
      <div class="section-header">
        <h2 class="section-title">Danh Sách Sách</h2>
        <div class="books-count">
          <i class="bi bi-collection"></i>
          {{ filteredBooks.length }} cuốn sách
        </div>
      </div>

      <SachList
        :books="filteredBooks"
        :nxbs="nxbs"
        @edit="openBookForm"
        @delete="deleteBook"
      />
    </div>

    <!-- Form Overlays -->
    <div v-if="showBookForm" class="form-overlay" @click="closeBookForm">
      <div class="form-container" @click.stop>
        <SachForm
          :book="selectedBook"
          :nxbList="nxbs"
          @submit="saveBook"
          @cancel="closeBookForm"
          :key="selectedBook?._id || 'new'"
        />
      </div>
    </div>

    <div v-if="showNxbForm" class="form-overlay" @click="showNxbForm = false">
      <div class="form-container" @click.stop>
        <NxbForm @submit="saveNxb" @cancel="showNxbForm = false" />
      </div>
    </div>
  </div>
</template>

<script>
import InputSearch from "@/components/InputSearch.vue";
import SachForm from "@/components/SachForm.vue";
import NxbForm from "@/components/NxbForm.vue";
import SachList from "@/components/SachList.vue";
import {
  fetchBooks,
  createBook,
  updateBook,
  deleteBook,
} from "@/services/sachService";
import { fetchNXB, createNXB } from "@/services/nxbService";

export default {
  components: { SachForm, NxbForm, SachList, InputSearch },
  data() {
    return {
      search: "",
      books: [],
      nxbs: [],
      showBookForm: false,
      showNxbForm: false,
      selectedBook: null,
      formKey: 0,
      saving: false,
    };
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => {
        const tenSach = book.TENSACH ? book.TENSACH.toLowerCase() : "";
        const maSach = book.MASACH ? book.MASACH.toLowerCase() : "";
        const tacGia = book.NGUONGOC_TACGIA
          ? book.NGUONGOC_TACGIA.trim().toLowerCase()
          : "";
        const keyword = this.search.toLowerCase().trim();

        const manxbValue = book.MANXB?._id || book.MANXB?.MANXB || "";
        const nxb = this.nxbs.find((n) => String(n._id) === String(manxbValue));
        const tenNXB = nxb ? nxb.TENNXB.toLowerCase() : "";

        return (
          tenSach.includes(keyword) ||
          maSach.includes(keyword) ||
          tenNXB.includes(keyword) ||
          tacGia.includes(keyword)
        );
      });
    },
    availableBooks() {
      return this.books.filter((book) => book.SOQUYEN > 0).length;
    },
    outOfStockBooks() {
      return this.books.filter((book) => book.SOQUYEN === 0).length;
    },
  },
  methods: {
    async loadBooks() {
      try {
        this.books = await fetchBooks();
      } catch (error) {
        console.error("Lỗi khi tải sách:", error);
      }
    },
    async loadNXBs() {
      try {
        this.nxbs = await fetchNXB();
      } catch (error) {
        console.error("Lỗi khi tải nhà xuất bản:", error);
      }
    },
    getNXBName(manxb) {
      const nxb = this.nxbs.find(
        (n) => String(n._id) === String(manxb?.MANXB || manxb)
      );
      return nxb ? nxb.TENNXB : "Không tìm thấy";
    },
    async openBookForm(book) {
      await this.loadNXBs();
      this.selectedBook = book ? { ...book } : null;
      this.showBookForm = true;
    },
    closeBookForm() {
      this.selectedBook = null;
      this.showBookForm = false;
    },
    async saveBook(book) {
      try {
        if (this.saving) return;
        this.saving = true;
        if (book._id) {
          await updateBook(book);
          alert("Cập nhật sách thành công!");
        } else {
          await createBook(book);
          alert("Thêm sách mới thành công!");
        }
        this.closeBookForm();
        await this.loadBooks();
      } catch (error) {
        console.error(
          "Lỗi chi tiết:",
          error.response ? error.response.data : error.message
        );
        alert(
          "Có lỗi xảy ra khi lưu sách: " +
            (error.response?.data?.message || error.message)
        );
      } finally {
        this.saving = false;
      }
    },
    async saveNxb(nxb) {
      try {
        const newNXB = await createNXB(nxb);
        this.nxbs.push(newNXB);
        alert("Thêm nhà xuất bản mới thành công!");
        this.showNxbForm = false;
      } catch (error) {
        console.error("Lỗi khi thêm nhà xuất bản:", error);
        alert("Có lỗi xảy ra khi thêm nhà xuất bản!");
      }
    },
    async deleteBook(id) {
      try {
        await deleteBook(id);
        alert("Xóa sách thành công!");
        await this.loadBooks();
      } catch (error) {
        console.error("Lỗi khi xóa sách:", error);
        alert("Có lỗi xảy ra khi xóa sách!");
      }
    },
  },
  created() {
    this.loadBooks();
    this.loadNXBs();
  },
};
</script>
