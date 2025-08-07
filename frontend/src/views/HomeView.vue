<style scoped>
  .home-container {
    animation: fadeInUp 0.8s ease-out;
  }

  .hero-section {
    background: linear-gradient(135deg, rgba(219, 215, 210, 0.9), rgba(156, 175, 136, 0.9));
    border-radius: 20px;
    padding: 4rem 2rem;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(53, 94, 59, 0.15);
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .hero-content {
    position: relative;
    z-index: 2;
  }

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    font-weight: 700;
    color: #355E3B;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(53, 94, 59, 0.1);
  }

  .hero-subtitle {
    font-size: 1.3rem;
    color: #4F7942;
    margin-bottom: 2rem;
    font-style: italic;
  }

  .role-message {
    background: rgba(255, 255, 255, 0.6);
    padding: 1.5rem 2rem;
    border-radius: 15px;
    border-left: 5px solid #4F7942;
    margin-bottom: 2rem;
    font-size: 1.1rem;
    color: #355E3B;
    font-weight: 600;
  }

  .search-section {
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
  }

  .books-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    color: #355E3B;
    margin: 0;
    position: relative;
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #4F7942, #9CAF88);
  }

  .books-stats {
    background: rgba(255, 255, 255, 0.6);
    padding: 1rem 1.5rem;
    border-radius: 15px;
    color: #4F7942;
    font-weight: 600;
    border: 2px solid rgba(79, 121, 66, 0.2);
  }

  .books-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .pagination-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
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
    color: #4F7942;
  }

  .empty-state i {
    font-size: 4rem;
    color: #9CAF88;
    margin-bottom: 1rem;
  }

  .empty-state h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .hero-section {
      padding: 2rem 1rem;
      margin-bottom: 2rem;
    }

    .hero-title {
      font-size: 2.2rem;
    }

    .hero-subtitle {
      font-size: 1.1rem;
    }

    .books-header {
      flex-direction: column;
      text-align: center;
    }

    .section-title {
      font-size: 1.8rem;
    }

    .books-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .pagination-wrapper {
      flex-direction: column;
      gap: 1rem;
    }
  }

  @media (max-width: 480px) {
    .hero-title {
      font-size: 1.8rem;
    }

    .books-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Chào Mừng Đến Thư Viện Cổ Điển</h1>
        <p class="hero-subtitle">Khám phá kho tàng tri thức bất tận</p>
        
        <div class="role-message" v-if="userRole">
          <div v-if="userRole === 'quanly'">
            <i class="bi bi-shield-check"></i>
            Xin chào Quản lý! Hãy đảm bảo mọi quyển sách luôn sẵn sàng cho độc giả nhé!
          </div>
          <div v-else-if="userRole === 'nhanvien'">
            <i class="bi bi-person-badge"></i>
            Xin chào Nhân viên! Hãy hỗ trợ độc giả và đừng quên kiểm tra, duyệt yêu cầu mượn sách nhé!
          </div>
          <div v-else>
            <i class="bi bi-book-heart"></i>
            Mượn sách dễ dàng - Trả sách đúng hạn - Kiến thức không giới hạn!
          </div>
        </div>
        <div v-else class="role-message">
          <i class="bi bi-book-heart"></i>
          Mượn sách dễ dàng - Trả sách đúng hạn - Kiến thức không giới hạn!
        </div>
      </div>
    </section>

    <!-- Search Section -->
    <section class="search-section">
      <InputSearch v-model="search" />
    </section>

    <!-- Books Section -->
    <section class="books-section">
      <div class="books-header">
        <h2 class="section-title">Bộ Sưu Tập Sách</h2>
        <div class="books-stats">
          <i class="bi bi-collection"></i>
          {{ filteredBooks.length }} cuốn sách
        </div>
      </div>

      <!-- Books Grid -->
      <div v-if="paginatedBooks.length > 0" class="books-grid">
        <SachCard
          v-for="sach in paginatedBooks"
          :key="sach.MASACH"
          :sach="sach"
          :nxbs="nxbs"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="empty-state">
        <i class="bi bi-search"></i>
        <h3>Không tìm thấy sách</h3>
        <p>Thử tìm kiếm với từ khóa khác hoặc xem lại bộ lọc của bạn.</p>
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
    </section>
  </div>
</template>

<script>
  import SachCard from '@/components/SachCard.vue'
  import InputSearch from '@/components/InputSearch.vue'
  import { fetchBooks } from '@/services/sachService'
  import { fetchNXB } from '@/services/nxbService'

  export default {
    components: {
      SachCard,
      InputSearch
    },
    data() {
      return {
        sachList: [],
        search: '',
        nxbs: [],
        currentPage: 1,
        pageSize: 12
      }
    },
    mounted() {
      this.loadBooks()
      this.loadNXBs()
    },
    computed: {
      userRole() {
        return this.$store.state.user.role
      },
      filteredBooks() {
        return this.sachList.filter(book => {
          const keyword = this.search.toLowerCase().trim()
          const manxbValue = book.MANXB?._id || book.MANXB?.MANXB || ''

          const nxb = this.nxbs.find(n => String(n._id) === String(manxbValue))
          const tenNXB = nxb ? nxb.TENNXB.toLowerCase() : ''
          return (
            book.TENSACH?.toLowerCase().includes(keyword) ||
            book.MASACH?.toLowerCase().includes(keyword) ||
            book.NGUONGOC_TACGIA?.toLowerCase().includes(keyword) ||
            (String(book.NAMXUATBAN) || '').toLowerCase().includes(keyword) ||
            tenNXB.includes(keyword)
          )
        })
      },

      totalPages() {
        return Math.ceil(this.filteredBooks.length / this.pageSize)
      },

      paginatedBooks() {
        const start = (this.currentPage - 1) * this.pageSize
        const end = start + this.pageSize
        return this.filteredBooks.slice(start, end)
      }
    },
    methods: {
      async loadBooks() {
        try {
          this.sachList = await fetchBooks()
          this.sachList = this.shuffleArray(this.sachList)
        } catch (error) {
          console.error('Lỗi khi tải sách:', error)
        }
      },
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array
      },
      async loadNXBs() {
        try {
          this.nxbs = await fetchNXB()
        } catch (error) {
          console.error('Lỗi khi tải nhà xuất bản:', error)
        }
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
      search() {
        this.currentPage = 1
      }
    }
  }
</script>
