import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaLinkedin, FaGlobe, FaArrowRight } from 'react-icons/fa';
import imageService1 from '../assets/images/services_1.png'
import imageService2 from '../assets/images/services_2.png'
import imageService3 from '../assets/images/services_3.png'
import imageService4 from '../assets/images/services_4.png'
import imageService5 from '../assets/images/services_5.png'
import imageService6 from '../assets/images/services_6.png'
import imageService7 from '../assets/images/services_7.png'
import imageService8 from '../assets/images/services_8.png'
import imageService9 from '../assets/images/services_9.png'

export const services = [
    { title: "Marketing Digital", imgSrc: imageService1 },
    { title: "Modelos y Edecanes", imgSrc: imageService2 },
    { title: "Impresión", imgSrc: imageService3 },
    { title: "Desarrollo Web", imgSrc: imageService4 },
    { title: "E-learning", imgSrc: imageService5 },
    { title: "Fotografía de Producto", imgSrc: imageService6 },
    { title: "Animación 2D y 3D", imgSrc: imageService7 },
    { title: "Redes Sociales", imgSrc: imageService8 },
    { title: "Importaciones", imgSrc: imageService9 }
];

export const locations = [
    { city: "cdmx", address: "Carolina No. 98 Int 101, Col. Ciudad de los Deportes, Del. Benito Juárez, CP. 03710", phone: "55 5563 2257", email: "ventas@guimark.com", urlMapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.6562944512384!2d-99.18181632580759!3d19.384029542232202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff78075d26cb%3A0xd8549713983b823c!2sCarolina%2098%2C%20Cd.%20de%20los%20Deportes%2C%20Benito%20Ju%C3%A1rez%2C%2003710%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1718232416127!5m2!1ses!2smx' },
    // { city: "puebla", address: "Lomas De Angelopolis , San Andrés Cholula, Puebla, Pue. C.P. 72830", phone: "55 5563 2257", email: "ventas@gumark.com", urlMapa: 'https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d63.707630666865256!2d-98.2786626229046!3d18.991580406511456!2m2!1f63.56610356273975!2f45.012436090597056!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x85cfb8702d7feb59%3A0xfc9afe2b042ebd21!2sZAGGEZZA%20LA%20REVISTA!5e1!3m2!1ses!2smx!4v1718234553148!5m2!1ses!2smx' },
    // { city: "querétaro", address: "Colinas del Marqués 200-92, Col. De la Piedad, El Marqués, Queretaro, Querétaro, Qro. C.P. 76246", phone: "55 56 2039 1009", email: "ventas@gumark.com", urlMapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.5210969508976!2d-100.25344600352443!3d20.584869293011224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3681b45f4dce7%3A0xa1dddb78c6fa7e13!2sCto.%20Colinas%20de%20el%20Marqu%C3%A9s%20200-92%2C%20Colinas%20de%2C%2076246%20La%20Piedad%2C%20Qro.!5e1!3m2!1ses!2smx!4v1718234761407!5m2!1ses!2smx' },
];

export const socialsGuillermo = [
    { icon: <FaEnvelope size='1.8em' />, info: 'g.pachecoramirez@guimark.com', link: 'mailto:g.pachecoramirez@guimark.com' },
    { icon: <FaPhone size='1.8em' />, info: '55 5917 8894', link: 'tel:5555632257' },
    { icon: <FaFacebook size='1.8em' />, info: '/guimarkt', link: 'https://www.facebook.com/guimarkt' },
    { icon: <FaInstagram size='1.8em' />, info: '/guimarktq', link: 'https://www.instagram.com/guimarktq' },
    { icon: <FaLinkedin size='1.8em' />, info: '/company/guimark360', link: 'https://www.linkedin.com/company/guimark360' },
    { icon: <FaGlobe size='1.8em' />, info: 'www.guimark.com', link: 'https://www.guimark.com' },
];
export const socialsGuillermoJR = [
    { icon: <FaEnvelope size='1.8em' />, info: 'guillermo.pacheco@guimark.com', link: 'mailto:guillermo.pacheco@guimark.com' },
    { icon: <FaPhone size='1.8em' />, info: '55-5563-2257', link: 'tel:5555632257' },
    { icon: <FaFacebook size='1.8em' />, info: '/guimarkt', link: 'https://www.facebook.com/guimarkt' },
    { icon: <FaInstagram size='1.8em' />, info: '/guimarktq', link: 'https://www.instagram.com/guimarktq' },
    { icon: <FaLinkedin size='1.8em' />, info: '/company/guimark360', link: 'https://www.linkedin.com/company/guimark360' },
    { icon: <FaGlobe size='1.8em' />, info: 'www.guimark.com', link: 'https://www.guimark.com' },
];
export const socialsAlfonso = [
    { icon: <FaEnvelope size='1.8em' />, info: 'preprensa@guimark.com', link: 'mailto:preprensa@guimark.com' },
    { icon: <FaPhone size='1.8em' />, info: '55-2269-5344', link: 'tel:5522695344' },
    { icon: <FaFacebook size='1.8em' />, info: '/guimarkt', link: 'https://www.facebook.com/guimarkt' },
    { icon: <FaInstagram size='1.8em' />, info: '/guimarktq', link: 'https://www.instagram.com/guimarktq' },
    { icon: <FaLinkedin size='1.8em' />, info: '/company/guimark360', link: 'https://www.linkedin.com/company/guimark360' },
    { icon: <FaGlobe size='1.8em' />, info: 'www.guimark.com', link: 'https://www.guimark.com' },
];
export const socialsCarlos = [
    { icon: <FaEnvelope size='1.8em' />, info: 'c.gutierrez@guimark.com', link: 'mailto:c.gutierrez@guimark.com' },
    { icon: <FaPhone size='1.8em' />, info: '55-5330-9045', link: 'tel:5553309045' },
    { icon: <FaFacebook size='1.8em' />, info: '/guimarkt', link: 'https://www.facebook.com/guimarkt' },
    { icon: <FaInstagram size='1.8em' />, info: '/guimarktq', link: 'https://www.instagram.com/guimarktq' },
    { icon: <FaLinkedin size='1.8em' />, info: '/company/guimark360', link: 'https://www.linkedin.com/company/guimark360' },
    { icon: <FaGlobe size='1.8em' />, info: 'www.guimark.com', link: 'https://www.guimark.com' },
];
export const socialsLuisa = [
    { icon: <FaEnvelope size='1.8em' />, info: 'luisa.camacho@guimark.com', link: 'mailto:luisa.camacho@guimark.com' },
    { icon: <FaPhone size='1.8em' />, info: '222-460-7600', link: 'tel:2224607600' },
    { icon: <FaFacebook size='1.8em' />, info: '/guimarkt', link: 'https://www.facebook.com/guimarkt' },
    { icon: <FaInstagram size='1.8em' />, info: '/guimarktq', link: 'https://www.instagram.com/guimarktq' },
    { icon: <FaLinkedin size='1.8em' />, info: '/company/guimark360', link: 'https://www.linkedin.com/company/guimark360' },
    { icon: <FaGlobe size='1.8em' />, info: 'www.guimark.com', link: 'https://www.guimark.com' },
];
export const socialsMariana = [
    { icon: <FaEnvelope size='1.8em' />, info: 'admon@guimark.com', link: 'mailto:admon@guimark.com' },
    { icon: <FaPhone size='1.8em' />, info: '55-5952-3496', link: 'tel:5559523496' },
    { icon: <FaFacebook size='1.8em' />, info: '/guimarkt', link: 'https://www.facebook.com/guimarkt' },
    { icon: <FaInstagram size='1.8em' />, info: '/guimarktq', link: 'https://www.instagram.com/guimarktq' },
    { icon: <FaLinkedin size='1.8em' />, info: '/company/guimark360', link: 'https://www.linkedin.com/company/guimark360' },
    { icon: <FaGlobe size='1.8em' />, info: 'www.guimark.com', link: 'https://www.guimark.com' },
];
export const socialsCarmen = [
    { icon: <FaEnvelope size='1.8em' />, info: 'planeacion@guimark.com', link: 'mailto:planeacion@guimark.com' },
    { icon: <FaPhone size='1.8em' />, info: '55-1953-0777', link: 'tel:5519530777' },
    { icon: <FaFacebook size='1.8em' />, info: '/guimarkt', link: 'https://www.facebook.com/guimarkt' },
    { icon: <FaInstagram size='1.8em' />, info: '/guimarktq', link: 'https://www.instagram.com/guimarktq' },
    { icon: <FaLinkedin size='1.8em' />, info: '/company/guimark360', link: 'https://www.linkedin.com/company/guimark360' },
    { icon: <FaGlobe size='1.8em' />, info: 'www.guimark.com', link: 'https://www.guimark.com' },
];
export const socialsMarco = [
    { icon: <FaEnvelope size='1.8em' />, info: 'marco.avila@guimark.com', link: 'mailto:marco.avila@guimark.com' },
    { icon: <FaPhone size='1.8em' />, info: '55-1190-7666', link: 'tel:55 1190 7666' },
    { icon: <FaFacebook size='1.8em' />, info: '/guimarkt', link: 'https://www.facebook.com/guimarkt' },
    { icon: <FaInstagram size='1.8em' />, info: '/guimarktq', link: 'https://www.instagram.com/guimarktq' },
    { icon: <FaLinkedin size='1.8em' />, info: '/company/guimark360', link: 'https://www.linkedin.com/company/guimark360' },
    { icon: <FaGlobe size='1.8em' />, info: 'www.guimark.com', link: 'https://www.guimark.com' },
];
export const socialsMarcoAntonio = [
    { icon: <FaEnvelope size='1.8em' />, info: 'marco.avila@guimark.com', link: 'mailto:marco.avila@guimark.com' },
    { icon: <FaPhone size='1.8em' />, info: '221-241-1481', link: 'tel:221 241 1481' },
    { icon: <FaFacebook size='1.8em' />, info: '/guimarkt', link: 'https://www.facebook.com/guimarkt' },
    { icon: <FaInstagram size='1.8em' />, info: '/guimarktq', link: 'https://www.instagram.com/guimarktq' },
    { icon: <FaLinkedin size='1.8em' />, info: '/company/guimark360', link: 'https://www.linkedin.com/company/guimark360' },
    { icon: <FaGlobe size='1.8em' />, info: 'www.guimark.com', link: 'https://www.guimark.com' },
];
export const socialsGabriela = [
    { icon: <FaEnvelope size='1.8em' />, info: 'gabrielamtz@guimark.com', link: 'mailto:gabrielamtz@guimark.com' },
    { icon: <FaPhone size='1.8em' />, info: '55-4290-9100', link: 'tel:55 42 909 100' },
    { icon: <FaFacebook size='1.8em' />, info: '/guimarkt', link: 'https://www.facebook.com/guimarkt' },
    { icon: <FaInstagram size='1.8em' />, info: '/guimarktq', link: 'https://www.instagram.com/guimarktq' },
    { icon: <FaLinkedin size='1.8em' />, info: '/company/guimark360', link: 'https://www.linkedin.com/company/guimark360' },
    { icon: <FaGlobe size='1.8em' />, info: 'www.guimark.com', link: 'https://www.guimark.com' },
];
export const linkOnePage = [
    { to: '/guillermo', text: 'One Page Guillermo Pacheco R' },
    { to: '/guillermo-n', text: 'One Page Guillermo' },
    { to: '/alfonso', text: 'One Page Alfonso' },
    { to: '/carlos', text: 'One Page Carlos' },
    { to: '/luisa', text: 'One Page Luisa' },
    { to: '/marco', text: 'One Page Marco' },
    { to: '/mariana', text: 'One Page Mariana' },
    { to: '/carmen', text: 'One Page Carmen' },
    { to: '/marco-antonio', text: 'One Page Marco Antonio' },
    { to: '/gabriela', text: 'One Page Gabriela Martínez' },
]