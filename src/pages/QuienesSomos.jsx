import { ContenidoPrincipal } from '../components/ContenidoPrincipal'
import { BentoGuimark } from '../Views/quieneSomos/BentoGuimark'
import { HeroQuienes } from '../Views/quieneSomos/HeroQuienes'
import { NuestraHistoria } from '../Views/quieneSomos/NuestraHistoria'

export const QuienesSomos = () => {
    return (
        <ContenidoPrincipal>
            <>
                <HeroQuienes />
                <main className='w-full py-5 md:py-2 px-3 md:px-10 mt-8 mb-8'>
                    <NuestraHistoria />
                    <BentoGuimark />
                </main>

            </>
        </ContenidoPrincipal>
    )
}
