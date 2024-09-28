<template>
  <div class="px-0 md:px-9 py-16 flex flex-col justify-between gap-14 relative overflow-hidden"> <!-- Add relative class here -->
    <section class="md:px-0 px-3 flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
      <div class="w-full font-bold text-4xl">
        <h1 class="font-love font-semibold text-4xl text-red-700 tracking-wider">A Journey of Love:</h1>
        <h1 class="font-love-light font-bold text-4xl text-red-700 tracking-wider">
          <span class="text-[#f67f39]">Omar</span> and <span class="text-[#f67f39]">Rawan</span>
        </h1>
      </div>

      <div class="w-full">
        <p>
          Welcome to our special corner of the internet, where every moment we've shared comes alive. Join me in
          celebrating <span class="font-love-light text-2xl font-semibold">how much Omar loves Rawan</span>, filled with cherished memories and unforgettable
          experiences.
        </p>
        <div class="flex gap-4 mt-6">
          <button class="px-8 py-3 border-2 border-black bg-black text-white font-love text-xl" @click="generateHearts">Omar</button>
          <button class="px-5 py-3 border-2 border-black font-love text-xl" @click="generateHearts">Rawan</button>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 py-9 rounded-3xl">
      <ModalVideo :thumb="thumbProps.thumb" :thumbWidth="thumbProps.thumbWidth" :thumbHeight="thumbProps.thumbHeight"
        :thumbAlt="thumbProps.thumbAlt" :video="thumbProps.video" :videoWidth="thumbProps.videoWidth"
        :videoHeight="thumbProps.videoHeight" />
    </section>

    <div class="hearts">
      <div
        v-for="(heart, index) in hearts"
        :key="index"
        class="heart"
        :style="{ top: heart.top, left: heart.left, animation: `fly ${heart.duration}s ease-in-out` }"
      >
        ❤️
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ModalVideo from '@/components/ModalVideo.vue';

const thumbProps = {
  thumb: "/in_love.jpg",
  thumbWidth: 400,
  thumbHeight: 100,
  thumbAlt: "Loving each other",
  video: "/in_love.mp4",
  videoWidth: "100%",
  videoHeight: "100%",
};

const hearts = ref([]);

const generateHearts = () => {
  for (let i = 0; i < 10; i++) {
    createHeart();
  }
};

const createHeart = () => {
  const heart = {
    top: `${Math.random() * 100}vh`,  // Random vertical position
    left: `${Math.random() * 100}vw`, // Random horizontal position
    duration: 2,                       // Duration of the animation
  };
  hearts.value.push(heart);

  // Remove heart after 5 seconds
  setTimeout(() => {
    hearts.value.shift(); // Remove the heart after it animates
  }, heart.duration * 1000);
};
</script>

<style scoped>
.relative {
  position: relative; /* Ensure the container is relative for absolute children */
}

.hearts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Prevent interaction with hearts */
}

.heart {
  position: absolute;
  font-size: 2rem;
  pointer-events: none; /* Prevent interaction with hearts */
}

@keyframes fly {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px); /* Change this value for higher flight */
    opacity: 0;                    /* Fade out */
  }
}
</style>
