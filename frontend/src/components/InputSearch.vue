<style scoped>
  .search-container {
    max-width: 500px;
    margin: 0 auto;
    position: relative;
  }

  .search-wrapper {
    position: relative;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 30px;
    padding: 0.5rem;
    box-shadow: 0 8px 25px rgba(53, 94, 59, 0.15);
    border: 2px solid rgba(79, 121, 66, 0.2);
    transition: all 0.3s ease;
  }

  .search-wrapper:focus-within {
    border-color: #4F7942;
    box-shadow: 0 12px 35px rgba(53, 94, 59, 0.25);
    transform: translateY(-2px);
  }

  .search-input {
    width: 100%;
    border: none;
    outline: none;
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
    background: transparent;
    color: #355E3B;
    font-family: 'Crimson Text', serif;
  }

  .search-input::placeholder {
    color: rgba(79, 121, 66, 0.6);
    font-style: italic;
  }

  .search-btn {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(135deg, #4F7942, #355E3B);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 4px 15px rgba(53, 94, 59, 0.3);
  }

  .search-btn:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 20px rgba(53, 94, 59, 0.4);
  }

  .search-btn:active {
    transform: translateY(-50%) scale(0.95);
  }

  /* Search suggestions (if needed in future) */
  .search-suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(53, 94, 59, 0.15);
    margin-top: 0.5rem;
    z-index: 100;
    max-height: 300px;
    overflow-y: auto;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .search-container {
      max-width: 100%;
      padding: 0 1rem;
    }

    .search-input {
      padding: 0.875rem 1.25rem;
      font-size: 1rem;
    }

    .search-btn {
      width: 45px;
      height: 45px;
      font-size: 1.1rem;
    }
  }
</style>

<template>
  <div class="search-container">
    <div class="search-wrapper">
      <input 
        type="text" 
        class="search-input" 
        placeholder="Tìm kiếm sách theo tên, tác giả, nhà xuất bản..." 
        :value="modelValue"
        @input="updateModelValue" 
        @keyup.enter="submit" 
      />
      <button class="search-btn" @click="submit" type="button">
        <i class="bi bi-search"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    modelValue: { type: String, default: "" },
  });
  
  const emit = defineEmits(["update:modelValue", "submit"]);

  const updateModelValue = (e) => {
    emit("update:modelValue", e.target.value);
  };

  const submit = () => {
    emit("submit");
  };
</script>
