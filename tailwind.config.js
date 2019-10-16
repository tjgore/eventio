module.exports = {
    theme: {
        extend: {
            inset: {
                '5': '-5rem',
                '2': '-2rem'
            },
        }
    },
    variants: {},
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.bg-grad-pink': {
                    background: 'linear-gradient(to bottom right, #3739f4, rgba(244,55,238,0.7))'
                },
                '.bg-grad-dark': {
                    background: 'rgba(0,0,0,0.5)'
                },
                '.bg-grad-dark-300': {
                    background: 'rgba(0,0,0,0.3)'
                }
            }
            addUtilities(newUtilities, ['responsive', 'hover'])
        }
    ]
}