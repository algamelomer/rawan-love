<template>
    <div class=" flex justify-between gap-4 items-center px-9 py-16">
        <section class=" flex flex-col justify-between w-full gap-4">
            <h1 class="font-love font-semibold text-4xl text-red-700 tracking-wider">
                Celebrating Our Beautiful Journey Together:
            </h1>
            <p class=" text-xl tracking-wide font-thin">
                Every moment spent with you, is a treasure I hold dear. From our laughter to our quiet times,
                each memory is a testament of my love to you even when we get mad at each other the only person i asylum
                to is you.
            </p>
            <ul class=" font-love-light text-xl font-thin">
                <li>Our first day being freinds.</li>
                <li>The day we celebrated your birthday.</li>
                <li>Sharing dreams and laughter.</li>
                <li>When we get upset from each other and reconcile.</li>
                <li>The relief after knowing i'm not losing you.</li>
                <li>I realy love you.</li>
                <li>The fact i'm breathing around you is the best where air is flowing around you makes me want to breath more.</li>
            </ul>
        </section>
        <section class=" w-full bg-gray-100 py-9 rounded-3xl">
            <Modal :thumb="thumbProps.thumb" :thumbWidth="thumbProps.thumbWidth" :thumbHeight="thumbProps.thumbHeight"
                :thumbAlt="thumbProps.thumbAlt" :video="thumbProps.video" :videoWidth="thumbProps.videoWidth"
                :videoHeight="thumbProps.videoHeight" />
        </section>
    </div>
</template>

<script setup>
import Modal from './Modalvideo.vue'

const thumbProps = {
    thumb: "/celebrating.jpg",
    thumbWidth: 400,
    thumbHeight: 100,
    thumbAlt: "Cute",
    video: "/celebrating.mp4",
    videoWidth: "100%",
    videoHeight: "100%",
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

h1,
p {
    font-family: 'Great Vibes', cursive;
}

ul.font-love-light li::before {
    content: '❤️';
    margin-right: 10px;
    /* Adjust the space between the heart and text */
    color: red;
    /* Set the heart color to red */
}
</style>