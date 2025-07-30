import { HeaderHero } from '../components/HeaderHero'
import { CardSocials } from '../components/CardSocials'
import { Services } from '../components/Services'
import { Locations } from '../components/Locations'
import { ContactCard } from '../components/ContactCard'
import { Footer } from '../components/Footer'
import { locations, services, socialsAlfonso, socialsGuillermo } from '../data/DataLandingPage'
import catalogo_alfonso from '../assets/docs/Catalogo_Nuestros_Servicios.pdf'
import imagen_logo from '../assets/images/alfonso/imagen_alfonso.png'


export const Alfonso = () => {
    let name = 'Alfonso-Garciá'
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderHero />
            <main className="flex-grow max-w-7xl mx-auto 2xl:max-w-9xl">
                <ContactCard
                    name="Alfonso García"
                    title="Prepress"
                    imageUrl={imagen_logo}
                    phone="55 2269 5344"
                    email="preprensa@guimark.com"
                    role='Prepress'
                    socialProfile="https://guimark.com/"
                    company='Guimark'
                />
                <CardSocials socials={socialsAlfonso} />
                <Services services={services} catalogoPdf={catalogo_alfonso} namePDF={`Catalogo_Nuestros_Servicios_${name}.pdf`} />
                <Locations locations={locations} />
            </main>
            <Footer />
        </div>
    )
}
