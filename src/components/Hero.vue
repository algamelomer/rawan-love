<template>
  <div class=" px-9 py-16 flex flex-col justify-between gap-14">
    <section class=" flex justify-between">
      <div class=" w-full font-bold text-4xl">
        <h1 class=" font-love font-semibold text-4xl text-red-700 tracking-wider">A Journey of Love:</h1>
        <h1 class=" font-love-light font-bold text-4xl text-red-700 tracking-wider"><span class=" text-[#f67f39]">Omar</span> and <span class=" text-[#f67f39]">Rawan</span></h1>
      </div>

      <div class=" w-full">
        <p>
          Welcome to our special corner of the internet, where every moment we've shared comes alive. Join me in
          celebrating <span class=" font-love-light text-2xl font-semibold">how much Omar loves Rawan</span>, filled with cherished memories and unforgettable
          experiences.
        </p>
        <div class="flex gap-4 mt-6">
          <button class=" px-5 py-3 bg-black text-white">Learn More</button>
          <button class=" px-5 py-3 border-2 border-black">Sign Up</button>
        </div>
      </div>
    </section>

    <section class=" bg-gray-100 py-9 rounded-3xl">
      <Modal :thumb="thumbProps.thumb" :thumbWidth="thumbProps.thumbWidth" :thumbHeight="thumbProps.thumbHeight"
        :thumbAlt="thumbProps.thumbAlt" :video="thumbProps.video" :videoWidth="thumbProps.videoWidth"
        :videoHeight="thumbProps.videoHeight" />
    </section>
  </div>
</template>

<script setup>
import Modal from './Modalvideo.vue'

const thumbProps = {
  thumb: "/in_love.jpg",
  thumbWidth: 400,
  thumbHeight: 100,
  thumbAlt: "Loving each other",
  video: "/in_love.mp4",
  videoWidth: "100%",
  videoHeight: "100%",
};

</script>