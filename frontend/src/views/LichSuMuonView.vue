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

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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

.history-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
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
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(79, 121, 66, 0.15) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
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

.history-icon {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #9CAF88, #4F7942);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: white;
  font-size: 2.5rem;
  box-shadow: 0 15px 30px rgba(156, 175, 136, 0.4);
  transition: all 0.3s ease;
}

.history-icon:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(156, 175, 136, 0.5);
}

.user-stats {
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

.page-size-control {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(156, 175, 136, 0.1);
  padding: 1rem 1.5rem;
  border-radius: 20px;
  border: 1px solid rgba(156, 175, 136, 0.2);
}

.page-size-label {
  color: #355E3B;
  font-weight: 600;
  font-size: 1rem;
}

.page-size-select {
  border: 2px solid rgba(156, 175, 136, 0.3);
  border-radius: 10px;
  padding: 0.75rem;
  background: white;
  color: #355E3B;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 80px;
}

.page-size-select:focus {
  outline: none;
  border-color: #4F7942;
  box-shadow: 0 0 10px rgba(79, 121, 66, 0.2);
}

.history-section {
  background: rgba(255, 255, 255, 0.95);
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
  font-weight: 700;
}

.history-count {
  background: linear-gradient(135deg, #9CAF88, #DBD7D2);
  color: #355E3B;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(156, 175, 136, 0.3);
}

.history-grid {
  display: grid;
  gap: 2rem;
}

.history-card {
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(156, 175, 136, 0.2);
  border-radius: 25px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.history-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  background: linear-gradient(to bottom, #4F7942, #9CAF88);
  transition: width 0.3s ease;
}

.history-card:hover {
  border-color: #4F7942;
  box-shadow: 0 15px 35px rgba(53, 94, 59, 0.2);
  transform: translateY(-5px);
}

.history-card:hover::before {
  width: 12px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.book-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #355E3B;
  margin: 0;
  flex: 1;
  line-height: 1.3;
  font-weight: 600;
}

.status-badge {
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-left: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.status-pending {
  background: linear-gradient(135deg, #ffc107, #e0a800);
  color: #212529;
}

.status-borrowed {
  background: linear-gradient(135deg, #17a2b8, #138496);
  color: white;
}

.status-returned {
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
}

.card-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(156, 175, 136, 0.1);
  border-radius: 15px;
  border: 1px solid rgba(156, 175, 136, 0.2);
  transition: all 0.3s ease;
}

.detail-item:hover {
  background: rgba(156, 175, 136, 0.15);
  transform: translateY(-2px);
}

.detail-icon {
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #9CAF88, #4F7942);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(156, 175, 136, 0.3);
}

.detail-content {
  flex: 1;
}

.detail-label {
  font-size: 0.85rem;
  color: #4F7942;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.25rem;
}

.detail-value {
  color: #355E3B;
  font-weight: 600;
  font-size: 1.1rem;
}

.pagination-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.pagination-btn {
  background: linear-gradient(135deg, #4F7942, #355E3B);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 8px 20px rgba(53, 94, 59, 0.3);
}

.pagination-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(53, 94, 59, 0.4);
}

.pagination-btn:disabled {
  background: linear-gradient(135deg, #9CAF88, #DBD7D2);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.pagination-info {
  background: rgba(255, 255, 255, 0.9);
  padding: 1rem 2rem;
  border-radius: 25px;
  color: #355E3B;
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid rgba(79, 121, 66, 0.2);
  box-shadow: 0 4px 15px rgba(53, 94, 59, 0.1);
}

.empty-state {
  text-align: center;
  padding: 5rem 2rem;
  color: #9CAF88;
}

.empty-state i {
  font-size: 5rem;
  margin-bottom: 1.5rem;
  opacity: 0.6;
}

.empty-state h3 {
  font-family: 'Playfair Display', serif;
  color: #4F7942;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
}

.empty-state p {
  color: #9CAF88;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .controls-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .page-size-control {
    justify-content: center;
  }

  .user-stats {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media (max-width: 768px) {
  .history-page {
    padding: 1rem;
  }

  .page-header {
    padding: 2rem 1.5rem;
  }

  .page-title {
    font-size: 2.2rem;
  }

  .history-icon {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }

  .controls-section {
    padding: 1.5rem;
  }

  .history-section {
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

  .pagination-wrapper {
    flex-direction: column;
    gap: 1rem;
  }

  .user-stats {
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

  .user-stats {
    grid-template-columns: 1fr;
  }

  .pagination-btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }

  .pagination-info {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>

<template>
  <div class="history-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-content">
        <div class="history-icon">
          <i class="bi bi-clock-history"></i>
        </div>
        <h1 class="page-title">Lịch Sử Mượn Sách</h1>
        <p class="page-subtitle">Theo dõi tất cả các giao dịch mượn sách của bạn một cách chi tiết</p>
        
        <!-- User Statistics -->
        <div class="user-stats">
          <div class="stat-item">
            <div class="stat-number">{{ lichSuMuon.length }}</div>
            <div class="stat-label">Tổng phiếu mượn</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ countByStatus('Chờ duyệt') }}</div>
            <div class="stat-label">Chờ duyệt</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ countByStatus('Đang mượn') }}</div>
            <div class="stat-label">Đang mượn</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ countByStatus('Đã trả') }}</div>
            <div class="stat-label">Đã trả</div>
          </div>
        </div>
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
          <span class="page-size-label">phiếu / trang</span>
        </div>
      </div>
    </div>

    <!-- History Section -->
    <div class="history-section">
      <div class="section-header">
        <h2 class="section-title">Lịch Sử Giao Dịch</h2>
        <div class="history-count">
          <i class="bi bi-journal-bookmark"></i>
          {{ filteredLichSuMuon.length }} phiếu mượn
        </div>
      </div>

      <!-- History Grid -->
      <div v-if="paginatedLichSuMuon.length > 0" class="history-grid">
        <div v-for="record in paginatedLichSuMuon" :key="record._id" class="history-card">
          <div class="card-header">
            <h3 class="book-title">{{ record.MASACH?.TENSACH || 'Không có thông tin' }}</h3>
            <span 
              class="status-badge"
              :class="{
                'status-pending': record.TRANGTHAI === 'Chờ duyệt',
                'status-borrowed': record.TRANGTHAI === 'Đang mượn',
                'status-returned': record.TRANGTHAI === 'Đã trả'
              }"
            >
              {{ record.TRANGTHAI }}
            </span>
          </div>

          <div class="card-details">
            <div class="detail-item">
              <div class="detail-icon">
                <i class="bi bi-calendar-event"></i>
              </div>
              <div class="detail-content">
                <div class="detail-label">Ngày Mượn</div>
                <div class="detail-value">{{ formatDate(record.NGAYMUON) }}</div>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-icon">
                <i class="bi bi-calendar-check"></i>
              </div>
              <div class="detail-content">
                <div class="detail-label">Ngày Trả</div>
                <div class="detail-value">{{ formatNgay(record.NGAYTRA) }}</div>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-icon">
                <i class="bi bi-stack"></i>
              </div>
              <div class="detail-content">
                <div class="detail-label">Số Lượng</div>
                <div class="detail-value">{{ record.SOQUYEN }} quyển</div>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-icon">
                <i class="bi bi-info-circle"></i>
              </div>
              <div class="detail-content">
                <div class="detail-label">Trạng Thái</div>
                <div class="detail-value">{{ record.TRANGTHAI }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="empty-state">
        <i class="bi bi-journal-x"></i>
        <h3>Chưa có lịch sử mượn sách</h3>
        <p>Bạn chưa có giao dịch mượn sách nào. Hãy bắt đầu mượn sách để xem lịch sử tại đây!</p>
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
import axios from 'axios'
import InputSearch from '@/components/InputSearch.vue'
import { mapGetters } from 'vuex'

export default {
  components: { InputSearch },
  data() {
    return {
      lichSuMuon: [],
      currentPage: 1,
      perPage: 5,
      search: ''
    }
  },
  computed: {
    ...mapGetters(['getUser']),
    filteredLichSuMuon() {
      const keyword = this.search.toLowerCase().trim()

      return this.lichSuMuon.filter(m => {
        const tenSach = m.MASACH?.TENSACH?.toLowerCase() || ''
        const ngayMuon = this.formatDate(m.NGAYMUON).toLowerCase() 
        const ngayTra = this.formatNgay(m.NGAYTRA).toLowerCase() 
        const trangThai = m.TRANGTHAI.toLowerCase() 

        return (
          tenSach.includes(keyword) ||
          ngayMuon.includes(keyword) ||
          ngayTra.includes(keyword) ||
          trangThai.includes(keyword)
        )
      })
    },
    totalPages() {
      return Math.ceil(this.filteredLichSuMuon.length / this.perPage)
    },
    paginatedLichSuMuon() {
      const start = (this.currentPage - 1) * this.perPage
      return this.filteredLichSuMuon.slice(start, start + this.perPage)
    }
  },
  methods: {
    async getLichSuMuon() {
      if (!this.getUser) return

      try {
        const res = await axios.get(
          'http://localhost:3000/api/theodoimuonsach'
        )
        this.lichSuMuon = res.data.filter(
          m => String(m.MADOCGIA?._id) === String(this.getUser._id)
        )
      } catch (error) {
        console.error('Lỗi khi lấy lịch sử mượn sách:', error)
      }
    },
    countByStatus(status) {
      return this.lichSuMuon.filter(item => item.TRANGTHAI === status).length
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('vi-VN')
    },
    formatNgay(ngay) {
      if (!ngay) return 'Chưa trả'
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
  mounted() {
    this.getLichSuMuon()
  },
  watch: {
    perPage() {
      this.currentPage = 1
    }
  }
}
</script>
