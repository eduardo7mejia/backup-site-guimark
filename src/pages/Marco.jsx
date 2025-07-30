import { HeaderHero } from '../components/HeaderHero'
import { CardSocials } from '../components/CardSocials'
import { Services } from '../components/Services'
import { Locations } from '../components/Locations'
import { ContactCard } from '../components/ContactCard'
import { Footer } from '../components/Footer'
import { locations, services, socialsMarco } from '../data/DataLandingPage'
import catalogo_marco from '../assets/docs/Catalogo_Nuestros_Servicios.pdf'
import imagen_logo from '../assets/images/marco/imagen_marco.png'


export const Marco = () => {
    let name = 'Marco-Avila'
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderHero />
            <main className="flex-grow max-w-7xl mx-auto 2xl:max-w-9xl">
                <ContactCard
                    name="Marco Avila"
                    title="Sales Executive"
                    imageUrl={imagen_logo}
                    phone="55 1190 7666"
                    email="marco.avila@guimark.com"
                    role='Sales Executive'
                    socialProfile="https://guimark.com/"
                    company='Guimark'
                />
                <CardSocials socials={socialsMarco} />
                <Services services={services} catalogoPdf={catalogo_marco} namePDF={`Catalogo_Nuestros_Servicios_${name}.pdf`} />
                <Locations locations={locations} />
            </main>
            <Footer />
        </div>
    )
}
