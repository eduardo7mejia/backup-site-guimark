import { HeaderHero } from '../components/HeaderHero'
import { CardSocials } from '../components/CardSocials'
import { Services } from '../components/Services'
import { Locations } from '../components/Locations'
import { ContactCard } from '../components/ContactCard'
import { Footer } from '../components/Footer'
import { locations, services,socialsLuisa } from '../data/DataLandingPage'
import catalogo_luisa from '../assets/docs/Catalogo_Nuestros_Servicios.pdf'
import imagen_logo from '../assets/images/luisa/imagen_luisa.png'


export const Luisa = () => {
    let name = 'M-Luisa_Camacho'
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderHero />
            <main className="flex-grow max-w-7xl mx-auto 2xl:max-w-9xl">
                <ContactCard
                    name="M. Luisa Camacho"
                    title="Foreign Sales"
                    imageUrl={imagen_logo}
                    phone="222 460 7600"
                    email="luisa.camacho@guimark.com"
                    role='Foreign Sales'
                    socialProfile="https://guimark.com/"
                    company='Guimark'
                />
                <CardSocials socials={socialsLuisa} />
                <Services services={services} catalogoPdf={catalogo_luisa} namePDF={`Catalogo_Nuestros_Servicios_${name}.pdf`} />
                <Locations locations={locations} />
            </main>
            <Footer />
        </div>
    )
}
