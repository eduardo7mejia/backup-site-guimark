import useScrollWidth from '../../hooks/useScrollWidth';
import { TitleSection } from '../ui/TitleSection';
import baseSection from '../../assets/images/site_web/base_sections.png';
export const HeroServicio = ({ heroImageDesktop, heroImageMobile, heroTitle }) => {
    const { scrollY, isAbove1024px, calcWidth } = useScrollWidth();
    const backgroundImage = isAbove1024px ? heroImageDesktop : heroImageMobile;
    return (
        <section className="relative">
            <div className="flex justify-center items-center md:h-3/4 md:mt-20 2xl:mt-28">
                <h2 className='absolute hidden md:block z-10 left-24 bottom-12 text-orange-50 md:text-6xl font-bold uppercase'>{heroTitle}</h2>
                <div
                    className={`relative h-[50vh] w-full md:h-[30rem] md:w-auto overflow-hidden transition-all ${scrollY >= 100 ? '' : 'md:rounded-3xl'}`}
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: '100%',
                        backgroundPosition: 'center',
                        width: isAbove1024px ? calcWidth() : '100%',
                        backgroundAttachment: 'fixed',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <img
                        src={baseSection}
                        alt="Base Section"
                        className="absolute hidden md:block top-0 left-0 w-full h-full object-fill z-10"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-orange-600 to-slate-50/0"></div>
                    <TitleSection title='Servicios' rightDesktop='md:right-[6%] 2xl:right-[8%]' />
                </div>
            </div>
        </section>
    )
}
