<style scoped>
.footer-wrapper {
  background: linear-gradient(
    135deg,
    rgba(53, 94, 59, 0.95),
    rgba(79, 121, 66, 0.95)
  );
  backdrop-filter: blur(20px);
  color: white;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
}

.footer-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #dbd7d2, #9caf88, #dbd7d2);
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem 1rem;
  position: relative;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-family: "Playfair Display", serif;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #dbd7d2;
  position: relative;
}

.footer-section h3::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #dbd7d2, #9caf88);
}

.brand-section {
  padding-right: 2rem;
}

.brand-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(219, 215, 210, 0.9);
  margin-bottom: 2rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(5px);
}

.contact-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #dbd7d2, #9caf88);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #355e3b;
  font-size: 1.1rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: rgba(219, 215, 210, 0.8);
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
}

.footer-link:hover {
  color: #dbd7d2;
  transform: translateX(5px);
}

.footer-link i {
  font-size: 0.9rem;
  width: 16px;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(219, 215, 210, 0.8);
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.social-link:hover {
  background: rgba(219, 215, 210, 0.2);
  color: #dbd7d2;
  transform: translateY(-3px);
  border-color: rgba(219, 215, 210, 0.3);
}

.footer-bottom {
  border-top: 1px solid rgba(219, 215, 210, 0.2);
  padding-top: 2rem;
  text-align: center;
}

.copyright {
  font-size: 0.95rem;
  color: rgba(219, 215, 210, 0.7);
  margin: 0;
}

/* Modal Styles */
.modal-overlay {
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
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background: white;
  border-radius: 15px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(53, 94, 59, 0.3);
  animation: slideUp 0.3s ease;
}

.modal-header {
  padding: 2rem 2rem 1rem;
  border-bottom: 2px solid #9caf88;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  color: #355e3b;
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #4f7942;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(79, 121, 66, 0.1);
  transform: rotate(90deg);
}

.modal-body {
  padding: 2rem;
  color: #355e3b;
  line-height: 1.8;
}

.modal-body p {
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.modal-body i {
  color: #4f7942;
  margin-top: 0.25rem;
  font-size: 1.1rem;
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
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .brand-section {
    grid-column: 1 / -1;
    padding-right: 0;
    margin-bottom: 1rem;
  }
}

@media (max-width: 768px) {
  .footer-content {
    padding: 2rem 1rem 1rem;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-info {
    flex-direction: column;
  }

  .social-links {
    justify-content: center;
  }
}
</style>

<template>
  <footer class="footer-wrapper">
    <div class="footer-content">
      <div class="footer-grid">
        <!-- Brand Section -->
        <div class="footer-section brand-section">
          <h3>Thư Viện Cổ Điển</h3>
          <p class="brand-description">
            Hệ thống quản lý mượn sách hiện đại với giao diện cổ điển, mang đến
            trải nghiệm đọc sách tuyệt vời cho mọi độc giả. Khám phá kho tàng
            tri thức bất tận cùng chúng tôi.
          </p>

          <div class="social-links">
            <a
              href="https://www.facebook.com/thanh.nguyen.865424?locale=vi_VN"
              target="_blank"
              class="social-link"
            >
              <i class="bi bi-facebook"></i>
            </a>
            <a
              href="https://github.com/thanhb2207562"
              target="_blank"
              class="social-link"
            >
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="footer-section">
          <h3>Liên Hệ</h3>
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">
                <i class="bi bi-geo-alt"></i>
              </div>
              <div>
                <strong>Địa chỉ</strong><br />
                Đại học Cần Thơ
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <i class="bi bi-telephone"></i>
              </div>
              <div>
                <strong>Hotline</strong><br />
                0945 928 907
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <i class="bi bi-envelope"></i>
              </div>
              <div>
                <strong>Email</strong><br />
                thanhb2207562@student.ctu.edu.vn
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h3>Liên Kết</h3>
          <ul class="footer-links">
            <li>
              <router-link to="/gioi-thieu" class="footer-link">
                <i class="bi bi-info-circle"></i>
                Giới thiệu
              </router-link>
            </li>
            <li>
              <a
                href="#"
                class="footer-link"
                @click.prevent="showDieuKhoan = true"
              >
                <i class="bi bi-file-text"></i>
                Điều khoản mượn sách
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link"
                @click.prevent="showHuongDan = true"
              >
                <i class="bi bi-question-circle"></i>
                Hướng dẫn sử dụng
              </a>
            </li>
            <li>
              <router-link to="/lien-he" class="footer-link">
                <i class="bi bi-telephone"></i>
                Liên hệ
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer-section">
          <h3>Dịch Vụ</h3>
          <ul class="footer-links">
            <li>
              <a href="#" class="footer-link">
                <i class="bi bi-book"></i>
                Mượn sách trực tuyến
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                <i class="bi bi-search"></i>
                Tìm kiếm sách
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                <i class="bi bi-clock-history"></i>
                Theo dõi lịch sử
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                <i class="bi bi-headset"></i>
                Hỗ trợ 24/7
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          © 2025 Thư Viện Cổ Điển. Tất cả quyền được bảo lưu.
        </p>
      </div>
    </div>

    <!-- Modal Điều khoản -->
    <div
      v-if="showDieuKhoan"
      class="modal-overlay"
      @click="showDieuKhoan = false"
    >
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">Điều khoản mượn sách</h3>
          <button class="modal-close" @click="showDieuKhoan = false">
            <i class="bi bi-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <p>
            <i class="bi bi-check-circle"></i>
            <span>Độc giả cần có tài khoản hợp lệ để mượn sách.</span>
          </p>
          <p>
            <i class="bi bi-clock"></i>
            <span>Thời gian mượn sách tối đa là 20 ngày.</span>
          </p>
          <p>
            <i class="bi bi-exclamation-triangle"></i>
            <span>Quá hạn sẽ bị phạt theo quy định của thư viện.</span>
          </p>
          <p>
            <i class="bi bi-shield-exclamation"></i>
            <span>Nếu mất hoặc làm hỏng sách, độc giả phải bồi thường.</span>
          </p>
          <p>
            <i class="bi bi-book"></i>
            <span>Giữ gìn sách sạch sẽ, không viết, vẽ lên sách.</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Modal Hướng dẫn -->
    <div
      v-if="showHuongDan"
      class="modal-overlay"
      @click="showHuongDan = false"
    >
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">Hướng dẫn sử dụng</h3>
          <button class="modal-close" @click="showHuongDan = false">
            <i class="bi bi-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <p>
            <i class="bi bi-1-circle"></i>
            <span
              ><strong>Đăng nhập/Đăng ký:</strong> Sử dụng số điện thoại để đăng
              nhập hoặc đăng ký tài khoản.</span
            >
          </p>
          <p>
            <i class="bi bi-2-circle"></i>
            <span
              ><strong>Tìm kiếm sách:</strong> Vào trang chủ để xem danh mục
              sách hoặc tìm sách với thanh tìm kiếm.</span
            >
          </p>
          <p>
            <i class="bi bi-3-circle"></i>
            <span
              ><strong>Đăng ký mượn:</strong> Chọn sách, thêm vào danh sách
              mượn, sau đó xác nhận.</span
            >
          </p>
          <p>
            <i class="bi bi-4-circle"></i>
            <span
              ><strong>Kiểm tra lịch sử:</strong> Xem trạng thái mượn sách trong
              mục "Lịch sử mượn".</span
            >
          </p>
          <p>
            <i class="bi bi-5-circle"></i>
            <span
              ><strong>Trả sách:</strong> Mang sách đến thư viện hoặc sử dụng
              dịch vụ giao nhận để gửi lại.</span
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      showDieuKhoan: false,
      showHuongDan: false,
    };
  },
};
</script>
