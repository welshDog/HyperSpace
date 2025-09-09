/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                dyslexia: {
                    primary: '#1176dc',
                    secondary: '#7dd3fc',
                    accent: '#fbbf24',
                    background: '#ffffff',
                    text: '#1f2937',
                },
            },
            fontFamily: {
                sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-mono)', 'monospace'],
                dyslexic: ['var(--font-dyslexic)', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'dyslexia-sm': ['14px', { lineHeight: '1.6' }],
                'dyslexia-base': ['16px', { lineHeight: '1.6' }],
                'dyslexia-lg': ['18px', { lineHeight: '1.6' }],
                'dyslexia-xl': ['20px', { lineHeight: '1.6' }],
            },
        },
    },
    plugins: [],
};
