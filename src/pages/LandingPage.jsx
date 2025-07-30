import logo from '../assets/images/card-avatar.png'
import { HeaderHero } from '../components/HeaderHero'
import { ContactCard } from '../components/ContactCard'
import { Services } from '../components/Services'
import { Footer } from '../components/Footer'
import { Locations } from '../components/Locations'
import { CardSocials } from '../components/CardSocials'
import { locationsGuillermo, servicesGuillermo, socialsGuillermo } from '../data/DataLandingPage'
import cataPDF from '../assets/docs/catalogo.pdf'
export const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderHero />
            <main className="flex-grow max-w-7xl mx-auto 2xl:max-w-9xl">
                <ContactCard
                    name="Guillermo Pacheco N."
                    title="Managing Director"
                    imageUrl={logo}
                    phone="55 5563 2267"
                    email="guillermo.pacheco@guimark.com"
                    role='Director General Role'
                    socialProfile="https://guimark.com/"
                    company='Guimark'
                />
                <CardSocials socials={socialsGuillermo} />
                <Services services={servicesGuillermo} catalogoPdf={cataPDF} />
                <Locations locations={locationsGuillermo} />
            </main>
            <Footer />
        </div>
    )
}
