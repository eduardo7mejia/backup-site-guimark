import React from 'react'
import { ServicioInfo } from '../../../components/servicio/ServicioInfo'
import heroImage from "../../../assets/images/site_web/servicios/servicios-data/redes-sociales/hero.png"
import heroMobile from "../../../assets/images/site_web/servicios/servicios-data/redes-sociales/hero-mobile.png"
import video4 from "../../../assets/vid/servicios/service_4.mp4"
export const RedesSocialesView = () => {
    return (
        <ServicioInfo
            heroImageDesktop={heroImage}
            heroImageMobile={heroMobile}
            heroTitle='Redes Sociales'
            srcVideo={video4}
        >
            <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 !leading-relaxed font-normal mb-4'>
                Potencia tu negocio con nuestra gestión de redes sociales

                <span className='block'>
                    En la era digital, las redes sociales son una herramienta clave para el crecimiento y éxito de cualquier negocio.
                    Ofrecemos servicios de gestión de redes sociales
                    diseñados para ayudarte a conectar de manera efectiva con tu audiencia y fortalecer tu presencia en línea.
                </span>


            </p>
            <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 !leading-relaxed font-normal mb-4'>
                Nuestro equipo especializado se encarga de crear estrategias personalizadas que se adaptan a las necesidades específicas de tu negocio,
                desde la creación de contenido atractivo hasta la interacción directa con tus clientes.
                Con nuestra ayuda, puedes aumentar tu visibilidad, atraer más clientes y convertir seguidores en fieles embajadores de tu marca.

            </p>
            <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 !leading-relaxed font-normal mb-4'>
                Ya seas un pequeño emprendedor o una empresa consolidada, estamos aquí para impulsar tu negocio y ayudarte a alcanzar tus metas.
                Descubre cómo podemos llevar tus redes sociales al siguiente nivel y hacer que tu marca destaque en el competitivo mundo digital.
                <span className='block'>
                    ¡Contáctanos hoy mismo para comenzar!
                </span>

            </p>
        </ServicioInfo>
    )
}
