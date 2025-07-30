import { HeaderHero } from '../components/HeaderHero'
import { CardSocials } from '../components/CardSocials'
import { Services } from '../components/Services'
import { Locations } from '../components/Locations'
import { ContactCard } from '../components/ContactCard'
import { Footer } from '../components/Footer'
import { locations, services, socialsCarmen } from '../data/DataLandingPage'
import catalogo_carmen from '../assets/docs/Catalogo_Nuestros_Servicios.pdf'
import imagen_logo from '../assets/images/carmen/imagen_carmen.png'


export const Carmen = () => {
    let name = 'Carmen-Méndez'
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderHero />
            <main className="flex-grow max-w-7xl mx-auto 2xl:max-w-9xl">
                <ContactCard
                    name="Carmen Méndez"
                    title="Planning Manager"
                    imageUrl={imagen_logo}
                    phone="55 1953 0777"
                    email="planeacion@guimark.com"
                    role='Planning Manager'
                    socialProfile="https://guimark.com/"
                    company='Guimark'
                />
                <CardSocials socials={socialsCarmen} />
                <Services services={services} catalogoPdf={catalogo_carmen} namePDF={`Catalogo_Nuestros_Servicios_${name}.pdf`} />
                <Locations locations={locations} />
            </main>
            <Footer />
        </div>
    )
}
