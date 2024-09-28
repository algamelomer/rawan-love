/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'love': ['"Great Vibes"', 'cursive'],
                'love-light': ['"Love Light"', 'cursive'],
            },
        },
    },
    plugins: [],
}