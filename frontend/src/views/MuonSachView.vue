<style scoped>
.borrow-page {
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
  background: radial-gradient(circle, rgba(156, 175, 136, 0.1) 0%, transparent 70%);
  animation: rotate 15s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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

.borrow-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4F7942, #355E3B);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
  box-shadow: 0 10px 25px rgba(53, 94, 59, 0.3);
}

.user-welcome {
  background: rgba(79, 121, 66, 0.1);
  border: 2px solid rgba(79, 121, 66, 0.2);
  border-radius: 15px;
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.welcome-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #4F7942, #355E3B);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
}

.welcome-text {
  flex: 1;
}

.welcome-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: #355E3B;
  margin: 0 0 0.25rem 0;
}

.welcome-subtitle {
  color: #4F7942;
  font-size: 0.9rem;
  margin: 0;
}

.action-section {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.create-borrow-btn {
  background: linear-gradient(135deg, #4F7942, #355E3B);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 8px 25px rgba(53, 94, 59, 0.3);
  position: relative;
  overflow: hidden;
}

.create-borrow-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.create-borrow-btn:hover::before {
  left: 100%;
}

.create-borrow-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(53, 94, 59, 0.4);
}

/* Borrow Form Modal */
.form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(53, 94, 59, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.form-modal {
  background: white;
  border-radius: 25px;
  max-width: 700px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(53, 94, 59, 0.3);
  animation: slideUp 0.3s ease;
}

.modal-header {
  background: linear-gradient(135deg, #4F7942, #355E3B);
  color: white;
  padding: 2rem;
  border-radius: 25px 25px 0 0;
  text-align: center;
  position: relative;
}

.modal-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  margin: 0;
}

.modal-subtitle {
  opacity: 0.9;
  margin-top: 0.5rem;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(90deg);
}

.modal-body {
  padding: 2rem;
}

.form-section {
  background: rgba(156, 175, 136, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(156, 175, 136, 0.2);
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: #355E3B;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  color: #355E3B;
  font-weight: 600;
}

.form-select, .form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid rgba(156, 175, 136, 0.3);
  border-radius: 10px;
  font-size: 1rem;
  background: white;
  color: #355E3B;
  transition: all 0.3s ease;
}

.form-select:focus, .form-input:focus {
  outline: none;
  border-color: #4F7942;
  box-shadow: 0 0 0 3px rgba(79, 121, 66, 0.1);
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.quantity-btn {
  background: #9CAF88;
  color: white;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.quantity-btn:hover {
  background: #4F7942;
  transform: scale(1.1);
}

.quantity-display {
  font-size: 1.2rem;
  font-weight: 600;
  color: #355E3B;
  min-width: 40px;
  text-align: center;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.action-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-add {
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
}

.btn-add:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(40, 167, 69, 0.3);
}

.btn-cancel {
  background: linear-gradient(135deg, #6c757d, #495057);
  color: white;
}

.btn-cancel:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(108, 117, 125, 0.3);
}

/* Borrow List */
.borrow-list-section {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(53, 94, 59, 0.1);
  border: 1px solid rgba(156, 175, 136, 0.2);
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(156, 175, 136, 0.2);
}

.list-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #355E3B;
  margin: 0;
}

.list-count {
  background: linear-gradient(135deg, #9CAF88, #DBD7D2);
  color: #355E3B;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

.borrow-items {
  display: grid;
  gap: 1rem;
}

.borrow-item {
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(156, 175, 136, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.borrow-item:hover {
  border-color: #4F7942;
  box-shadow: 0 5px 15px rgba(53, 94, 59, 0.1);
  transform: translateY(-2px);
}

.item-info {
  flex: 1;
}

.item-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: #355E3B;
  margin-bottom: 0.5rem;
}

.item-quantity {
  color: #4F7942;
  font-weight: 600;
}

.remove-btn {
  background: linear-gradient(135deg, #dc3545, #c82333);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.remove-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(220, 53, 69, 0.3);
}

.final-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid rgba(156, 175, 136, 0.2);
}

.btn-register {
  background: linear-gradient(135deg, #4F7942, #355E3B);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-register:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(79, 121, 66, 0.3);
}

.btn-clear {
  background: linear-gradient(135deg, #ffc107, #e0a800);
  color: #212529;
  border: none;
  padding: 1rem 2rem;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-clear:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
}

.empty-state {
  text-align: center;
  padding: 3rem;
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
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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

/* Responsive */
@media (max-width: 768px) {
  .page-header {
    padding: 1.5rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .form-modal {
    width: 95%;
  }

  .modal-body {
    padding: 1rem;
  }

  .borrow-item {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .final-actions {
    flex-direction: column;
  }

  .action-buttons {
    flex-direction: column;
  }
}
</style>

<template>
  <div class="borrow-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-content">
        <div class="borrow-icon">
          <i class="bi bi-book-half"></i>
        </div>
        <h1 class="page-title">Đăng Ký Mượn Sách</h1>
        <p class="page-subtitle">Tạo phiếu mượn sách dễ dàng và nhanh chóng</p>
        
        <!-- User Welcome Section -->
        <div class="user-welcome">
          <div class="welcome-icon">
            <i class="bi bi-person-check"></i>
          </div>
          <div class="welcome-text">
            <h3 class="welcome-title">Chào mừng độc giả!</h3>
            <p class="welcome-subtitle">Hãy chọn những cuốn sách bạn muốn mượn và tạo phiếu mượn ngay</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Section -->
    <div class="action-section">
      <button class="create-borrow-btn" @click="showBorrowForm = true">
        <i class="bi bi-plus-circle"></i>
        Tạo Phiếu Mượn Mới
      </button>
    </div>

    <!-- Borrow List Section -->
    <div v-if="borrowList.length > 0" class="borrow-list-section">
      <div class="list-header">
        <h2 class="list-title">Danh Sách Mượn</h2>
        <div class="list-count">
          <i class="bi bi-collection"></i>
          {{ borrowList.length }} cuốn sách
        </div>
      </div>

      <div class="borrow-items">
        <div v-for="(item, index) in borrowList" :key="index" class="borrow-item">
          <div class="item-info">
            <h3 class="item-title">{{ item.book.TENSACH }}</h3>
            <p class="item-quantity">
              <i class="bi bi-stack"></i>
              Số lượng: {{ item.quantity }} quyển
            </p>
          </div>
          <button class="remove-btn" @click="removeFromBorrowList(index)">
            <i class="bi bi-trash"></i>
            Xóa
          </button>
        </div>
      </div>

      <div class="final-actions">
        <button class="btn-register" @click="registerBorrow">
          <i class="bi bi-check-circle"></i>
          Đăng Ký Mượn
        </button>
        <button class="btn-clear" @click="cancelBorrow">
          <i class="bi bi-arrow-clockwise"></i>
          Làm Mới
        </button>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="borrow-list-section">
      <div class="empty-state">
        <i class="bi bi-book"></i>
        <h3>Chưa có sách nào trong danh sách</h3>
        <p>Nhấn "Tạo Phiếu Mượn Mới" để bắt đầu thêm sách</p>
      </div>
    </div>

    <!-- Borrow Form Modal -->
    <div v-if="showBorrowForm" class="form-overlay" @click="showBorrowForm = false">
      <div class="form-modal" @click.stop>
        <div class="modal-header">
          <h2 class="modal-title">Thêm Sách Vào Phiếu Mượn</h2>
          <p class="modal-subtitle">Chọn sách và số lượng muốn mượn</p>
          <button class="close-btn" @click="showBorrowForm = false">
            <i class="bi bi-x"></i>
          </button>
        </div>

        <div class="modal-body">
          <!-- Book Selection -->
          <div class="form-section">
            <h3 class="section-title">
              <i class="bi bi-book"></i>
              Chọn Sách
            </h3>
            <div class="form-group">
              <label class="form-label">Sách muốn mượn:</label>
              <select v-model="selectedBook" @change="updateAvailableQuantity" class="form-select">
                <option value="" disabled>-- Chọn sách từ thư viện --</option>
                <option v-for="book in books" :key="book._id" :value="book">
                  {{ book.TENSACH }} (Còn: {{ book.SOQUYEN }} quyển)
                </option>
              </select>
            </div>
          </div>

          <!-- Quantity Selection -->
          <div v-if="selectedBook" class="form-section">
            <h3 class="section-title">
              <i class="bi bi-stack"></i>
              Số Lượng
            </h3>
            <div class="form-group">
              <label class="form-label">Số lượng mượn:</label>
              <div class="quantity-controls">
                <button 
                  type="button" 
                  class="quantity-btn" 
                  @click="decreaseQuantity"
                  :disabled="quantity <= 1"
                >
                  <i class="bi bi-dash"></i>
                </button>
                <span class="quantity-display">{{ quantity }}</span>
                <button 
                  type="button" 
                  class="quantity-btn" 
                  @click="increaseQuantity"
                  :disabled="quantity >= (selectedBook ? selectedBook.SOQUYEN : 1)"
                >
                  <i class="bi bi-plus"></i>
                </button>
              </div>
              <small style="color: #4F7942; margin-top: 0.5rem; display: block;">
                Tối đa: {{ selectedBook ? selectedBook.SOQUYEN : 0 }} quyển
              </small>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="action-buttons">
            <button class="action-btn btn-add" @click="addToBorrowList" :disabled="!selectedBook">
              <i class="bi bi-plus-circle"></i>
              Thêm Vào Danh Sách
            </button>
            <button class="action-btn btn-cancel" @click="showBorrowForm = false">
              <i class="bi bi-x-circle"></i>
              Hủy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getBooks, borrowBooks } from "@/services/muonsachService";

export default {
  data() {
    return {
      showBorrowForm: false,
      books: [],
      selectedBook: null,
      quantity: 1,
      borrowList: [],
      ngayMuon: "",
    };
  },

  computed: {
    docGiaId() {
      return this.$store.state.user._id; 
    },
  },

  methods: {
    async loadBooks() {
      this.books = await getBooks();
    },

    updateAvailableQuantity() {
      this.quantity = 1;
    },

    increaseQuantity() {
      if (this.selectedBook && this.quantity < this.selectedBook.SOQUYEN) {
        this.quantity++;
      }
    },

    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },

    openBorrowForm() {
      const today = new Date();
      this.ngayMuon = today.toISOString().split("T")[0];
    },

    addToBorrowList() {
      if (!this.selectedBook || !this.selectedBook.TENSACH || this.quantity < 1) {
        alert("Vui lòng chọn sách hợp lệ và nhập số lượng!");
        return;
      }

      const existing = this.borrowList.find(item => item.book._id === this.selectedBook._id);
      if (existing) {
        existing.quantity += this.quantity;
      } else {
        this.borrowList.push({ book: this.selectedBook, quantity: this.quantity });
      }
      
      // Reset form
      this.selectedBook = null;
      this.quantity = 1;
      this.showBorrowForm = false;
      
      console.log("borrowList:", JSON.stringify(this.borrowList, null, 2));
    },

    removeFromBorrowList(index) {
      this.borrowList.splice(index, 1);
    },

    async registerBorrow() {
      this.openBorrowForm(); 

      if (this.borrowList.length === 0) {
        alert("Danh sách mượn trống!");
        return;
      }

      try {
        await borrowBooks(this.docGiaId, this.borrowList, this.ngayMuon);
        alert("Đăng ký mượn thành công! Vui lòng chờ duyệt.");
        this.borrowList = [];
        this.selectedBook = null;
        this.quantity = 1;
        this.showBorrowForm = false;
      } catch (error) {
        alert(error.response?.data?.message || "Lỗi không xác định!");
        console.error(error);
      }
    },

    cancelBorrow() {
      this.borrowList = [];
      this.selectedBook = null;
      this.quantity = 1;
    },
  },

  mounted() {
    this.loadBooks(); 
  },
};
</script>
