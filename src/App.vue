<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import First_met from './components/First_met.vue'
import Memory_Lane from './components/Memory_Lane.vue'
import Timer from './components/Timer.vue'
import Heart from './components/Heart.vue'
import Celebrating from './components/Celebrating.vue'
import keep_on_loving_you from './components/keep_on_loving_you.vue'
import Swal from 'sweetalert2'
import { onMounted } from 'vue'

onMounted(() => {
  Swal.fire({
    title: 'working on it my love',
    text: 'This website is still under construction, so you may encounter errors, incomplete work, or response issues.',
    icon: 'warning',
    confirmButtonText: 'I Understand',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://i.gifer.com/ZZ5H.gif")
      left top
      no-repeat
    `,
    allowOutsideClick: false,
    allowEscapeKey: false
  })
})

</script>

<template>
  <Navbar />
  <div id="hero">
    <Hero />
  </div>
  <div id="firstMet">
    <First_met />
  </div>
  <div id="memoryLane">
    <Memory_Lane src="https://algamelomer.github.io/swiper/" />
  </div>
  <div id="timer">
    <Timer />
  </div>
  <div id="celebrating">
    <Celebrating />
  </div>
  <div id="heart">
    <Heart />
  </div>
  <div>
    <keep_on_loving_you />
  </div>
</template>

<style scoped></style>
