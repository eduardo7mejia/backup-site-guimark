import React from 'react'
import { HeaderHero } from '../components/HeaderHero'
import { CardSocials } from '../components/CardSocials'
import { Services } from '../components/Services'
import { Locations } from '../components/Locations'
import { ContactCard } from '../components/ContactCard'
import { Footer } from '../components/Footer'
import { locations, services, socialsGuillermoJR } from '../data/DataLandingPage'
import catalogo_guillermoJR from '../assets/docs/Catalogo_Nuestros_Servicios.pdf'
import imagen_logo from '../assets/images/guillermo-jr/imagen_guillermojr.png'


export const GuillermoJR = () => {
    let name = 'Guillermo-Pacheco-N'
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderHero />
            <main className="flex-grow max-w-7xl mx-auto 2xl:max-w-9xl">
                <ContactCard
                    name="Guillermo Pacheco N."
                    title="Managing Director"
                    imageUrl={imagen_logo}
                    phone="55 5563 2257"
                    email="guillermo.pacheco@guimark.com"
                    role='Managing Director'
                    socialProfile="https://guimark.com/"
                    company='Guimark'
                />
                <CardSocials socials={socialsGuillermoJR} />
                <Services services={services} catalogoPdf={catalogo_guillermoJR} namePDF={`Catalogo_Nuestros_Servicios_${name}.pdf`} />
                <Locations locations={locations} />
            </main>
            <Footer />
        </div>
    )
}
