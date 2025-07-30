import React from 'react'
import { Link } from 'react-router-dom'
import { HeroSection } from '../Views/HeroSection'
import { ServicesBento } from '../Views/ServicesBento'
import { Contenido } from '../Views/Contenido'
import { ClientesCarousel } from '../Views/ClientesCarousel'
import { Navbar } from '../components/Navbar'
import { ContenidoPrincipal } from '../components/ContenidoPrincipal'

export const Inicio = () => {
    return (
        <ContenidoPrincipal>
            <>
                <HeroSection />
                <main className='w-full py-5 md:py-2 px-3 md:px-10 mt-0 bg-white'>
                    <Contenido />
                    <ServicesBento />
                    <ClientesCarousel />
                </main>
            </>
        </ContenidoPrincipal>
    )
}
