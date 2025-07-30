import React from 'react'
import { HeaderHero } from '../components/HeaderHero'
import { CardSocials } from '../components/CardSocials'
import { Services } from '../components/Services'
import { Locations } from '../components/Locations'
import { ContactCard } from '../components/ContactCard'
import { Footer } from '../components/Footer'
import { locations, services, socialsCarlos} from '../data/DataLandingPage'
import catalogo_carlos from '../assets/docs/Catalogo_Nuestros_Servicios.pdf'
import imagen_logo from '../assets/images/carlos/imagen_carlos.png'


export const Carlos = () => {
    let name = 'Carlos-Gutiérrez'
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderHero />
            <main className="flex-grow max-w-7xl mx-auto 2xl:max-w-9xl">
                <ContactCard
                    name="Carlos Gutiérrez"
                    title="Sales Executive"
                    imageUrl={imagen_logo}
                    phone="55 5330 9045"
                    email="c.gutierrez@guimark.com"
                    role='Sales Executive'
                    socialProfile="https://guimark.com/"
                    company='Guimark'
                />
                <CardSocials socials={socialsCarlos} />
                <Services services={services} catalogoPdf={catalogo_carlos} namePDF={`Catalogo_Nuestros_Servicios_${name}.pdf`} />
                <Locations locations={locations} />
            </main>
            <Footer />
        </div>
    )
}
