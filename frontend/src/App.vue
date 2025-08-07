<script setup>
  import HeaderComponent from './components/HeaderView.vue'
  import FooterComponent from './components/FooterView.vue'
</script>

<template>
  <div class="app-wrapper">
    <HeaderComponent />
    
    <main class="main-content">
      <div class="content-container">
        <router-view />
      </div>
    </main>

    <FooterComponent />
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Crimson Text', serif;
    background: linear-gradient(135deg, #DBD7D2 0%, #9CAF88 50%, #DBD7D2 100%);
    background-attachment: fixed;
    color: #355E3B;
    line-height: 1.6;
  }

  .app-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .app-wrapper::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(156, 175, 136, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(79, 121, 66, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(219, 215, 210, 0.2) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
  }

  .main-content {
    flex: 1;
    padding: 2rem 0;
    position: relative;
  }

  .content-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color: #355E3B;
    margin-bottom: 1rem;
  }

  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.5rem; }

  p {
    font-size: 1.1rem;
    color: #4F7942;
    margin-bottom: 1rem;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #DBD7D2;
  }

  ::-webkit-scrollbar-thumb {
    background: #9CAF88;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #4F7942;
  }

  /* Global Animations */
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

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .fade-in-up {
    animation: fadeInUp 0.6s ease-out;
  }

  .slide-in-left {
    animation: slideInLeft 0.6s ease-out;
  }
</style>
