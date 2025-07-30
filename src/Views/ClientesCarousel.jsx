import React from 'react'
import { InfinityCarousel } from '../components/carousel/InfinityCarousel'
import { dataClientes } from '../data/dataHome'

export const ClientesCarousel = () => {
    return (
        <section className='flex justify-center items-center w-full max-h-64 ' data-aos="fade-up" data-aos-delay={`100`}>
            <InfinityCarousel slide={dataClientes} />
        </section>
    )
}
