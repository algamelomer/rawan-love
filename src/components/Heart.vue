<template>
    <div ref="section"
        class="flex justify-center items-center h-screen bg-gradient-to-r my-16 from-pink-300 to-red-500 overflow-hidden relative">
        <!-- Click Me text -->
        <transition name="fade">
            <p
                class="animated-text control-text tracking-wider absolute text-white text-4xl font-bold w-full text-center top-20">
                Click on Omar's heart to find out whats in there!
            </p>
        </transition>

        <!-- Heart container -->
        <div v-if="!isHeartClicked" @click="animateHeart" class="relative w-72 h-72 cursor-pointer">
            <div class="absolute inset-0 bg-red-700 transform w-full h-full heart hide"></div>

            <div class="absolute inset-0 bg-pink-700 transform rotate-45 w-full h-full heart show"></div>
            <div class="absolute inset-0 bg-pink-700 transform -rotate-45 w-full h-full heart show"></div>
        </div>

        <!-- Hidden photos and text until animation -->
        <transition-group name="photo" tag="div">
            <img v-for="(photo, index) in photos" :key="`photo-${index}`" :src="photo" v-if="photosVisible"
                class="absolute w-16 photo transition-all duration-500" @click="movePhoto(index)" />
        </transition-group>

        <transition name="fade">
            <p v-if="showText && isHeartClicked"
                class="animated-text tracking-wider absolute text-white text-4xl italic font-extrabold w-full text-center top-48">
                I can't live without you!
            </p>
        </transition>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';

// Photos array (add your images here)
const photos = [
    'https://i.ibb.co/gwsRNzY/IMG-20240911-WA0002.jpg',
    'https://i.ibb.co/xL5wBBx/IMG-20240928-WA0035.jpg',
    'https://i.ibb.co/3T8WmK5/IMG-20240928-WA0036.jpg',
    'https://i.ibb.co/5BzH5S5/IMG-20240928-WA0038.jpg',
    'https://i.ibb.co/0hrVdKh/IMG-20240928-WA0037.jpg',
    'https://i.ibb.co/TmmkdSt/IMG-20240928-WA0041.jpg',
    'https://i.ibb.co/D8QZ6mh/IMG-20240928-WA0039.jpg',
    'https://i.ibb.co/DWMWMwQ/IMG-20240928-WA0040.jpg',
    'https://i.ibb.co/XjgvDpK/IMG-20240928-WA0045.jpg',
    'https://i.ibb.co/RySyh0x/IMG-20240928-WA0042.jpg',
    'https://i.ibb.co/Qm6jSnP/IMG-20240928-WA0044.jpg',
    'https://i.ibb.co/0KCrmjF/IMG-20240928-WA0043.jpg',
    'https://i.ibb.co/cXL9ts9/IMG-20240928-WA0048.jpg',
    'https://i.ibb.co/Y8Cc43L/IMG-20240928-WA0046.jpg',
    'https://i.ibb.co/yS9Rw41/IMG-20240928-WA0047.jpg',
    'https://i.ibb.co/C2kVSGt/IMG-20240928-WA0051.jpg',
    'https://i.ibb.co/sJpBVvm/IMG-20240928-WA0049.jpg',
    'https://i.ibb.co/Hxk5kYY/IMG-20240928-WA0050.jpg',
    'https://i.ibb.co/jGLhzbX/IMG-20240928-WA0054.jpg',
    'https://i.ibb.co/ZTGsqGb/IMG-20240928-WA0052.jpg',
    'https://i.ibb.co/S0V9ZS3/IMG-20240928-WA0053.jpg',
    'https://i.ibb.co/3sD7pjD/IMG-20240928-WA0057.jpg',
    'https://i.ibb.co/bNqxkkg/IMG-20240928-WA0055.jpg',
    'https://i.ibb.co/Nr3X87r/IMG-20240928-WA0056.jpg',
    'https://i.ibb.co/gD10S6G/IMG-20240928-WA0060.jpg',
    'https://i.ibb.co/DpYYDs2/IMG-20240928-WA0058.jpg',
    'https://i.ibb.co/0hCyPm6/IMG-20240928-WA0059.jpg',
    'https://i.ibb.co/NCV6J2f/Whats-App-Image-2024-09-28-at-04-42-18-8e09bd9f.jpg',
    'https://i.ibb.co/R60XR5j/IMG-20240928-WA0061.jpg',
    'https://i.ibb.co/Qv4PQf6/IMG-20240928-WA0062.jpg',
    'https://i.ibb.co/cQzH15Z/IMG-20240928-WA0063.jpg',
    // Add more photos as needed
];

// Refs for each photo element
const photoRefs = ref([]);

// For positioning the photos
const photosVisible = ref(false);
const showText = ref(false);
const isHeartClicked = ref(false);
const photoAnimations = []; // To store animations for each photo

const section = ref(null); // Ref for the section container

// Heart pumping animation
onMounted(() => {
    const heartElements = document.querySelectorAll('.heart');
    gsap.to(heartElements, {
        scale: 1.05,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
    });
});

// Heart animation function
const animateHeart = () => {
    const heartElements = document.querySelectorAll('.heart');
    const show = document.querySelectorAll('.show');
    const hide = document.querySelectorAll('.hide');
    const text = document.querySelectorAll('.control-text');
    hide.forEach(element => {
        element.style.display = 'none';
    });

    text.forEach(element => {
        element.classList.add('click-me-text');
    });

    // Set position: absolute for elements with the 'show' class
    show.forEach(element => {
        element.style.display = 'flex';
    });

    // Stop the pulsing animation
    gsap.killTweensOf(heartElements);

    // GSAP heart breaking animation
    gsap.to(heartElements, {
        scale: 0.8,
        rotation: 15,
        duration: 0.3,
        onComplete: () => {
            gsap.to(heartElements, {
                scale: 0,
                duration: 0.5,
                onComplete: () => {
                    // Make photos visible and spread randomly across the section
                    photosVisible.value = true;
                    isHeartClicked.value = true;

                    // Ensure DOM updates before applying animations
                    nextTick(() => {
                        photos.forEach((_, index) => {
                            const photoEl = document.querySelectorAll('.photo')[index];
                            photoRefs.value[index] = photoEl;

                            // Spread the photos randomly within the section
                            // Adjusted to ensure photos are placed around the heart (centered)
                            const randomX = gsap.utils.random(-section.value.clientWidth / 2 + 100, section.value.clientWidth / 2 - 100);
                            const randomY = gsap.utils.random(-section.value.clientHeight / 2 + 100, section.value.clientHeight / 2 - 100);

                            // Set random positions for the photos
                            gsap.set(photoEl, {
                                x: randomX,
                                y: randomY
                            });

                            // Automatically start the movement
                            autoMovePhoto(index);
                        });

                        showText.value = true; // Show the text after photos appear
                    });
                }
            });
        }
    });

    // Fade out Click Me text after clicking the heart
    setTimeout(() => {
        showText.value = false; // This will control the visibility of the text
    }, 100); // A slight delay before the text fades out
};


// Automatically move the photos after they appear
const autoMovePhoto = (index) => {
    const photo = photoRefs.value[index];

    // Set distinct initial random velocities ensuring some go in different directions
    let velocityX = gsap.utils.random(-100, 100);
    let velocityY = gsap.utils.random(-100, 100);

    // Ensure some photos have predetermined velocities
    if (index % 3 === 0) { // Example: Make every third photo move in a specific direction
        velocityX = 50; // Example fixed velocity to the right
        velocityY = gsap.utils.random(-50, 50); // Random vertical movement
    } else if (index % 3 === 1) {
        velocityX = -50; // Example fixed velocity to the left
        velocityY = gsap.utils.random(-50, 50); // Random vertical movement
    } else {
        velocityX = gsap.utils.random(-50, 50); // Random horizontal movement
        velocityY = 50; // Fixed velocity downwards
    }

    const move = () => {
        const animation = gsap.to(photo, {
            x: `+=${velocityX}`,
            y: `+=${velocityY}`,
            duration: 1,
            ease: "none",
            onUpdate: function () {
                const bounds = photo.getBoundingClientRect();
                const sectionBounds = section.value.getBoundingClientRect();

                // Horizontal (left/right) bounce
                if (bounds.left <= sectionBounds.left || bounds.right >= sectionBounds.right) {
                    velocityX = -velocityX; // Reverse horizontal velocity
                    gsap.set(photo, {
                        x: Math.min(Math.max(bounds.left, sectionBounds.left), sectionBounds.right - photo.clientWidth)
                    });
                }

                // Vertical (top/bottom) bounce
                if (bounds.top <= sectionBounds.top || bounds.bottom >= sectionBounds.bottom) {
                    velocityY = -velocityY; // Reverse vertical velocity
                    gsap.set(photo, {
                        y: Math.min(Math.max(bounds.top, sectionBounds.top), sectionBounds.bottom - photo.clientHeight)
                    });
                }

                // Detect collisions with other photos and bounce
                photos.forEach((_, otherIndex) => {
                    if (otherIndex !== index) {
                        const otherPhoto = photoRefs.value[otherIndex];
                        const otherBounds = otherPhoto.getBoundingClientRect();

                        if (bounds.left < otherBounds.right && bounds.right > otherBounds.left &&
                            bounds.top < otherBounds.bottom && bounds.bottom > otherBounds.top) {
                            // Reverse velocities on collision
                            velocityX = -velocityX;
                            velocityY = -velocityY;
                        }
                    }
                });
            },
            onComplete: move, // Loop the movement
        });

        photoAnimations[index] = animation; // Store the animation for later control
    };

    move(); // Start the movement immediately after the heart click
};

// Move photo when clicked to change its direction
const movePhoto = (index) => {
    const photo = photoRefs.value[index];

    if (photoAnimations[index]) {
        photoAnimations[index].kill();
    }

    let velocityX = gsap.utils.random(-100, 100);
    let velocityY = gsap.utils.random(-100, 100);

    const move = () => {
        const animation = gsap.to(photo, {
            x: `+=${velocityX}`,
            y: `+=${velocityY}`,
            duration: 1,
            ease: "none",
            onUpdate: function () {
                const bounds = photo.getBoundingClientRect();
                const sectionBounds = section.value.getBoundingClientRect();

                // Horizontal (left/right) bounce
                if (bounds.left <= sectionBounds.left || bounds.right >= sectionBounds.right) {
                    velocityX = -velocityX; // Reverse horizontal velocity
                    gsap.set(photo, {
                        x: Math.min(Math.max(bounds.left, sectionBounds.left), sectionBounds.right - photo.clientWidth)
                    });
                }

                // Vertical (top/bottom) bounce
                if (bounds.top <= sectionBounds.top || bounds.bottom >= sectionBounds.bottom) {
                    velocityY = -velocityY; // Reverse vertical velocity
                    gsap.set(photo, {
                        y: Math.min(Math.max(bounds.top, sectionBounds.top), sectionBounds.bottom - photo.clientHeight)
                    });
                }

                // Detect collisions with other photos and bounce
                photos.forEach((_, otherIndex) => {
                    if (otherIndex !== index) {
                        const otherPhoto = photoRefs.value[otherIndex];
                        const otherBounds = otherPhoto.getBoundingClientRect();

                        if (bounds.left < otherBounds.right && bounds.right > otherBounds.left &&
                            bounds.top < otherBounds.bottom && bounds.bottom > otherBounds.top) {
                            // Reverse velocities on collision
                            velocityX = -velocityX;
                            velocityY = -velocityY;
                        }
                    }
                });
            },
            onComplete: move, // Loop the movement
        });

        photoAnimations[index] = animation; // Store the animation for later control
    };

    move(); // Start moving the photo immediately after being clicked
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.animated-text {
    font-family: 'Great Vibes', cursive;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    animation: pulse 2.5s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    50% {
        transform: scale(1.05);
        opacity: 1;
    }

    100% {
        transform: scale(1);
        opacity: 0.7;
    }
}

.photo {
    pointer-events: auto;
    /* Allow clicking on photos */
}

.heart {
    clip-path: path("M120 40.248c-31.48-54.02-120-38.25-120 29.44 0 46.61 55.71 94.27 120 158.08 60.86-60.51 120-110.735 120-158.08 0-67.92-88.75-82.306-120-29.44z");
    transition: transform 0.15s ease;
}


.photo-enter-active,
.photo-leave-active {
    transition: all 0.5s ease;
}

.show {
    display: none;
}

.photo-enter-from {
    opacity: 0;
}

.photo-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.click-me-text {
    animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>
