/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                numberText: '#584944',
                roseTaupe: '#7f6666',
                rawUmber: '#91634b',
                mikadoYellow: '#fcc50c',
                white: '#fefefe',
                cardBgDark: '#0a0a0a',
                navBgDark: 'rgba(0, 0, 0, 0.85)',
                hoverColorDark: '#111111'
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
