/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        fontFamily: {
            'serif': ['Archivo Black', 'sans-serif'],
            'sans': ['Plus Jakarta Sans', 'sans-serif'],
        },
        extend: {
            zIndex: {
                '1': '1',
                '-1': '-1',
                '2': '2',
            },
            backgroundImage: {
                'banner': "url('assets/images/banners/banner-bg.jpg')",
                'subscribe': "url('assets/images/bg/bg2.jpg')",
                'money-calculator-form': "url('assets/images/bg/bg1.jpg')",
                'faq': "url('assets/images/bg/bg3.jpg')",
                'login': "url('assets/images/login.jpg')",
                'register': "url('assets/images/register.jpg')",
            },
            boxShadow: {
                'one': '0 0 40px rgba(69, 71, 69, .2)',
                'dropdown': '0px 0px 15px 0px rgba(0, 0, 0, .10)',
                'box': '0px 0px 40px 0px rgba(0, 0, 0, 0.10)',
            },
        },
        spacing: {
            0: '0',
            5: '5px',
            10: '10px',
            15: '15px',
            20: '20px',
            25: '25px',
            30: '30px',
            40: '40px',
            50: '50px',
            55: '55px',
            60: '60px',
            65: '65px',
            70: '70px',
            80: '80px',
            100: '100px',
            120: '120px',
            130: '130px',
            150: '150px',
        },
        borderWidth: {
            DEFAULT: '1px',
            '0': '0',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '5': '5px',
        },
        colors: {
            'gray': '#edefeb',
            'white': '#ffffff',
            'black': '#0e0f0c',
            'primary': '#01354a',
            'secondary': '#454745',
            'warning': '#ffd15c',
            'success': '#008000',
            'danger': '#c22e2e',
            'transparent': 'transparent',
        },
        screens: {
            'sm': '576px',
            // => @media (min-width: 576px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '992px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1200px',
            // => @media (min-width: 1200px) { ... }

            '2xl': '1400px',
            // => @media (min-width: 1400px) { ... }

            '3xl': '1700px',
            // => @media (min-width: 1700px) { ... }
        },
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '540px',
                    },
                    '@screen md': {
                        maxWidth: '720px',
                    },
                    '@screen lg': {
                        maxWidth: '960px',
                    },
                    '@screen xl': {
                        maxWidth: '1140px',
                    },
                    '@screen 2xl': {
                        maxWidth: '1320px',
                    },
                    '@screen 3xl': {
                        maxWidth: '1620px',
                    },
                }
            })
        }
    ],
}