import React from 'react'
import { ServicioInfo } from '../../../components/servicio/ServicioInfo'
import heroImage from "../../../assets/images/site_web/servicios/servicios-data/e-learning/hero.png"
import heroMobile from "../../../assets/images/site_web/servicios/servicios-data/e-learning/hero-mobile.png"
import video2 from "../../../assets/vid/servicios/service_2.mp4"
export const ElearningView = () => {
    return (
        <ServicioInfo
            heroImageDesktop={heroImage}
            heroImageMobile={heroMobile}
            heroTitle='E-learning'
            srcVideo={video2}
        >
            <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 font-normal mb-4 !leading-relaxed'>
                ¿Estás listo para transformar la manera en que capacitas a tu equipo o enseñas a tus clientes?
                ¡Estás en el lugar correcto! En Guimark, nos especializamos en soluciones de e-learning innovadoras y efectivas,
                diseñadas para satisfacer las necesidades específicas de tu negocio.

            </p>
            <div className='pl-5'>
                <p className='text-sm md:text-base 2xl:text-5xl text-orange-500  mb-4 !leading-relaxed uppercase font-bold'>
                    Nuestros servicios te ofrecen:
                </p>
                <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 font-normal mb-4 !leading-relaxed'>
                    •	Acceso 24/7: Aprende cuando y donde quieras.
                </p>
                <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 font-normal mb-4 !leading-relaxed'>
                    •	Contenidos Personalizados: Diseñados para tus necesidades específicas.
                </p>
                <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 font-normal mb-4 !leading-relaxed'>
                    •	Interactividad: Con herramientas de gamificación y ejercicios prácticos.
                </p>
                <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 font-normal mb-4 !leading-relaxed'>
                    •	Seguimiento Efectivo: Monitorea el progreso y mejora el rendimiento.
                </p>
            </div>
        </ServicioInfo>
    )
}
