import { ServicioInfo } from '../../../components/servicio/ServicioInfo'
import heroImage from "../../../assets/images/site_web/servicios/servicios-data/importacion/hero.png"
import heroMobile from "../../../assets/images/site_web/servicios/servicios-data/importacion/hero-mobile.png"
import video6 from "../../../assets/vid/servicios/service_6.mp4"
export const ImportacionView = () => {
    return (
        <ServicioInfo
            heroImageDesktop={heroImage}
            heroImageMobile={heroMobile}
            heroTitle='Importación'
            srcVideo={video6}
        >
            <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 !leading-relaxed font-normal mb-4'>
                Simplifica tus operaciones con nuestros servicios de importación.
                <span className='block'>
                    En un mundo globalizado, contar con un socio confiable para tus necesidades de importación es esencial para el crecimiento y éxito de tu negocio.
                </span>
                <span> En nuestra agencia, ofrecemos servicios de importación eficientes y personalizados, diseñados para pequeños emprendedores y grandes empresas por igual.</span>
            </p>
            <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 !leading-relaxed font-normal mb-4'>
                Nos encargamos de cada detalle del proceso de importación, desde la gestión de la logística hasta el cumplimiento de las normativas,
                asegurando que tus productos lleguen a tiempo y sin complicaciones.
                Con nuestra experiencia y red global, facilitamos el acceso a nuevos mercados y oportunidades.
            </p>
            <p className='text-sm md:text-base 2xl:text-2xl text-slate-500 !leading-relaxed font-normal mb-4'>
                Ya sea que necesites importar materia prima, productos terminados o cualquier otra mercancía, estamos aquí para ofrecerte soluciones que optimicen
                tu cadena de suministro y potencien tu negocio.
                <span className='block'>
                    Confía en nosotros para simplificar tus operaciones de importación y abrir las puertas a un mundo de posibilidades.
                </span>
                <span className='block'>
                    ¡Contáctanos hoy mismo y descubre cómo podemos ayudarte a crecer!
                </span>
            </p>
        </ServicioInfo>
    )
}
