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

@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}

.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2.5rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(219, 215, 210, 0.9));
  backdrop-filter: blur(20px);
  border-radius: 25px;
  box-shadow: 0 20px 40px rgba(53, 94, 59, 0.15);
  border: 1px solid rgba(156, 175, 136, 0.3);
  animation: fadeInUp 0.6s ease-out;
  position: relative;
  overflow: hidden;
}

.form-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: -200px;
  width: 200px;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: shimmer 3s infinite;
}

.form-header {
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 2;
}

.form-icon {
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
  box-shadow: 0 10px 25px rgba(79, 121, 66, 0.3);
  transition: all 0.3s ease;
}

.form-icon:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(79, 121, 66, 0.4);
}

.form-title {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #355E3B;
  margin: 0;
  font-weight: 700;
}

.form-subtitle {
  color: #4F7942;
  font-size: 1rem;
  opacity: 0.8;
  margin-top: 0.5rem;
}

.form-content {
  position: relative;
  z-index: 2;
}

.form-group {
  margin-bottom: 2rem;
}

.form-label {
  font-weight: 600;
  display: block;
  margin-bottom: 0.75rem;
  color: #355E3B;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-control {
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid rgba(156, 175, 136, 0.3);
  border-radius: 15px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #355E3B;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.form-control:focus {
  border-color: #4F7942;
  outline: none;
  box-shadow: 0 0 20px rgba(79, 121, 66, 0.2);
  background: white;
}

.form-control:hover {
  border-color: rgba(79, 121, 66, 0.5);
}

.form-select {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23355E3B' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 1rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 3rem;
}

.image-section {
  background: rgba(156, 175, 136, 0.1);
  border: 2px dashed rgba(156, 175, 136, 0.3);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.image-section-title {
  font-weight: 600;
  color: #355E3B;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  text-align: center;
}

.input-type-toggle {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  justify-content: center;
}

.toggle-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid rgba(156, 175, 136, 0.3);
  background: rgba(255, 255, 255, 0.8);
  color: #4F7942;
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.toggle-btn.active {
  background: linear-gradient(135deg, #4F7942, #355E3B);
  color: white;
  border-color: #355E3B;
  box-shadow: 0 4px 15px rgba(79, 121, 66, 0.3);
}

.toggle-btn:hover:not(.active) {
  border-color: #4F7942;
  background: rgba(79, 121, 66, 0.1);
  transform: translateY(-2px);
}

.url-input,
.file-input {
  margin-bottom: 1rem;
}

.file-input-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.file-input {
  width: 100%;
  padding: 1rem;
  border: 2px dashed rgba(156, 175, 136, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.file-input:hover {
  border-color: #4F7942;
  background: rgba(79, 121, 66, 0.05);
}

.image-preview-container {
  text-align: center;
  margin-top: 1.5rem;
}

.image-preview {
  max-width: 250px;
  max-height: 300px;
  object-fit: cover;
  border-radius: 15px;
  border: 3px solid rgba(156, 175, 136, 0.3);
  box-shadow: 0 10px 25px rgba(53, 94, 59, 0.2);
  transition: all 0.3s ease;
}

.image-preview:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 35px rgba(53, 94, 59, 0.3);
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 140px;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-success {
  background: linear-gradient(135deg, #28a745, #20c997);
  border: none;
  color: white;
  box-shadow: 0 8px 20px rgba(40, 167, 69, 0.3);
}

.btn-success:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(40, 167, 69, 0.4);
}

.btn-secondary {
  background: linear-gradient(135deg, #9CAF88, #4F7942);
  border: none;
  color: white;
  box-shadow: 0 8px 20px rgba(156, 175, 136, 0.3);
}

.btn-secondary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(156, 175, 136, 0.4);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

/* Responsive Design */
@media (max-width: 768px) {
  .form-container {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }

  .form-title {
    font-size: 1.6rem;
  }

  .form-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }

  .input-type-toggle {
    flex-direction: column;
    align-items: center;
  }

  .toggle-btn {
    width: 100%;
    max-width: 200px;
    justify-content: center;
  }

  .form-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 250px;
  }
}

@media (max-width: 480px) {
  .form-container {
    padding: 1.5rem 1rem;
  }

  .form-title {
    font-size: 1.4rem;
  }

  .image-preview {
    max-width: 200px;
    max-height: 240px;
  }
}
</style>

<template>
  <div class="form-container">
    <!-- Form Header -->
    <div class="form-header">
      <div class="form-icon">
        <i class="bi bi-book"></i>
      </div>
      <h2 class="form-title">{{ book._id ? 'Cập Nhật Sách' : 'Thêm Sách Mới' }}</h2>
      <p class="form-subtitle">{{ book._id ? 'Chỉnh sửa thông tin sách' : 'Nhập thông tin sách mới' }}</p>
    </div>

    <!-- Form Content -->
    <form @submit.prevent="submitForm" class="form-content">
      <div class="form-group">
        <label for="MASACH" class="form-label">Mã Sách</label>
        <input
          type="text"
          class="form-control"
          id="MASACH"
          v-model="bookLocal.MASACH"
          placeholder="Nhập mã sách"
          required
        />
      </div>

      <div class="form-group">
        <label for="TENSACH" class="form-label">Tên Sách</label>
        <input
          type="text"
          class="form-control"
          id="TENSACH"
          v-model="bookLocal.TENSACH"
          placeholder="Nhập tên sách"
          required
        />
      </div>

      <div class="form-group">
        <label for="MANXB" class="form-label">Nhà Xuất Bản</label>
        <select v-model="bookLocal.MANXB" class="form-control form-select" id="MANXB" required>
          <option value="" disabled>-- Chọn nhà xuất bản --</option>
          <option v-for="nxb in nxbList" :key="nxb._id" :value="nxb._id">
            {{ nxb.TENNXB }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="SOQUYEN" class="form-label">Số lượng quyển</label>
        <input
          type="number"
          class="form-control"
          id="SOQUYEN"
          v-model.number="bookLocal.SOQUYEN"
          min="1"
          placeholder="Nhập số lượng"
          required
        />
      </div>

      <div class="form-group">
        <label for="DONGIA" class="form-label">Đơn giá (VNĐ)</label>
        <input
          type="number"
          v-model.number="bookLocal.DONGIA"
          class="form-control"
          id="DONGIA"
          placeholder="Nhập đơn giá"
          required
        />
      </div>

      <div class="form-group">
        <label for="NAMXUATBAN" class="form-label">Năm xuất bản</label>
        <input
          type="number"
          v-model.number="bookLocal.NAMXUATBAN"
          class="form-control"
          id="NAMXUATBAN"
          :min="1900"
          :max="new Date().getFullYear()"
          placeholder="Nhập năm xuất bản"
          required
        />
      </div>

      <div class="form-group">
        <label for="NGUONGOC_TACGIA" class="form-label">Tác giả</label>
        <input
          type="text"
          v-model="bookLocal.NGUONGOC_TACGIA"
          class="form-control"
          id="NGUONGOC_TACGIA"
          placeholder="Nhập tên tác giả"
          required
        />
      </div>
      
      <!-- Image Section -->
      <div class="image-section">
        <div class="image-section-title">
          <i class="bi bi-image"></i>
          Hình ảnh sách
        </div>
        
        <!-- Toggle between URL and File -->
        <div class="input-type-toggle">
          <button 
            type="button" 
            class="toggle-btn"
            :class="{ active: imageInputType === 'url' }"
            @click="imageInputType = 'url'"
          >
            <i class="bi bi-link-45deg"></i>
            Nhập URL
          </button>
          <button 
            type="button" 
            class="toggle-btn"
            :class="{ active: imageInputType === 'file' }"
            @click="imageInputType = 'file'"
          >
            <i class="bi bi-upload"></i>
            Tải file
          </button>
        </div>

        <!-- URL Input -->
        <div v-if="imageInputType === 'url'" class="url-input">
          <input 
            type="url" 
            v-model="bookLocal.HINHANH_URL"
            placeholder="Nhập URL hình ảnh (https://...)"
            class="form-control"
            @input="onUrlChange"
          />
        </div>

        <!-- File Input -->
        <div v-if="imageInputType === 'file'" class="file-input-wrapper">
          <input 
            type="file" 
            id="HINHANH" 
            @change="onFileChange" 
            accept="image/*"
            class="file-input"
          />
          <div style="text-align: center; margin-top: 0.5rem; color: #4F7942; font-size: 0.9rem;">
            <i class="bi bi-cloud-upload"></i>
            Chọn file hình ảnh
          </div>
        </div>

        <!-- Image Preview -->
        <div v-if="previewUrl" class="image-preview-container">
          <img :src="previewUrl" alt="Preview" class="image-preview" />
        </div>
      </div>

      <!-- Form Actions -->
      <div class="form-actions">
        <button type="submit" class="btn btn-success">
          <i class="bi bi-check-circle"></i>
          {{ book._id ? 'Cập nhật' : 'Thêm mới' }}
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          @click="$emit('cancel')"
        >
          <i class="bi bi-x-circle"></i>
          Hủy bỏ
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['submit', 'cancel'],
  props: {
    book: {
      type: Object,
      default: () => ({
        MASACH: '',
        TENSACH: '',
        MANXB: '',
        SOQUYEN: 1,
        DONGIA: 0,
        NAMXUATBAN: new Date().getFullYear(),
        NGUONGOC_TACGIA: '',
        HINHANH: null
      })
    },
    nxbList: { type: Array, required: true }
  },
  data() {
    return {
      bookLocal: { ...this.book },
      formKey: 0,
      imageInputType: 'url',
      previewUrl: null
    }
  },
  watch: {
    book: {
      handler(newVal) {
        if (!newVal) return;
        this.bookLocal = { ...newVal }
        if (typeof newVal.MANXB === 'object' && newVal.MANXB !== null) {
          this.bookLocal.MANXB = newVal.MANXB._id;
        }
        
        // Handle existing image
        if (newVal.HINHANH) {
          if (newVal.HINHANH.startsWith('http')) {
            this.imageInputType = 'url';
            this.bookLocal.HINHANH_URL = newVal.HINHANH;
            this.previewUrl = newVal.HINHANH;
          } else {
            this.previewUrl = `http://localhost:3000${newVal.HINHANH}`;
          }
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0]
      if (file) {
        this.bookLocal.HINHANH = file
        this.bookLocal.HINHANH_URL = null
        
        // Create preview
        const reader = new FileReader()
        reader.onload = (e) => {
          this.previewUrl = e.target.result
        }
        reader.readAsDataURL(file)
      }
    },
    onUrlChange() {
      if (this.bookLocal.HINHANH_URL) {
        this.bookLocal.HINHANH = null // Clear file if exists
        this.previewUrl = this.bookLocal.HINHANH_URL
      } else {
        this.previewUrl = null
      }
    },
    submitForm() {
      if (!this.bookLocal.MANXB) {
        alert('Vui lòng chọn Nhà Xuất Bản!')
        return
      }

      const bookData = { ...this.bookLocal }
      
      // Handle image
      if (this.imageInputType === 'url' && this.bookLocal.HINHANH_URL) {
        bookData.HINHANH = this.bookLocal.HINHANH_URL
      }
      // If it's a file, bookData.HINHANH is already set in onFileChange

      this.$emit('submit', bookData)
    }
  }
}
</script>
