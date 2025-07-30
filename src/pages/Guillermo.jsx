import React from 'react'
import { HeaderHero } from '../components/HeaderHero'
import { CardSocials } from '../components/CardSocials'
import { Services } from '../components/Services'
import { Locations } from '../components/Locations'
import { ContactCard } from '../components/ContactCard'
import { Footer } from '../components/Footer'
import { locations, services, socialsGuillermo } from '../data/DataLandingPage'
import catalogo_guillermo from '../assets/docs/Catalogo_Nuestros_Servicios.pdf'
import imagen_logo from '../assets/images/guillermo/imagen_guillermo.png'


export const Guillermo = () => {
    let name = 'Guillermo-Pacheco-R'
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderHero />
            <main className="flex-grow max-w-7xl mx-auto 2xl:max-w-9xl">
                <ContactCard
                    name="Guillermo Pacheco R."
                    title="Sales Manager"
                    imageUrl={imagen_logo}
                    phone="55 5917 8894"
                    email="g.pachecoramirez@guimark.com"
                    role='Sales Manager'
                    socialProfile="https://guimark.com/"
                    company='Guimark'
                />
                <CardSocials socials={socialsGuillermo} />
                <Services services={services} catalogoPdf={catalogo_guillermo} namePDF={`Catalogo_Nuestros_Servicios_${name}.pdf`} />
                <Locations locations={locations} />
            </main>
            <Footer />
        </div>
    )
}
