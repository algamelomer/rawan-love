<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import First_met from './components/First_met.vue'
import Memory_Lane from './components/Memory_Lane.vue'
import Timer from './components/Timer.vue'
import Heart from './components/Heart.vue'
import Celebrating from './components/Celebrating.vue'

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
</template>

<style scoped></style>
