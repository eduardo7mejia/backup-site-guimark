import React from 'react'
import { ContenidoPrincipal } from '../components/ContenidoPrincipal'
import { HeroContacto } from '../Views/contacto/HeroContacto'
import { ContactForm } from '../Views/contacto/ContactForm'

export const Contacto = () => {
    return (
        <ContenidoPrincipal>
            <HeroContacto />
            <main className='w-full py-5 md:py-2 px-3 md:px-10 mt-8 mb-8'>
                <ContactForm />
            </main>
        </ContenidoPrincipal>
    )
}
