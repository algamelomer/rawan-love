<template>
    <div class=" flex px-9 py-5 justify-between">
        <p class=" font-love font-semibold text-xl text-red-700 tracking-wider">
            To My Lovely Girl Rawan
        </p>
        <nav class="flex justify-around gap-6 font-love font-semibold text-xl text-red-700 tracking-wider">
            <button @click="scrollToSection('hero')">Hero</button>
            <button @click="scrollToSection('firstMet')">falling in love</button>
            <button @click="scrollToSection('memoryLane')">Memories</button>
            <button @click="scrollToSection('timer')">how much i've been loving you</button>
            <button @click="scrollToSection('celebrating')">Celebrating and Feelings</button>
            <button @click="scrollToSection('heart')">whats inside my heart?</button>
        </nav>
    </div>
    <hr class="border-t-2 border-gray-500">
</template>


<script setup>
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
/* nav {
  position: sticky;
  top: 0;
  z-index: 10;
}
button {
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: red; /* Change color as needed */

</style>