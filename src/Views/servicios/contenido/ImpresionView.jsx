import { ServicioInfo } from '../../../components/servicio/ServicioInfo'
import heroImage from "../../../assets/images/site_web/servicios/servicios-data/impresion/hero.png"
import heroMobile from "../../../assets/images/site_web/servicios/servicios-data/impresion/hero-mobile.png"
import video3 from "../../../assets/vid/servicios/service_3.mp4"

export const ImpresionView = () => {
    return (
        <ServicioInfo
            heroImageDesktop={heroImage}
            heroImageMobile={heroMobile}
            heroTitle='Impresión Offset'
            srcVideo={video3}
        >
            <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 font-normal mb-4 !leading-relaxed'>
                Lleva tu negocio al siguiente nivel con nuestros servicios de impresión.
                <span className='block'>La impresión de alta calidad es esencial para destacar en un mercado competitivo. En nuestra agencia, ofrecemos servicios de impresión de primera categoría,
                    diseñados para satisfacer las necesidades tanto de pequeños emprendedores como de grandes empresas.</span>
            </p>
            <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 font-normal mb-4 !leading-relaxed'>
                Nos especializamos en crear materiales impresos que reflejan la esencia de tu marca y capturan la atención de tu audiencia.
                Desde tarjetas de presentación y folletos hasta catálogos y carteles, garantizamos resultados que superan tus expectativas.
                <span className='block'>    Con nuestra tecnología avanzada y un enfoque personalizado, te ayudamos a comunicar tu mensaje de manera clara y efectiva,
                    asegurando que tu negocio deje una impresión duradera en tus clientes.</span>

            </p>
            <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 font-normal mb-4 !leading-relaxed'>
                No importa el tamaño de tu empresa, estamos aquí para ayudarte a destacar.
                ¡Contáctanos hoy y descubre cómo nuestros servicios de impresión pueden transformar tu presencia en el mercado!
            </p>
        </ServicioInfo>
    )
}
