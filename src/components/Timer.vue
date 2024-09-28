<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-red-500 text-white relative overflow-hidden">
      <div v-for="n in 20" :key="n" class="heart"></div>
  
      <h1 class="text-5xl font-bold mb-4 text-red-700 z-10">Our Time Together</h1>
      <div class="text-7xl font-extrabold space-y-2">
        <div>{{ days }} <span class="text-2xl z-10">Days</span></div>
        <div>{{ hours }} <span class="text-2xl z-10">Hours</span></div>
        <div>{{ minutes }} <span class="text-2xl z-10">Minutes</span></div>
        <div>{{ seconds }} <span class="text-2xl z-10">Seconds</span></div>
      </div>
      <p class="mt-10 text-2xl italic text-red-700 font-bold z-10">
        "Every second with you feels like a lifetime of love."
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const targetDate = new Date("2022-11-17T15:00:00").getTime();
  
  const days = ref(0);
  const hours = ref(0);
  const minutes = ref(0);
  const seconds = ref(0);
  
  const updateCounter = () => {
    const now = new Date().getTime();
    const distance = now - targetDate;
  
    days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
  };
  
  onMounted(() => {
    updateCounter();
    setInterval(updateCounter, 1000); // Update every second
  });
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
  
  h1, p {
    font-family: 'Great Vibes', cursive;
  }
  
  /* Heart falling animation */
  .heart {
    position: absolute;
    top: -10%;
    background-color: red;
    width: 20px;
    height: 20px;
    border-radius: 50% 50% 0 0;
    transform: rotate(-45deg);
    animation: fall 10s linear infinite, sway 3s ease-in-out infinite;
    opacity: 0.8;
    z-index: 1; 
  }
  
  .heart::before,
  .heart::after {
    content: '';
    position: absolute;
    background-color: red;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  
  .heart::before {
    top: -10px;
    left: 0;
  }
  
  .heart::after {
    left: 10px;
    top: 0;
  }
  
  @keyframes fall {
    0% {
      top: -10%;
      left: calc(100% * var(--left) - 10px);
      transform: rotate(-45deg);
    }
    100% {
      top: 110%;
      left: calc(100% * var(--left) - 10px);
      transform: rotate(45deg);
    }
  }
  
  @keyframes sway {
    0%, 100% {
      transform: translateX(0) rotate(-45deg);
    }
    50% {
      transform: translateX(20px) rotate(-45deg);
    }
  }
  
  .heart:nth-child(1) { --left: 0.1; animation-duration: 12s; }
  .heart:nth-child(2) { --left: 0.2; animation-duration: 8s; }
  .heart:nth-child(3) { --left: 0.3; animation-duration: 10s; }
  .heart:nth-child(4) { --left: 0.4; animation-duration: 12s; }
  .heart:nth-child(5) { --left: 0.5; animation-duration: 9s; }
  .heart:nth-child(6) { --left: 0.6; animation-duration: 11s; }
  .heart:nth-child(7) { --left: 0.7; animation-duration: 7s; }
  .heart:nth-child(8) { --left: 0.8; animation-duration: 10s; }
  .heart:nth-child(9) { --left: 0.9; animation-duration: 9s; }
  .heart:nth-child(10) { --left: 1.0; animation-duration: 11s; }
  </style>
  