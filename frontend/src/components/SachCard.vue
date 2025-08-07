<style scoped>
  .book-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(53, 94, 59, 0.1);
    border: 1px solid rgba(156, 175, 136, 0.2);
    transition: all 0.4s ease;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .book-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(53, 94, 59, 0.2);
    border-color: rgba(79, 121, 66, 0.4);
  }

  .book-image-container {
    position: relative;
    height: 280px;
    overflow: hidden;
    background: linear-gradient(135deg, #DBD7D2, #9CAF88);
  }

  .book-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .book-card:hover .book-image {
    transform: scale(1.05);
  }

  .book-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 60%,
      rgba(53, 94, 59, 0.8) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .book-card:hover .book-overlay {
    opacity: 1;
  }

  .book-status {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    backdrop-filter: blur(10px);
  }

  .status-available {
    background: rgba(40, 167, 69, 0.9);
    color: white;
  }

  .status-unavailable {
    background: rgba(220, 53, 69, 0.9);
    color: white;
  }

  .book-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .book-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    font-weight: 600;
    color: #355E3B;
    margin-bottom: 0.75rem;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .book-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .book-detail {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #4F7942;
    font-size: 0.95rem;
  }

  .book-detail i {
    width: 16px;
    color: #9CAF88;
    font-size: 0.9rem;
  }

  .book-detail strong {
    color: #355E3B;
    min-width: 80px;
  }

  .book-price {
    font-size: 1.1rem;
    font-weight: 600;
    color: #4F7942;
    margin-top: 0.5rem;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(156, 175, 136, 0.2);
  }

  .price-value {
    color: #355E3B;
    font-family: 'Playfair Display', serif;
  }

  .image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #9CAF88;
    font-size: 0.9rem;
    text-align: center;
    padding: 2rem;
  }

  .image-placeholder i {
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.6;
  }

  .image-error {
    background: linear-gradient(135deg, #f8d7da, #f5c6cb);
    color: #721c24;
  }

  .image-error i {
    color: #721c24;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .book-image-container {
      height: 240px;
    }

    .book-content {
      padding: 1rem;
    }

    .book-title {
      font-size: 1.2rem;
    }

    .book-detail {
      font-size: 0.9rem;
    }
  }
</style>

<template>
  <div class="book-card">
    <!-- Image Container -->
    <div class="book-image-container">
      <!-- Book Image -->
      <img 
        v-if="!imageError && imageUrl" 
        :src="imageUrl" 
        :alt="sach.TENSACH" 
        class="book-image"
        @error="handleImageError"
        @load="handleImageLoad"
      />
      
      <!-- Placeholder -->
      <div 
        v-else 
        class="image-placeholder"
        :class="{ 'image-error': imageError }"
      >
        <i v-if="imageError" class="bi bi-exclamation-triangle"></i>
        <i v-else class="bi bi-image"></i>
        <div v-if="imageError">Không thể tải hình ảnh</div>
        <div v-else>Chưa có hình ảnh</div>
      </div>

      <!-- Overlay -->
      <div class="book-overlay"></div>

      <!-- Status Badge -->
      <div 
        class="book-status"
        :class="{
          'status-available': sach.SOQUYEN > 0,
          'status-unavailable': sach.SOQUYEN === 0
        }"
      >
        {{ sach.SOQUYEN > 0 ? 'Còn sách' : 'Hết sách' }}
      </div>
    </div>

    <!-- Content -->
    <div class="book-content">
      <h3 class="book-title">{{ sach.TENSACH }}</h3>
      
      <div class="book-details">
        <div class="book-detail">
          <i class="bi bi-person"></i>
          <strong>Tác giả:</strong>
          <span>{{ sach.NGUONGOC_TACGIA || "Không rõ" }}</span>
        </div>
        
        <div class="book-detail">
          <i class="bi bi-calendar"></i>
          <strong>Năm XB:</strong>
          <span>{{ sach.NAMXUATBAN || "Không rõ" }}</span>
        </div>
        
        <div class="book-detail">
          <i class="bi bi-building"></i>
          <strong>NXB:</strong>
          <span>{{ getNXBName(sach) || "Không rõ" }}</span>
        </div>
        
        <div class="book-detail">
          <i class="bi bi-stack"></i>
          <strong>Số lượng:</strong>
          <span>{{ sach.SOQUYEN }} quyển</span>
        </div>
      </div>

      <div class="book-price">
        <i class="bi bi-tag"></i>
        Giá: <span class="price-value">{{ formatPrice(sach.DONGIA) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      sach: Object,
      nxbs: Object
    },
    data() {
      return {
        imageError: false,
        imageLoaded: false
      }
    },
    computed: {
      imageUrl() {
        if (!this.sach.HINHANH) return null;
        
        // Kiểm tra xem có phải là URL đầy đủ không
        if (this.sach.HINHANH.startsWith('http://') || this.sach.HINHANH.startsWith('https://')) {
          return this.sach.HINHANH;
        }
        
        // Nếu là đường dẫn tương đối, thêm base URL
        return `http://localhost:3000${this.sach.HINHANH}`;
      }
    },
    methods: {
      getNXBName(book) {
          if (!book || !book.MANXB) return "Chưa có NXB";

          const manxb = typeof book.MANXB === "object" ? book.MANXB.MANXB : book.MANXB; 
              
          const nxb = this.nxbs.find(n => 
              n.MANXB === manxb || 
              n._id === manxb || 
              String(n._id) === String(manxb) 
          );
          return nxb ? nxb.TENNXB : "Không tìm thấy";
      },
      formatPrice(price) {
        return new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND"
        }).format(price);
      },
      handleImageError() {
        this.imageError = true;
        console.warn('Không thể tải hình ảnh:', this.imageUrl);
      },
      handleImageLoad() {
        this.imageError = false;
        this.imageLoaded = true;
      }
    },
    watch: {
      // Reset trạng thái khi sách thay đổi
      'sach.HINHANH'() {
        this.imageError = false;
        this.imageLoaded = false;
      }
    }
  };
</script>
