import service_1 from '../assets/images/site_web/icons/ICONO-BRANDING.png'
import service_2 from '../assets/images/site_web/icons/ICONO-E-LEARNING.png'
import service_3 from '../assets/images/site_web/icons/ICONO-IMPRESION.png'
import service_4 from '../assets/images/site_web/icons/ICONO-ANIMACION.png'
import service_5 from '../assets/images/site_web/icons/ICONO-FOTOGRAFIA.png'
import service_6 from '../assets/images/site_web/icons/ICONO-DESARROLLO-WEB.png'
import service_7 from '../assets/images/site_web/icons/ICONO-REDES-SOCIALES.png'
import service_8 from '../assets/images/site_web/icons/ICONO-IMPORTACION.png'

import image_1 from '../assets/images/site_web/section_servicios/bloque/1.png';
import image_2 from '../assets/images/site_web/section_servicios/bloque/2.png';
import image_3 from '../assets/images/site_web/section_servicios/bloque/3.png';
import image_4 from '../assets/images/site_web/section_servicios/bloque/4.png';
import image_cardVertical from '../assets/images/site_web/base_card.png';
import image_cardHorizontal from '../assets/images/site_web/base_sections.png';
import image_cardHorizontal2 from '../assets/images/site_web/base_sections_2.png';


export const dataServicios = [
    {
        id: 1,
        title: 'Branding',
        img: service_1,
        description: 'Creación y gestión de marca, Desarrollo de marca, Diseño e identidad visual',
        isList: true
    },
    {
        id: 2,
        title: 'E-Learning',
        img: service_2,
        description: 'Ofrecemos un contenedor digital con integración de objetos de aprendizaje tales como: Locución, video, motion graphics, infografías, juegos de aprendizaje, musicalización, folleys, gifs, comics y diseño de contenidos.',
        isList: false
    },
    {
        id: 3,
        title: 'Impresión en Offset',
        img: service_3,
        description: 'Diseño gráfico, Diseño editorial, Preprensa, Acabados especiales, Impresión Offset digital, Impresión Offset Tradicional, Flexografía',
        isList: true
    },
    {
        id: 4,
        title: 'Animación, Producción y Postproducción Audiovisual',
        img: service_4,
        description: 'Combinamos la creatividad artística con la tecnología para producir contenido animado y mejorar la calidad de los materiales audiovisuales a través de la edición.',
        isList: false
    },
    {
        id: 5,
        title: 'Fotografía de Producto',
        img: service_5,
        description: 'Nuestros estándares de calidad son los más altos, tratamos de presentar la mejor imagen de producto siendo fiel a sus características y necesidades de la marca.',
        isList: false
    },
    {
        id: 6,
        title: 'Desarrollo Web',
        img: service_6,
        description: 'Creamos páginas web a medida de tu negocio, donde tus usuarios encontrarán la información que buscan en forma rápida, fácil y sencilla.',
        isList: false
    },
    {
        id: 7,
        title: 'Redes Sociales',
        img: service_7,
        description: 'Somos una agencia con una fuerte orientación hacia el branding y el diseño estratégico, diseño funcional e inteligente orientado a mejorar la presencia online y aumentar resultados de tu negocio.',
        isList: false
    },
    {
        id: 8,
        title: 'Importación y Comercialización de Productos',
        img: service_8,
        description: 'Nuestro equipo de expertos en comercio internacional se encarga de todo lo necesario para la gestión óptima del proceso de importación.',
        isList: false
    }
];


export const dataContent = [
    {
        id: 1,
        image: image_1,
        title: '',
        description: 'Impulsa tu marca con nuestro Marketing y Diseño personalizado.',
        classBento: 'md:row-span-2 md:col-span-1',
        imageCard: image_cardHorizontal2,
    },
    {
        id: 2,
        image: image_2,
        title: '',
        description: 'Resultados efectivos con nuestras Estrategias de Marketing.',
        classBento: 'md:row-span-2 md:col-span-1',
        imageCard: image_cardHorizontal2,
    },
    {
        id: 3,
        image: image_3,
        title: '',
        description: '25 Años de Experiencia en Impresiones y Acabados.',
        classBento: 'md:row-span-2 md:col-span-1',
        imageCard: image_cardHorizontal2,
    },
    {
        id: 4,
        image: image_4,
        title: '',
        description: 'Calidad y Puntualidad garantizadas en cada proyecto',
        classBento: 'md:row-span-2 md:col-span-3 row-span-2 col-span-1 ',
        imageCard: image_cardHorizontal
    }
];