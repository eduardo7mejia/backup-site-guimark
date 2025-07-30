import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import colaborador_1 from '../assets/images/site_web/equipo/MEMO.png'
import colaborador_2 from '../assets/images/site_web/equipo/CARMEN.png'
import colaborador_3 from '../assets/images/site_web/equipo/MARIANA.png'
import colaborador_4 from '../assets/images/site_web/equipo/ALFONSO-GARCIA.png'
import colaborador_5 from '../assets/images/site_web/equipo/GUILLERMO.png'
import colaborador_6 from '../assets/images/site_web/equipo/CARLOS.png'
import colaborador_7 from '../assets/images/site_web/equipo/MARTHA-VIANEY.png'
import colaborador_8 from '../assets/images/site_web/equipo/MARCO.png'
import colaborador_9 from '../assets/images/site_web/equipo/LUISA-CAMACHO.png'
import colaborador_10 from '../assets/images/site_web/equipo/GABRIELA.png'
import colaborador_11 from '../assets/images/site_web/equipo/LALO.png'

export const dataEquipo = [
    {
        id: 1,
        nombre: "Guillermo Pacheco N.",
        puesto: "Managing Director",
        image: colaborador_1,
        redesSociales: {
            mail: { icon: <MdMail size={24} />, url: 'mailto:guillermo.pacheco@guimark.com' },
            instagram: { icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/guimarktq/' },
            linkedin: { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/company/guimark360' },
        },
        mt: ''
    },
    {
        id: 2,
        nombre: "Carmen Méndez.",
        puesto: "Planning Manager",
        image: colaborador_2,
        redesSociales: {
            mail: { icon: <MdMail size={24} />, url: 'mailto:planeacion@guimark.com' },
            instagram: { icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/guimarktq/' },
            linkedin: { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/company/guimark360' },
        },
        mt: 'mt-16'
    },
    {
        id: 3,
        nombre: "Mariana Bustamante.",
        puesto: "Administrador",
        image: colaborador_3,
        redesSociales: {
            mail: { icon: <MdMail size={24} />, url: 'mailto:admon@guimark.com' },
            instagram: { icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/guimarktq/' },
            linkedin: { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/company/guimark360' },
        },
        mt: ''
    },
    {
        id: 4,
        nombre: "Guillermo Pacheco R.",
        puesto: "Sales Manager",
        image: colaborador_5,
        redesSociales: {
            mail: { icon: <MdMail size={24} />, url: 'mailto:g.pachecoramirez@guimark.com' },
            instagram: { icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/guimarktq/' },
            linkedin: { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/company/guimark360' },
        },
        mt: ''
    },
    {
        id: 5,
        nombre: "Ma. Luisa Camacho.",
        puesto: "Foreign Sales",
        image: colaborador_9,
        redesSociales: {
            mail: { icon: <MdMail size={24} />, url: 'mailto:luisa.camacho@guimark.com' },
            instagram: { icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/guimarktq/' },
            linkedin: { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/company/guimark360' },
        },
        mt: 'mt-16'
    },
    {
        id: 6,
        nombre: "Marco Ávila.",
        puesto: "Sales Executive",
        image: colaborador_8,
        redesSociales: {
            mail: { icon: <MdMail size={24} />, url: 'mailto:marco.avila@guimark.com' },
            instagram: { icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/guimarktq/' },
            linkedin: { icon: <FaLinkedin size={24} />, url: '#https://www.linkedin.com/company/guimark360' },
        },
        mt: ''
    },
    {
        id: 7,
        nombre: "Carlos Gutierrez.",
        puesto: "Chief Marketing Officer",
        image: colaborador_6,
        redesSociales: {
            mail: { icon: <MdMail size={24} />, url: 'mailto:c.gutierrez@guimark.com' },
            instagram: { icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/guimarktq/' },
            linkedin: { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/company/guimark360' },
        },
        mt: ''

    },
    {
        id: 8,
        nombre: "Alfonso García.",
        puesto: "Prepress",
        image: colaborador_4,
        redesSociales: {
            mail: { icon: <MdMail size={24} />, url: 'mailto:preprensa@guimark.com' },
            instagram: { icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/guimarktq/' },
            linkedin: { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/company/guimark360' },
        },
        mt: 'mt-16'
    },
    {
        id: 9,
        nombre: "Eduardo Cabrera",
        puesto: "Diseñador Gráfico",
        image: colaborador_11,
        redesSociales: {
            mail: { icon: <MdMail size={24} />, url: 'mailto:luisa.camacho@guimark.com' },
            instagram: { icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/guimarktq/' },
            linkedin: { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/company/guimark360' },
        },
        mt: ''
    },
]
