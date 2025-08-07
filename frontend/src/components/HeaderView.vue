<style scoped>
  .header-wrapper {
    background: linear-gradient(135deg, rgba(219, 215, 210, 0.95), rgba(156, 175, 136, 0.95));
    backdrop-filter: blur(20px);
    border-bottom: 3px solid rgba(53, 94, 59, 0.2);
    box-shadow: 0 8px 32px rgba(53, 94, 59, 0.15);
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .header-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .top-bar {
    padding: 1rem 0;
    text-align: center;
    border-bottom: 1px solid rgba(53, 94, 59, 0.1);
  }

  .brand-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    font-weight: 700;
    color: #355E3B;
    text-shadow: 2px 2px 4px rgba(53, 94, 59, 0.1);
    margin: 0;
    letter-spacing: 1px;
  }

  .brand-subtitle {
    font-size: 0.9rem;
    color: #4F7942;
    font-style: italic;
    margin-top: 0.25rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .navigation-bar {
    padding: 1.5rem 0;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
  }

  .nav-item {
    position: relative;
  }

  .nav-link {
    display: block;
    padding: 0.75rem 1.5rem;
    color: #355E3B;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 25px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid transparent;
  }

  .nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s ease;
  }

  .nav-link:hover::before {
    left: 100%;
  }

  .nav-link:hover {
    background: rgba(79, 121, 66, 0.9);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(53, 94, 59, 0.3);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .nav-link.logout-btn {
    background: linear-gradient(135deg, #355E3B, #4F7942);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  .nav-link.logout-btn:hover {
    background: linear-gradient(135deg, #2d4a30, #355E3B);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(53, 94, 59, 0.4);
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    border: 1px solid rgba(53, 94, 59, 0.2);
  }

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #355E3B, #4F7942);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    box-shadow: 0 4px 12px rgba(53, 94, 59, 0.3);
  }

  .user-role {
    font-size: 0.9rem;
    color: #4F7942;
    font-weight: 600;
    text-transform: capitalize;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .header-content {
      padding: 0 1rem;
    }

    .brand-title {
      font-size: 1.8rem;
    }

    .nav-container {
      flex-direction: column;
      gap: 1.5rem;
    }

    .nav-menu {
      justify-content: center;
      gap: 0.25rem;
    }

    .nav-link {
      padding: 0.6rem 1rem;
      font-size: 0.9rem;
    }

    .user-info {
      order: -1;
    }
  }

  @media (max-width: 480px) {
    .nav-menu {
      flex-direction: column;
      width: 100%;
      align-items: center;
    }

    .nav-link {
      width: 200px;
      text-align: center;
    }
  }
</style>

<template>
  <header class="header-wrapper">
    <div class="header-content">
      <!-- Top Brand Section -->
      <div class="top-bar">
        <h1 class="brand-title">Thư Viện Cổ Điển</h1>
        <p class="brand-subtitle">Hệ Thống Quản Lý Mượn Sách</p>
      </div>

      <!-- Navigation Section -->
      <nav class="navigation-bar">
        <div class="nav-container">
          <!-- User Info -->
          <div class="user-info" v-if="userRole">
            <div class="user-avatar">
              {{ userRole === 'docgia' ? 'ĐG' : userRole === 'quanly' ? 'QL' : 'NV' }}
            </div>
            <div class="user-role">
              {{ userRole === 'docgia' ? 'Độc Giả' : userRole === 'quanly' ? 'Quản Lý' : 'Nhân Viên' }}
            </div>
          </div>

          <!-- Navigation Menu -->
          <ul class="nav-menu">
            <li class="nav-item">
              <router-link class="nav-link" to="/">
                <i class="bi bi-house-door"></i> Trang Chủ
              </router-link>
            </li>

            <!-- Độc giả menu -->
            <template v-if="userRole === 'docgia'">
              <li class="nav-item">
                <router-link class="nav-link" to="/muon-sach">
                  <i class="bi bi-book"></i> Mượn Sách
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/lich-su-muon">
                  <i class="bi bi-clock-history"></i> Lịch Sử
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/tai-khoan">
                  <i class="bi bi-person"></i> Tài Khoản
                </router-link>
              </li>
            </template>

            <!-- Quản lý menu -->
            <template v-else-if="userRole === 'quanly'">
              <li class="nav-item">
                <router-link class="nav-link" to="/quan-ly-sach">
                  <i class="bi bi-journal-bookmark"></i> Quản Lý Sách
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/quan-ly-tai-khoan">
                  <i class="bi bi-people"></i> Quản Lý TK
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/theo-doi-muon">
                  <i class="bi bi-clipboard-check"></i> Theo Dõi Mượn
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/tai-khoan">
                  <i class="bi bi-person"></i> Tài Khoản
                </router-link>
              </li>
            </template>

            <!-- Nhân viên menu -->
            <template v-else-if="userRole === 'nhanvien'">
              <li class="nav-item">
                <router-link class="nav-link" to="/theo-doi-muon">
                  <i class="bi bi-clipboard-check"></i> Quản Lý Mượn
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/tai-khoan">
                  <i class="bi bi-person"></i> Tài Khoản
                </router-link>
              </li>
            </template>

            <!-- Guest menu -->
            <template v-else>
              <li class="nav-item">
                <router-link class="nav-link" to="/login-docgia">
                  <i class="bi bi-box-arrow-in-right"></i> Đăng Nhập
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/register">
                  <i class="bi bi-person-plus"></i> Đăng Ký
                </router-link>
              </li>
            </template>

            <!-- Logout -->
            <li class="nav-item" v-if="userRole">
              <a class="nav-link logout-btn" href="#" @click.prevent="handleLogout">
                <i class="bi bi-box-arrow-right"></i> Đăng Xuất
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    computed: {
      userRole() {
        return this.$store.state.user.role
      }
    },
    methods: {
      handleLogout() {
        this.$store.dispatch('logout')
        this.$router.push('/login-docgia')
      }
    }
  }
</script>
