import { HeaderHero } from '../components/HeaderHero'
import { CardSocials } from '../components/CardSocials'
import { Services } from '../components/Services'
import { Locations } from '../components/Locations'
import { ContactCard } from '../components/ContactCard'
import { Footer } from '../components/Footer'
import { locations, services, socialsMariana } from '../data/DataLandingPage'
import catalogo_mariana from '../assets/docs/Catalogo_Nuestros_Servicios.pdf'
import imagen_logo from '../assets/images/mariana/imagen_mariana.png'


export const Mariana = () => {
    let name = 'Mariana-Bustamante'
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderHero />
            <main className="flex-grow max-w-7xl mx-auto 2xl:max-w-9xl">
                <ContactCard
                    name="Mariana Bustamante"
                    title="Administrador"
                    imageUrl={imagen_logo}
                    phone="55 5952 3496"
                    email="admon@guimark.com"
                    role='Administrador'
                    socialProfile="https://guimark.com/"
                    company='Guimark'
                />
                <CardSocials socials={socialsMariana} />
                <Services services={services} catalogoPdf={catalogo_mariana} namePDF={`Catalogo_Nuestros_Servicios_${name}.pdf`} />
                <Locations locations={locations} />
            </main>
            <Footer />
        </div>
    )
}
