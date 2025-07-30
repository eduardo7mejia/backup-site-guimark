import React from 'react';
import { dataEquipo } from '../../data/dataEquipo';
import { CardEquipo } from '../../components/ui/CardEquipo';

export const HeroNosotros = () => {
    return (
        <section>
            <h2 className='text-bold uppercase text-left md:text-6xl font-bold text-orange-400'
                data-aos="fade-up"
            >Conoce a <span className='md:block text-blue-500'>nuestro equipo</span></h2>
            <div className='w-full grid justify-items-center'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-7xl md:mt-8 px-10'>
                    {
                        dataEquipo.map((item, index) => (
                            <CardEquipo
                                key={index}
                                id={item.id}
                                mt={item.mt}
                                name={item.nombre}
                                puesto={item.puesto}
                                image={item.image}
                                redesSociales={item.redesSociales}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
