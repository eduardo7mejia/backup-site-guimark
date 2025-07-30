import React from 'react'
import { HeroNosotros } from '../Views/nosotros/HeroNosotros'
import { Testimonios } from '../Views/nosotros/Testimonios'
import { ContenidoPrincipal } from '../components/ContenidoPrincipal'
import { TestimoniosPersonalGuimark } from '../Views/nosotros/TestimoniosPersonalGuimark'

export const Nosotros = () => {
    return (
        <ContenidoPrincipal>
            <div className='w-full py-5 md:py-2 px-3 md:px-10 mt-16 md:mt-28 mb-8'>
                <HeroNosotros />
                <TestimoniosPersonalGuimark />
            </div>
        </ContenidoPrincipal>
    )
}
