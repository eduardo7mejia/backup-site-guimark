import React from 'react'
import { ServicioInfo } from '../../../components/servicio/ServicioInfo'
import heroImage from "../../../assets/images/site_web/servicios/servicios-data/fotografia/hero.png"
import heroMobile from "../../../assets/images/site_web/servicios/servicios-data/fotografia/hero-mobile.png"
import video8 from "../../../assets/vid/servicios/service_8.mp4"
export const FotografiaView = () => {
    return (
        <ServicioInfo
            heroImageDesktop={heroImage}
            heroImageMobile={heroMobile}
            heroTitle={'Fotografía de producto'}
            srcVideo={video8}
        >
            <p className='text-sm md:text-base 2xl:text-xl text-slate-500 !leading-relaxed font-normal mb-4'>
                En Guimark, ofrecemos un servicio de fotografía de producto que destaca por su atención al detalle y calidad excepcional. Aquí te mostramos por qué es beneficioso hacerlo con nosotros:
            </p>
            <p className='text-sm md:text-base 2xl:text-xl text-slate-500 !leading-relaxed font-normal mb-4'>
                <p>1. <span className='font-semibold'>Imágenes de Alta Resolución</span>: Capturamos cada detalle de tus productos con una nitidez y claridad incomparables, asegurando que se vean impecables en cualquier medio.</p>
                <p>2. <span className="font-semibold">Iluminación Profesional</span>: Utilizamos técnicas avanzadas de iluminación para resaltar las características más atractivas de tus productos, logrando imágenes que captan la atención al instante.</p>
                <p>3. <span className="font-semibold">Estilismo Creativo</span>: Nuestro equipo se especializa en crear composiciones visuales que no solo muestran tu producto, sino que también cuentan una historia, conectando emocionalmente con tu audiencia.</p>
                <p>4. <span className="font-semibold">Consistencia Visual</span>: Nos aseguramos de que todas las fotos mantengan una coherencia estética, reforzando la identidad de tu marca y creando una experiencia visual uniforme en tu catálogo, sitio web o redes sociales.</p>
                <p>5. <span className="font-semibold">Optimización para Ventas</span>: Nuestras fotografías están pensadas para convertir. Sabemos cómo destacar los atributos que más valoran tus clientes, aumentando la probabilidad de que realicen una compra.</p>
            </p>
            <p className='text-sm md:text-base 2xl:text-xl text-slate-500 !leading-relaxed font-normal mb-4'>
            Elige Guimark para tu fotografía de producto y eleva la presentación de tus productos al nivel profesional que se merecen, atrayendo más clientes y aumentando tus ventas.
            </p>
        </ServicioInfo>
    )
}
