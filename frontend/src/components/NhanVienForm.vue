<style scoped>
  form {
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    background: rgba(219, 215, 210, 0.9);
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(53, 94, 59, 0.1);
    border: 1px solid #9CAF88;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
    color: #355E3B;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #9CAF88;
    border-radius: 5px;
    font-size: 14px;
  }

  input:focus {
    border-color: #4F7942;
    outline: none;
    box-shadow: 0 0 5px rgba(79, 121, 66, 0.5);
  }

  .radio-group {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
  }

  .radio-group label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    cursor: pointer;
    padding: 8px 12px;
    border: 1px solid #9CAF88;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    color: #355E3B;
  }

  .radio-group input {
    width: auto;
    margin: 0;
    accent-color: #4F7942;
  }

  .radio-group label:hover {
    background-color: rgba(156, 175, 136, 0.1);
    border-color: #4F7942;
  }

  .radio-group input:checked + label {
    background-color: #4F7942;
    color: white;
    border-color: #355E3B;
  }

  .button-group {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    margin-top: 10px;
  }

  .btn {
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s;
    width: 120px;
    text-align: center;
  }

  .btn-success {
    background-color: #28a745;
    border: none;
    color: white;
  }

  .btn-success:hover {
    background-color: #218838;
  }

  .btn-secondary {
    background-color: #9CAF88;
    border: none;
    color: white;
  }

  .btn-secondary:hover {
    background-color: #7a9b6b;
  }
</style>

<template>
  <form @submit.prevent="SubmitForm">
    <div class="form-group">
      <label for="HOTENNV">Họ tên nhân viên:</label>
      <input
        type="text"
        class="form-control"
        v-model="nhanvienLocal.HOTENNV"
        placeholder="Nhập họ tên nhân viên"
        required
      />
    </div>
    <div class="form-group">
      <label for="SODIENTHOAI">Số điện thoại:</label>
      <input
        type="text"
        class="form-control"
        v-model="nhanvienLocal.SODIENTHOAI"
        placeholder="Nhập số điện thoại"
        required
      />
    </div>
    <div class="form-group">
      <label for="PASSWORD">Mật khẩu:</label>
      <input
        type="password"
        class="form-control"
        v-model="nhanvienLocal.PASSWORD"
        placeholder="Nhập mật khẩu"
        required
      />
    </div>
    <div class="radio-group">
      <label>
        <input
          type="radio"
          value="QuanLyThuVien"
          v-model="nhanvienLocal.CHUCVU"
        />
        Quản lý
      </label>
      <label>
        <input
          type="radio"
          value="NhanVienThuVien"
          v-model="nhanvienLocal.CHUCVU"
        />
        Nhân viên
      </label>
    </div>
    <div class="button-group">
      <button type="button" class="btn btn-success" @click="SubmitForm">
        Lưu
      </button>
      <button
        type="button"
        class="btn btn-secondary ml-2"
        @click="$emit('cancel')"
      >
        Hủy
      </button>
    </div>
  </form>
</template>

<script>
  export default {
    props: {
      nhanvien: {
        type: Object,
        default: () => ({
          HOTENNV: '',
          SODIENTHOAI: '',
          PASSWORD: '',
          CHUCVU: ''
        })
      }
    },
    data() {
      return {
        nhanvienLocal: { ...this.nhanvien },
        hasChanged: false
      }
    },
    watch: {
      nhanvienLocal: {
        handler() {
          this.hasChanged = true
        },
        deep: true
      }
    },
    methods: {
      SubmitForm() {
        if (!this.hasChanged) return
        if (!this.nhanvienLocal.HOTENNV.trim()) {
          alert('Họ tên nhân viên không được để trống!')
          return
        }
        if (!this.nhanvienLocal.SODIENTHOAI.trim()) {
          alert('Số điện thoại không được để trống!')
          return
        }
        if (!this.nhanvienLocal.PASSWORD.trim()) {
          alert('Mật khẩu không được để trống!')
          return
        }
        if (!this.nhanvienLocal.CHUCVU.trim()) {
          alert('Chức vụ không được để trống!')
          return
        }
        this.$emit('submit', this.nhanvienLocal)
        this.hasChanged = false
      }
    }
  }
</script>
