import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import baseSection from '../assets/images/site_web/base_sections.png'
import { Navbar } from '../components/Navbar';
import { useMediaQuery } from 'react-responsive';
import { TitleSection } from '../components/ui/TitleSection';
export const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0);
    const isAbove1024px = useMediaQuery({ query: '(min-width: 1024px)' });

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calcWidth = () => {
        const maxScroll = 100;
        const initialOffset = 80;
        const currentOffset = Math.max(0, initialOffset - (scrollY / maxScroll) * initialOffset);
        return `calc(100% - ${currentOffset}px)`;
    };

    return (
        <main className="w-full md:h-screen max-h-screen relative">
            <section className="flex justify-center items-center md:h-3/4 md:mt-20 2xl:mt-28">
                <div
                    className={`relative h-screen w-full md:h-full md:w-auto overflow-hidden bg-mobile md:bg-desktop bg-cover bg-center bg-no-repeat transition-all ${scrollY >= 100 ? '' : 'md:rounded-3xl'}`}
                    style={isAbove1024px ? { width: calcWidth() } : {}}
                >
                    <div className=" w-full h-full flex justify-center items-center z-10 relative">
                        <div className="w-full md:w-auto md:px-20 px-6 gap-2 md:gap-4 text-white text-left">
                            <h1 className="text-3xl md:text-6xl 2xl:text-8xl font-bold mb-4" data-aos="fade-up">
                                La Mejor <span className="text-orange-500">Agencia</span> <span className="block">de Publicidad</span>
                            </h1>
                            <p className="md:text-4xl font-medium mb-2" data-aos="fade-up" data-aos-delay="100">Haz crecer tu negocio</p>
                            <p className="md:text-2xl font-normal" data-aos="fade-up" data-aos-delay="200">
                                Descubre el poder de tu marca con nuestra agencia de publicidad.{' '}
                                <span className="block">
                                    Desde estrategias innovadoras hasta irresistibles, impulsamos tu presencia digital con creatividad.
                                </span>
                            </p>
                            <Link
                                to="/contacto"
                                data-aos="fade-up" data-aos-delay="300"
                                className='mt-4 z-20 cursor-pointer inline-block max-w-xs text-white border transition-all hover:bg-orange-600 hover:border-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-semibold rounded-lg text-sm md:text-lg hover:text-xl px-5 py-2.5 text-center me-2 mb-2'>
                                Contacta con nosotros
                            </Link>
                        </div>
                    </div>
                    <img
                        src={baseSection}
                        alt="Base Section"
                        className="absolute hidden md:block top-0 left-0 w-full h-full object-fill z-0"
                    />
                    {/* <TitleSection title='Inicio' bottomDesktop='2xlbottom-6'/> */}
                </div>
            </section>
        </main>
    );
};
