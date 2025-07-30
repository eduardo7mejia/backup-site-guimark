/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'texta-narrow-alt': ['TextaNarrowAlt', 'sans-serif'],
      },
      width: {
        'calc-100-minus-80': 'calc(100% - 80px)',
        'calc-100-minus-160': 'calc(100% - 160px)',
        'calc-100-minus-240': 'calc(100% - 240px)',
      },
      maxWidth: {
        '8xl': '1440px',   // 90rem
        '9xl': '1600px',   // 100rem
        '10xl': '1920px',  // 120rem
        '11xl': '2048px',  // 128rem
        '12xl': '2560px',  // 160rem
        '13xl': '2880px',  // 180rem
        '14xl': '3200px',  // 200rem
        '15xl': '3840px',  // 240rem
      },
      backgroundImage: {
        'mobile': "url('/src/assets/images/site_web/heroSection/pagina-web_vertical.gif')",
        'desktop': "url('/src/assets/images/site_web/heroSection/pagina-web.gif')",

        'siteWeb': "url('/src/assets/images/site_web/servicios/sitios-web.jpg')",
        'eLearning': "url('/src/assets/images/site_web/servicios/e-learning.jpg')",
        'redesSociales': "url('/src/assets/images/site_web/servicios/redes-sociales.jpg')",
        'impresiones': "url('/src/assets/images/site_web/servicios/impresiones.jpg')",
        'branding': "url('/src/assets/images/site_web/servicios/branding.jpg')",
        'importacion': "url('/src/assets/images/site_web/servicios/importacion.jpg')",
        'motionGraphics': "url('/src/assets/images/site_web/servicios/motion-graphic.jpg')",
        'fotografia': "url('/src/assets/images/site_web/servicios/fotografia.jpg')",


        'hereSectionServicesDesktop': "url('/src/assets/images/site_web/section_servicios/serviceDesktop.png')",
        'hereSectionServicesMobile': "url('/src/assets/images/site_web/section_servicios/serviceMobile.png')",
        'lineTexturas': "url('/src/assets/images/site_web/lines-texturas.png')",
        'linesFooter': "url('/src/assets/images/site_web/texturas-footer.png')",
        'heroContactDesktop': "url('/src/assets/images/site_web/contacto/hero-contacto.png')",
        'heroContactMobile': "url('/src/assets/images/site_web/contacto/hero-contacto-mobile.png')",
        'foundTestimonios': "url('/src/assets/images/site_web/equipo/testimonios/placa-base.png)"
      },
      backgroundAttachment: {
        'fixed': 'fixed',
        'local': 'local',
        'scroll': 'scroll',
      },
      backgroundSize: {
        '100-100': '100% 100%',
      },
      backgroundPosition: {
        'contain-100': 'contain 100%',
      },
      boxShadow: {
        'top-bottom': '0 -10px 10px -10px rgba(0, 0, 0, 0.5), 0 10px 10px -10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

