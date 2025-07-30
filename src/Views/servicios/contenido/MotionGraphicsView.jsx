import React from 'react'
import { ServicioInfo } from '../../../components/servicio/ServicioInfo'
import heroImage from "../../../assets/images/site_web/servicios/servicios-data/motion/hero.png"
import heroMobile from "../../../assets/images/site_web/servicios/servicios-data/motion/hero-mobile.png"
import video7 from "../../../assets/vid/servicios/service_7.mp4"
export const MotionGraphicsView = () => {
  return (
    <ServicioInfo
      heroImageDesktop={heroImage}
      heroImageMobile={heroMobile}
      heroTitle={'Motion Graphics'}
      srcVideo={video7}
    >
      <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 !leading-relaxed font-normal mb-4'>
        En Guimark, nos especializamos en la creación de motion graphics de alta calidad que destacan por su creatividad y precisión. Al confiar en nosotros, obtendrás:
      </p>
      <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 !leading-relaxed font-normal mb-4'>
        <p>1. <span className="font-semibold">Diseños Personalizados</span>: Nos aseguramos de que cada motion graphic refleje la identidad y el mensaje único de tu marca, capturando la atención de tu público objetivo.</p>
        <p>2. <span className="font-semibold">Alta Calidad Visual y Técnica</span>: Utilizamos las últimas tecnologías y técnicas de animación para crear gráficos fluidos, atractivos y visualmente impactantes.</p>
        <p>3. <span className="font-semibold">Eficiencia en la Comunicación</span>: Nuestros motion graphics están diseñados para comunicar mensajes complejos de manera simple y efectiva, mejorando la comprensión y retención de la información por parte de tu audiencia.</p>
        <p>4. <span className="font-semibold">Entrega Puntual</span>: En Guimark, valoramos tu tiempo. Nos comprometemos a entregar proyectos dentro del plazo acordado, sin comprometer la calidad.</p>
        <p>5. <span className="font-semibold">Soporte Continuo</span>: Te acompañamos en todo el proceso, desde la conceptualización hasta la finalización, garantizando que el resultado final supere tus expectativas.</p>
      </p>
      <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 !leading-relaxed font-normal mb-4'>
        Al elegir Guimark para tus proyectos de motion graphics, te aseguras una producción profesional que potenciará la visibilidad y el impacto de tu marca en el mercado.
      </p>
    </ServicioInfo>
  )
}
