<style scoped>
  .register-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
    overflow: hidden;
  }

  .register-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(156, 175, 136, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(219, 215, 210, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(79, 121, 66, 0.1) 0%, transparent 50%);
    animation: pulse 4s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }

  .register-wrapper {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 25px;
    padding: 3rem;
    box-shadow: 
      0 25px 50px rgba(53, 94, 59, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.2);
    max-width: 500px;
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

  .register-header {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .register-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #9CAF88, #4F7942);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: white;
    font-size: 2rem;
    box-shadow: 0 10px 25px rgba(156, 175, 136, 0.3);
  }

  .register-title {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: #355E3B;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .register-subtitle {
    color: #4F7942;
    font-size: 1rem;
    opacity: 0.8;
  }

  .form-group {
    margin-bottom: 1.5rem;
    position: relative;
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
    border-color: #9CAF88;
    background: white;
    box-shadow: 0 0 0 3px rgba(156, 175, 136, 0.1);
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
    color: #4F7942;
  }

  .register-btn {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #9CAF88, #4F7942);
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

  .register-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  .register-btn:hover::before {
    left: 100%;
  }

  .register-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(156, 175, 136, 0.3);
  }

  .register-btn:active {
    transform: translateY(0);
  }

  .register-footer {
    text-align: center;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(156, 175, 136, 0.2);
  }

  .login-link {
    color: #4F7942;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
  }

  .login-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #4F7942;
    transition: width 0.3s ease;
  }

  .login-link:hover::after {
    width: 100%;
  }

  .login-link:hover {
    color: #355E3B;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .register-container {
      padding: 1rem;
    }

    .register-wrapper {
      padding: 2rem;
    }

    .register-title {
      font-size: 1.7rem;
    }

    .register-icon {
      width: 70px;
      height: 70px;
      font-size: 1.8rem;
    }
  }
</style>

<template>
  <div class="register-container">
    <div class="register-wrapper">
      <div class="register-header">
        <div class="register-icon">
          <i class="bi bi-person-plus"></i>
        </div>
        <h1 class="register-title">Tạo Tài Khoản Mới</h1>
        <p class="register-subtitle">Tham gia cộng đồng độc giả của chúng tôi</p>
      </div>

      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <div style="position: relative;">
            <input
              type="text"
              class="form-input"
              v-model="sdt"
              placeholder="Số điện thoại"
              required
            />
            <i class="bi bi-telephone input-icon"></i>
          </div>
        </div>

        <div class="form-group">
          <div style="position: relative;">
            <input
              type="password"
              class="form-input"
              v-model="password"
              placeholder="Mật khẩu"
              required
            />
            <i class="bi bi-lock input-icon"></i>
          </div>
        </div>

        <div class="form-group">
          <div style="position: relative;">
            <input
              type="password"
              class="form-input"
              v-model="confirmPassword"
              placeholder="Xác nhận mật khẩu"
              required
            />
            <i class="bi bi-shield-check input-icon"></i>
          </div>
        </div>

        <button type="submit" class="register-btn">
          <i class="bi bi-person-check"></i>
          Tạo Tài Khoản
        </button>
      </form>

      <div class="register-footer">
        <p>
          Bạn đã có tài khoản? 
          <router-link to="/login-docgia" class="login-link">
            Đăng nhập ngay
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        sdt: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      async handleRegister() {
        if (this.password !== this.confirmPassword) {
          alert('Mật khẩu không khớp!');
          return;
        }

        try {
          await axios.post('http://localhost:3000/api/auth/register/docgia', { 
            sdt: this.sdt, 
            password: this.password, 
            confirmPassword: this.confirmPassword });
          alert('Đăng ký thành công');
          this.$router.push('/login-docgia');
        } catch (error) {
          alert(error.response?.data?.message || 'Đăng ký thất bại');
        }
      }
    }
  };
</script>
