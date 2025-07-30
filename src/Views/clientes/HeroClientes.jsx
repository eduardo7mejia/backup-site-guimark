import React from 'react'
import { dataClientes } from '../../data/dataHome'

export const HeroClientes = () => {
    return (
        <section className='relative'>
            <div className='flex flex-col md:h-3/4 md:mt-20 2xl:mt-12'>
                <h2 className='text-3xl md:text-7xl font-bold text-orange-500'
                    data-aos="fade-up"
                >Nuestros <span className='md:block text-blue-500'>Clientes</span></h2>
                <p className='mt-4 text-gray-500 text-base md:text-3xl'
                    data-aos="fade-up" data-aos-delay={`100`}
                >En Guimark todos nuestros clientes son importantes, brindamos atención personalizada y a la medida de cada proyecto, los logros de nuestros clientes, también son nuestros logros.</p>
            </div>
        </section>
    )
}
