import useScrollWidth from '../../hooks/useScrollWidth';
import baseHero from '../../assets/images/site_web/base_sections.png';
import { TitleSection } from '../../components/ui/TitleSection';
import { TitleHero } from '../../components/TitleHero';

export const HeroContacto = () => {
    const { scrollY, isAbove1024px, calcWidth } = useScrollWidth();
    return (
        <section className="relative">
            <div className="flex justify-center items-center md:h-3/4 md:mt-20 2xl:mt-28">
                <div
                    className={`relative h-[50vh] w-full md:h-[30rem] md:w-auto overflow-hidden bg-heroContactMobile md:bg-heroContactDesktop bg-cover bg-bottom md:bg-100-100 md:bg-center bg-no-repeat transition-all ${scrollY >= 100 ? '' : 'md:rounded-3xl'}`}
                    style={isAbove1024px ? { width: calcWidth() } : {}}
                >
                    <img
                        src={baseHero}
                        alt="Base Section"
                        className="absolute hidden md:block top-0 left-0 w-full h-full object-fill z-10"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-orange-600 to-slate-50/0"></div>
                    <TitleHero title='Contacto' />
                </div>
            </div>
        </section>
    )
}
