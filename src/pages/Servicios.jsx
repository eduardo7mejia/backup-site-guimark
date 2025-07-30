import { HeroServicios } from '../Views/servicios/HeroServicios';
import { FullServices } from '../Views/servicios/FullServices';
import { BentoCard } from '../Views/servicios/BentoCard';
import { ContenidoPrincipal } from '../components/ContenidoPrincipal';


export const Servicios = () => {
    return (
        <ContenidoPrincipal>
            <>
                <HeroServicios />
                <main className='w-full py-5 md:py-2 px-3 md:px-10 mt-8 mb-8'>
                    <FullServices />
                    <BentoCard />
                </main>
            </>
        </ContenidoPrincipal>
    )
}
