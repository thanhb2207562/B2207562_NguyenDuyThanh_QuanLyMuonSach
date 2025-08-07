<style scoped>
  .login-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
    overflow: hidden;
  }

  .login-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 70% 30%, rgba(53, 94, 59, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 30% 70%, rgba(79, 121, 66, 0.2) 0%, transparent 50%);
    animation: float 8s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(1deg); }
  }

  .login-wrapper {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 25px;
    padding: 3rem;
    box-shadow: 
      0 25px 50px rgba(53, 94, 59, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.2);
    max-width: 450px;
    width: 100%;
    position: relative;
    animation: slideUp 0.8s ease-out;
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

  .login-header {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .login-icon {
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

  .login-icon::after {
    content: '';
    position: absolute;
    top: -3px;
    right: -3px;
    width: 25px;
    height: 25px;
    background: linear-gradient(135deg, #9CAF88, #DBD7D2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: #355E3B;
  }

  .login-title {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: #355E3B;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .login-subtitle {
    color: #4F7942;
    font-size: 1rem;
    opacity: 0.8;
  }

  .form-group {
    margin-bottom: 1.5rem;
    position: relative;
  }

  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    color: #355E3B;
    font-weight: 600;
    font-size: 0.95rem;
  }

  .form-input {
    width: 100%;
    padding: 1rem 1rem 1rem 3rem;
    border: 2px solid rgba(156, 175, 136, 0.3);
    border-radius: 15px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.8);
    color: #355E3B;
    transition: all 0.3s ease;
    font-family: 'Crimson Text', serif;
  }

  .form-input:focus {
    outline: none;
    border-color: #355E3B;
    background: white;
    box-shadow: 0 0 0 3px rgba(53, 94, 59, 0.1);
    transform: translateY(-2px);
  }

  .form-input::placeholder {
    color: rgba(79, 121, 66, 0.5);
  }

  .input-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #9CAF88;
    font-size: 1.1rem;
    transition: color 0.3s ease;
  }

  .form-input:focus + .input-icon {
    color: #355E3B;
  }

  .login-btn {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #355E3B, #4F7942);
    color: white;
    border: none;
    border-radius: 15px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 1.5rem;
    position: relative;
    overflow: hidden;
  }

  .login-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  .login-btn:hover::before {
    left: 100%;
  }

  .login-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(53, 94, 59, 0.3);
  }

  .login-btn:active {
    transform: translateY(0);
  }

  .login-footer {
    text-align: center;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(156, 175, 136, 0.2);
  }

  .switch-link {
    color: #355E3B;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
  }

  .switch-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #355E3B;
    transition: width 0.3s ease;
  }

  .switch-link:hover::after {
    width: 100%;
  }

  .switch-link:hover {
    color: #4F7942;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .login-container {
      padding: 1rem;
    }

    .login-wrapper {
      padding: 2rem;
    }

    .login-title {
      font-size: 1.7rem;
    }

    .login-icon {
      width: 70px;
      height: 70px;
      font-size: 1.8rem;
    }
  }
</style>

<template>
  <div class="login-container">
    <div class="login-wrapper">
      <div class="login-header">
        <div class="login-icon">
          <i class="bi bi-person-badge"></i>
        </div>
        <h1 class="login-title">Khu Vực Nhân Viên</h1>
        <p class="login-subtitle">Đăng nhập vào hệ thống quản lý</p>
      </div>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="sdt" class="form-label">Số điện thoại</label>
          <div style="position: relative;">
            <input
              type="text"
              id="sdt"
              v-model="sdt"
              class="form-input"
              placeholder="Nhập số điện thoại nhân viên"
              required
            />
            <i class="bi bi-telephone input-icon"></i>
          </div>
        </div>

        <div class="form-group">
          <label for="password" class="form-label">Mật khẩu</label>
          <div style="position: relative;">
            <input
              type="password"
              id="password"
              v-model="password"
              class="form-input"
              placeholder="Nhập mật khẩu nhân viên"
              required
            />
            <i class="bi bi-shield-lock input-icon"></i>
          </div>
        </div>

        <button type="submit" class="login-btn">
          <i class="bi bi-shield-check"></i>
          Đăng Nhập Hệ Thống
        </button>
      </form>

      <div class="login-footer">
        <p>
          Bạn là độc giả? 
          <router-link to="/login-docgia" class="switch-link">
            Đăng nhập tại đây
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        sdt: '',
        password: ''
      }
    },
    methods: {
      async handleLogin() {
        try {
          const response = await axios.post(
            'http://localhost:3000/api/auth/login/nhanvien',
            {
              sdt: this.sdt,
              password: this.password
            }
          )

          const token = response.data?.token || response.data?.user?.token
          const chucVu = response.data?.CHUCVU || response.data?.user?.CHUCVU
          const id = response.data?._id || response.data?.user?._id

          let role = 'docgia'
          if (chucVu === 'QuanLyThuVien') {
            role = 'quanly'
          } else if (chucVu) {
            role = 'nhanvien'
          }

          this.$store.dispatch('login', { _id: id, role: role, token: token })

          alert('Đăng nhập nhân viên thành công')
          this.$router.push('/')
        } catch (error) {
          if (error.response) {
            if (
              error.response.status === 404 ||
              error.response.status === 500
            ) {
              alert('Số điện thoại chưa được đăng ký!')
            } else if (error.response.status === 401) {
              alert('Mật khẩu không đúng!')
            } else {
              alert('Lỗi hệ thống, vui lòng thử lại!')
            }
          } else {
            alert('Không thể kết nối đến máy chủ!')
          }
        }
      }
    }
  }
</script>
