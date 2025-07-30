import { HeaderHero } from '../components/HeaderHero';
import { CardSocials } from '../components/CardSocials';
import { Services } from '../components/Services';
import { Locations } from '../components/Locations';
import { ContactCard } from '../components/ContactCard';
import { Footer } from '../components/Footer';
import { locations, services, socialsGabriela } from '../data/DataLandingPage';
import catalogo_gabriela from '../assets/docs/Catalogo_Nuestros_Servicios.pdf';
import imagen_logo from '../assets/images/gabriela/gabriela.jpeg';

export const GabrielaMtz = () => {
    let name = 'Gabriela-Martínez'
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderHero />
            <main className="flex-grow max-w-7xl mx-auto 2xl:max-w-9xl">
                <ContactCard
                    name="Gabriela Martínez"
                    title="Commercial advisor"
                    imageUrl={imagen_logo}
                    phone="55 4290 9100"
                    email="gabrielamtz@guimark.com"
                    role='Commercial advisor'
                    socialProfile="https://guimark.com/"
                    company='Guimark'
                />
                <CardSocials socials={socialsGabriela} />
                <Services services={services} catalogoPdf={catalogo_gabriela} namePDF={`Catalogo_Nuestros_Servicios_${name}.pdf`} />
                <Locations locations={locations} />
            </main>
            <Footer />
        </div>
    );
};