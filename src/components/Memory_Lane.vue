<template>
    <div class="iframe-container  py-16 flex flex-col gap-4 justify-between items-center">
        <section class=" flex flex-col justify-between items-center px-9">
            <h1 class="font-love font-semibold text-4xl text-red-700 tracking-wider">Memories</h1>
            <p class=" font-love-light font-bold text-4xl text-red-700 tracking-wider">Cherished moments shared between <span class=" text-[#f67f39]">Omar</span> and <span class=" text-[#f67f39]">Rawan</span>.</p>
        </section>
        <section class="w-full h-screen md:px-9">
            <iframe :src="src" frameborder="0" scrolling="no" class="w-full h-full"></iframe>
        </section>

    </div>
</template>

<script setup>
defineProps({
    src: {
        type: String,
        required: true
    }
});
</script>