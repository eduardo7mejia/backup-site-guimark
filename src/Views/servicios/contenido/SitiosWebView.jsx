import React from 'react'
import { ServicioInfo } from '../../../components/servicio/ServicioInfo'
import heroImage from "../../../assets/images/site_web/servicios/servicios-data/diseno-web/hero.png"
import heroMobile from "../../../assets/images/site_web/servicios/servicios-data/diseno-web/hero-mobile.png"
import video1 from "../../../assets/vid/servicios/service_1.mp4"
export const SitiosWebView = () => {
    return (
        <ServicioInfo
            heroImageDesktop={heroImage}
            heroImageMobile={heroMobile}
            heroTitle='Desarrollo Web'
            srcVideo={video1}
        >
            <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 !leading-relaxed font-normal mb-4'>
                En el mundo digital de hoy, una presencia en línea sólida es crucial para el éxito de cualquier negocio,
                grande o pequeño. En Guimark nos especializamos en el diseño y desarrollo de páginas web personalizadas que no solo reflejan la esencia de tu marca,
                sino que también potencian tus oportunidades de crecimiento.

            </p>
            <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 !leading-relaxed font-normal mb-4'>
                Ofrecemos soluciones web innovadoras y a medida que se adaptan a las necesidades específicas de tu empresa.
                Ya sea que necesites una simple página informativa o una plataforma de comercio electrónico completa,
                estamos aquí para ayudarte a destacar en el competitivo mercado actual.
            </p>
            <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 !leading-relaxed font-normal mb-4'>
                Descubre cómo una página web profesional puede atraer más clientes, aumentar tus ventas y fortalecer tu presencia en el mercado.
                Contáctanos hoy y da el primer paso hacia el éxito digital.
            </p>
        </ServicioInfo>
    )
}
