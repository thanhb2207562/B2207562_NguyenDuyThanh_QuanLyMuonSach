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

@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-15px) rotate(3deg); 
  }
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

.account-management {
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(156, 175, 136, 0.15) 0%, #e9ecef 100%);
  padding: 2rem;
  animation: fadeInUp 0.8s ease-out;
}

.page-header {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(219, 215, 210, 0.9));
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
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(156, 175, 136, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(79, 121, 66, 0.15) 0%, transparent 50%);
  animation: float 15s ease-in-out infinite;
}

.header-content {
  position: relative;
  z-index: 2;
}

.page-title {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #355E3B;
  margin-bottom: 0.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(53, 94, 59, 0.1);
}

.page-subtitle {
  color: #4F7942;
  font-size: 1.2rem;
  opacity: 0.9;
  font-weight: 500;
  margin-bottom: 2rem;
}

.management-icon {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #355E3B, #4F7942);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: white;
  font-size: 2.5rem;
  box-shadow: 0 15px 30px rgba(53, 94, 59, 0.4);
  position: relative;
  transition: all 0.3s ease;
}

.management-icon:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(53, 94, 59, 0.5);
}

.management-icon::after {
  content: '';
  position: absolute;
  top: -5px;
  right: -5px;
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #28a745, #20c997);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(40, 167, 69, 0.4);
}

.stats-overview {
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
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.6s ease;
}

.stat-item:hover::before {
  left: 100%;
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(53, 94, 59, 0.15);
  border-color: #4F7942;
}

.stat-number {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #355E3B;
  margin: 0 0 0.5rem 0;
  text-shadow: 1px 1px 2px rgba(53, 94, 59, 0.1);
}

.stat-label {
  color: #4F7942;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.controls-section {
  background: rgba(156, 175, 136, 0.15);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(53, 94, 59, 0.1);
  border: 1px solid rgba(156, 175, 136, 0.2);
}

.tab-navigation {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.tab-btn {
  padding: 1rem 2rem;
  border: 2px solid rgba(156, 175, 136, 0.3);
  background: rgba(255, 255, 255, 0.9);
  color: #4F7942;
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
  min-width: 180px;
  justify-content: center;
}

.tab-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.tab-btn:hover::before {
  left: 100%;
}

.tab-btn.active {
  background: linear-gradient(135deg, #4F7942, #355E3B);
  color: white;
  border-color: #355E3B;
  box-shadow: 0 8px 20px rgba(53, 94, 59, 0.3);
  transform: translateY(-2px);
}

.tab-btn:hover:not(.active) {
  border-color: #4F7942;
  background: rgba(79, 121, 66, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(53, 94, 59, 0.2);
}

.add-employee-btn {
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 8px 20px rgba(40, 167, 69, 0.3);
  min-width: 180px;
  justify-content: center;
}

.add-employee-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(40, 167, 69, 0.4);
}

.management-section {
  background: rgba(156, 175, 136, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 25px;
  padding: 2.5rem;
  box-shadow: 0 15px 35px rgba(53, 94, 59, 0.1);
  border: 1px solid rgba(156, 175, 136, 0.2);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 3px solid rgba(156, 175, 136, 0.2);
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: #355E3B;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
}

.section-count {
  background: linear-gradient(135deg, #9CAF88, #DBD7D2);
  color: #355E3B;
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
  background: rgba(53, 94, 59, 0.8);
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.form-container {
  background: white;
  border-radius: 25px;
  max-width: 700px;
  width: 95%;
  max-height: 95vh;
  overflow-y: auto;
  box-shadow: 0 30px 60px rgba(53, 94, 59, 0.4);
  animation: slideUp 0.3s ease;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .tab-navigation {
    justify-content: center;
  }

  .stats-overview {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media (max-width: 768px) {
  .account-management {
    padding: 1rem;
  }

  .page-header {
    padding: 2rem 1.5rem;
  }

  .page-title {
    font-size: 2.2rem;
  }

  .management-icon {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }

  .controls-section {
    padding: 1.5rem;
  }

  .tab-navigation {
    flex-direction: column;
    align-items: center;
  }

  .tab-btn,
  .add-employee-btn {
    width: 100%;
    max-width: 300px;
  }

  .management-section {
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

  .stats-overview {
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

  .stats-overview {
    grid-template-columns: 1fr;
  }

  .form-container {
    width: 98%;
    margin: 1rem;
  }
}
</style>

<template>
  <div class="account-management">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-content">
        <div class="management-icon">
          <i class="bi bi-people"></i>
        </div>
        <h1 class="page-title">Quản Lý Tài Khoản</h1>
        <p class="page-subtitle">Quản lý độc giả và nhân viên thư viện một cách hiệu quả</p>
        
        <!-- Statistics Overview -->
        <div class="stats-overview">
          <div class="stat-item">
            <div class="stat-number">{{ docGias.length }}</div>
            <div class="stat-label">Độc giả</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ nhanViens.length }}</div>
            <div class="stat-label">Nhân viên</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ nhanViens.filter(nv => nv.CHUCVU === 'QuanLyThuVien').length }}</div>
            <div class="stat-label">Quản lý</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ docGias.length + nhanViens.length }}</div>
            <div class="stat-label">Tổng cộng</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Controls Section -->
    <div class="controls-section">
      <div class="tab-navigation">
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'docgia' }"
          @click="activeTab = 'docgia'"
        >
          <i class="bi bi-person"></i>
          Danh Sách Độc Giả
        </button>
        
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'nhanvien' }"
          @click="activeTab = 'nhanvien'"
        >
          <i class="bi bi-person-badge"></i>
          Danh Sách Nhân Viên
        </button>
        
        <button 
          class="add-employee-btn" 
          @click="showNhanVienForm = true"
        >
          <i class="bi bi-person-plus"></i>
          Thêm Nhân Viên
        </button>
      </div>
    </div>

    <!-- Management Section -->
    <div class="management-section">
      <div class="section-header">
        <h2 class="section-title">
          <i v-if="activeTab === 'docgia'" class="bi bi-people"></i>
          <i v-else class="bi bi-person-badge"></i>
          {{ activeTab === 'docgia' ? 'Quản Lý Độc Giả' : 'Quản Lý Nhân Viên' }}
        </h2>
        <div class="section-count">
          <i class="bi bi-list-check"></i>
          {{ activeTab === 'docgia' ? docGias.length : nhanViens.length }} tài khoản
        </div>
      </div>

      <!-- Content based on active tab -->
      <DocGiaList
        v-if="activeTab === 'docgia'"
        :docGias="docGias"
        @deleteDocGia="deleteDocGia"
      />
      
      <NhanVienList
        v-if="activeTab === 'nhanvien'"
        :nhanViens="nhanViens"
        @deleteNhanVien="deleteNhanVien"
      />
    </div>

    <!-- Form Overlay -->
    <div v-if="showNhanVienForm" class="form-overlay" @click="showNhanVienForm = false">
      <div class="form-container" @click.stop>
        <NhanVienForm
          @submit="addNhanVien"
          @cancel="showNhanVienForm = false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DocGiaList from '@/components/DocGiaList.vue'
import NhanVienList from '@/components/NhanVienList.vue'
import NhanVienForm from '@/components/NhanVienForm.vue'

export default {
  components: { DocGiaList, NhanVienList, NhanVienForm },
  data() {
    return {
      activeTab: 'docgia',
      docGias: [],
      nhanViens: [],
      showNhanVienForm: false
    }
  },
  async created() {
    await this.fetchDocGias()
    await this.fetchNhanViens()
  },
  methods: {
    async fetchDocGias() {
      try {
        const response = await axios.get('http://localhost:3000/api/docgia')
        this.docGias = response.data.map(docGia => docGia._doc || docGia)
      } catch (error) {
        console.error('Lỗi khi tải danh sách độc giả:', error)
      }
    },
    async fetchNhanViens() {
      try {
        const response = await axios.get('http://localhost:3000/api/nhanvien')
        this.nhanViens = response.data
      } catch (error) {
        console.error('Lỗi khi tải danh sách nhân viên:', error)
      }
    },
    async deleteDocGia(id) {
      if (confirm('Bạn có chắc muốn xóa độc giả này?')) {
        try {
          await axios.delete(`http://localhost:3000/api/docgia/${id}`)
          this.docGias = this.docGias.filter(docgia => docgia._id !== id)
          alert('Xóa độc giả thành công!')
        } catch (error) {
          console.error('Lỗi khi xóa độc giả:', error)
          alert('Có lỗi xảy ra khi xóa độc giả!')
        }
      }
    },
    async deleteNhanVien(id) {
      if (confirm('Bạn có chắc muốn xóa nhân viên này?')) {
        try {
          await axios.delete(`http://localhost:3000/api/nhanvien/${id}`)
          this.nhanViens = this.nhanViens.filter(
            nhanvien => nhanvien._id !== id
          )
          alert('Xóa nhân viên thành công!')
        } catch (error) {
          console.error('Lỗi khi xóa nhân viên:', error)
          alert('Có lỗi xảy ra khi xóa nhân viên!')
        }
      }
    },
    async addNhanVien(nhanvien) {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/auth/register/nhanvien',
          nhanvien
        )

        await this.fetchNhanViens()
        alert('Thêm nhân viên thành công!')
        this.showNhanVienForm = false
      } catch (error) {
        this.showNhanVienForm = false
        alert(error.response.data?.message || 'Lỗi khi thêm nhân viên!')
      }
    }
  }
}
</script>
