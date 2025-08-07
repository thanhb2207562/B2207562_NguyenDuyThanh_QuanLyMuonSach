<style scoped>
.contact-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;
  background: linear-gradient(135deg, #DBD7D2, #9CAF88);
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(53, 94, 59, 0.15);
  text-align: center;
}

.contact-title {
  font-size: 2rem;
  font-weight: bold;
  color: #355E3B;
  margin-bottom: 20px;
}

.contact-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.contact-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(53, 94, 59, 0.1);
  transition: transform 0.2s ease-in-out;
  border: 1px solid #9CAF88;
}

.contact-info:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 12px rgba(53, 94, 59, 0.15);
}

.contact-item {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  transition: background 0.3s;
}

.contact-item:hover {
  background: rgba(156, 175, 136, 0.05);
}

.icon {
  font-size: 22px;
  margin-right: 12px;
}

.phone {
  color: #4F7942;
}

.email {
  color: #355E3B;
}

.address {
  color: #4F7942;
}

.label {
  font-weight: bold;
  color: #355E3B;
  margin-right: 10px;
}

.value {
  color: #4F7942;
}

.map-container {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(53, 94, 59, 0.12);
  border: 2px solid #9CAF88;
}

.map-frame {
  width: 100%;
  height: 300px;
  border: none;
}
</style>

<template>
  <div class="contact-container">
    <h1 class="contact-title">Liên Hệ</h1>

    <div class="contact-content">

      <div class="contact-info">
        <div class="contact-item">
          <i class="bi bi-telephone-fill icon phone"></i>
          <span class="label">Số điện thoại:</span>
          <span class="value">(+84) 862 974 822</span>
        </div>

        <div class="contact-item">
          <i class="bi bi-envelope-fill icon email"></i>
          <span class="label">Email:</span>
          <span class="value">phatb2207554@student.ctu.edu.vn</span>
        </div>

        <div class="contact-item">
          <i class="bi bi-geo-alt-fill icon address"></i>
          <span class="label">Địa chỉ:</span>
          <span class="value">Đại học Cần Thơ, Khu II, 3/2, Ninh Kiều, Cần Thơ</span>
        </div>
      </div>

      <div class="map-container">
        <iframe
          class="map-frame"
          frameborder="0"
          style="border:0"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.612316274087!2d105.7680404!3d10.0299337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2zxJDhuqFpIGjhu41jIEPhuqduIFRoxqE!5e0!3m2!1svi!2s!4v1711200000000"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    googleMapUrl() {
      const address = encodeURIComponent("Đại học Cần Thơ, Khu II, 3/2, Ninh Kiều, Cần Thơ");
      return `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${address}`;
    }
  }
};
</script>
