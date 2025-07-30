import React from 'react';
import { Tilt } from 'react-tilt';
import EmblaCarousel from '../components/carousel/EmblaCarousel';
import { dataServicesMobile } from '../data/dataHome';
import image1 from '../assets/images/site_web/marcos/image_3.png'
import image2 from '../assets/images/site_web/marcos/image_1.png'
import image3 from '../assets/images/site_web/marcos/image_6.png'
import image4 from '../assets/images/site_web/marcos/image_2.png'
import image5 from '../assets/images/site_web/marcos/image_1.png'
import image6 from '../assets/images/site_web/marcos/image_2.png'
import image7 from '../assets/images/site_web/marcos/image_1.png'
import image8 from '../assets/images/site_web/marcos/image_3.png'

import { Link } from 'react-router-dom';


const data = [
    { id: 1, src: image1, to: 'sitios-web', title: 'Desarrollo Web', description: 'Creación de páginas web', bgClass: 'col-span-2 row-span-1 bg-siteWeb' },
    { id: 2, src: image2, to: 'e-learning', title: 'E-learning', description: 'Cursos en línea interactivos', bgClass: 'col-span-2 row-span-1 bg-eLearning' },
    { id: 3, src: image3, to: 'redes-sociales', title: 'Redes Sociales', description: 'Gestión de contenido en redes sociales', bgClass: 'col-span-1 row-span-4 h-[40rem] bg-redesSociales' },
    { id: 4, src: image4, to: 'impresiones', title: 'Impresión Offset', description: 'Servicios de impresión profesional', bgClass: 'col-span-2 row-span-2 bg-impresiones' },
    { id: 5, src: image5, to: 'branding', title: 'Branding', description: ' Servicio de branding especializado en construir y gestionar la identidad de tu marca.', bgClass: 'col-span-1 row-span-2 bg-branding' },
    { id: 6, src: image6, to: 'importacion', title: 'Importación', description: 'Importación experta, entrega segura', bgClass: 'col-span-3 row-span-2 bg-importacion' },
    { id: 7, src: image7, to: 'motion-graphics', title: 'Motion Graphics', description: 'Servicio motion graphics de alta calidad', bgClass: 'col-span-2 row-span-1 bg-motionGraphics' },
    { id: 8, src: image8, to: 'fotografia-de-producto', title: 'Fotografía de producto', description: 'Servicio de fotografía de producto que destaca por su atención al detalle y calidad excepcional', bgClass: 'col-span-2 row-span-1 bg-fotografia' },
];

const Card = ({ title, description, bgClass, options, id, src, to }) => (
    <Tilt options={options} className={`w-full h-[20rem] relative cursor-pointer overflow-hidden group bg-100-100 bg-no-repeat bg-center rounded-3xl ${bgClass}`}
        data-aos="fade-up" data-aos-delay={`${id}00`}
    >
        <Link to={`servicios/${to}`}>
            <div className='absolute bottom-0 left-4 pb-5 text-white p-1'>
                <h2 translate='no' className='md:text-3xl 2xl:text-5xl font-bold'>{title}</h2>
                <p translate='no' className='md:text-lg 2xl:text-3xl'>{description}</p>
            </div>
            <img
                src={src}
                alt="Base Section"
                className="absolute top-0 left-0 w-full h-full max-h-full object-fill z-10 transform scale-y-[-1]"
            />
        </Link>
    </Tilt>
);

export const ServicesBento = () => {
    const OPTIONS = { dragFree: true, loop: false };

    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 3,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    };

    return (
        <div className=''>
            <h2 className='text-4xl md:text-6xl 2xl:text-7xl text-orange-600 font-bold uppercase px-6' data-aos="fade-up">Servicios</h2>
            <p className='text-base md:text-xl 2xl:text-2xl ml-2 text-zinc-500 px-6' data-aos="fade-up" data-aos-delay={`100`}>
                Tu éxito es nuestra pasión. Nos dedicamos a construir una comunidad leal en torno a tu marca, aumentando tu impacto y alcance.
            </p>
            <div className="hidden md:grid grid-cols-1 md:grid-cols-4 md:grid-rows-1 gap-2 md:gap-6 h-3/4 rounded-3xl md:p-8 px-6 " data-aos="fade-up" data-aos-delay={`100`}>
                {data.map((item, index) => (
                    <Card
                        options={defaultOptions}
                        key={index}
                        title={item.title}
                        description={item.description}
                        bgClass={item.bgClass}
                        id={item.id}
                        src={item.src}
                        to={item.to}
                    />
                ))}
            </div>

            <div className='md:hidden mt-5' data-aos="fade-up" data-aos-delay={`100`}>
                <EmblaCarousel slides={dataServicesMobile} options={OPTIONS} />
            </div>
        </div>
    );
};
