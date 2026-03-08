/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                obsidian: {
                    900: '#080808',
                    800: '#111111',
                    700: '#1a1a1a',
                }
            },
            fontFamily: {
                serif: ['"DM Serif Display"', 'serif'],
                mono: ['"Geist Mono"', 'monospace'],
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'silver-gradient': 'linear-gradient(135deg, #F8FAFC 0%, #94A3B8 100%)',
            }
        },
    },
    plugins: [],
}
