import React from 'react'
import { ServicioInfo } from '../../../components/servicio/ServicioInfo'
import heroImage from "../../../assets/images/site_web/servicios/servicios-data/tarjetas-digitales/hero.png"
import heroMobile from "../../../assets/images/site_web/servicios/servicios-data/tarjetas-digitales/hero-mobile.png"
import video5 from "../../../assets/vid/servicios/service_5.mp4"
export const TarjetasDigitalesView = () => {
    return (
        <ServicioInfo
            heroImageDesktop={heroImage}
            heroImageMobile={heroMobile}
            heroTitle='Branding'
            srcVideo={video5}
        >
            <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 !leading-relaxed font-normal mb-4'>
                Servicio de Branding - Guimark
                <span className='block'>En Guimark, transformamos ideas en identidades poderosas que conectan con tu audiencia. Nuestro servicio de branding no solo se enfoca en crear una imagen visual atractiva, sino en desarrollar una identidad integral que refleje la esencia y los valores de tu empresa.
                    Desde la conceptualización de un logotipo distintivo hasta la definición de una paleta de colores y la creación de una voz única para tu marca, nuestro equipo experto se asegura de que cada elemento esté alineado con tu visión y objetivos de negocio.
                </span>
            </p>
            <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 !leading-relaxed font-normal mb-4'>
            Sabemos que el branding efectivo es clave para destacar en un mercado competitivo, por eso en Guimark te ofrecemos soluciones personalizadas que posicionan tu marca en la mente de tus clientes, fortaleciendo su presencia en todos los puntos de contacto. Construimos marcas que no solo son reconocibles, sino que también inspiran confianza y lealtad.
            </p>
            <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 !leading-relaxed font-normal mb-4'>
            Déjanos ser tus aliados en la creación de una marca que hable por sí sola y que resuene con fuerza en el corazón de tu público objetivo.
                <span className='block'>
                    Contáctanos y descubre cómo nuestras soluciones pueden transformar la forma en que te conectas con tu público.
                </span>
            </p>
        </ServicioInfo>
    )
}
