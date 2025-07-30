import React from 'react'
import { HeroServicio } from './HeroServicio'
import { ContenidoServicio } from './ContenidoServicio'
import { ContenidoPrincipal } from '../ContenidoPrincipal'

export const ServicioInfo = ({ heroTitle, heroImageMobile, heroImageDesktop, srcVideo, children }) => {
    return (
        <ContenidoPrincipal>
            <HeroServicio heroTitle={heroTitle} heroImageMobile={heroImageMobile} heroImageDesktop={heroImageDesktop} />
            <main className='w-full py-5 md:py-2 px-3 md:px-10 mt-0 '>
                <ContenidoServicio srcVideo={srcVideo} children={children} />
            </main>
        </ContenidoPrincipal>
    )
}
