import React from 'react'
import { dataClientes } from '../../data/dataHome'

export const ClientsGrid = () => {
    return (
        <div className=' grid gap-4 mt-4'>
            <h2 className='text-2xl md:text-5xl font-medium text-orange-500 text-center uppercase'
            data-aos="fade-up" data-aos-delay={`100`}
            >Casos de Éxito</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-2 p-2 md:gap-6 md:p-4">
                {
                    dataClientes.map((item) => (
                        <div key={item.id} 
                        data-aos="zoom-in" data-aos-delay={`${item.id}00`}
                        className="group col-span-1 row-span-1 bg-white grid justify-center items-center rounded-md md:rounded-3xl  overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg  transition-all duration-300 ease-in filter grayscale hover:grayscale-0">
                            <img src={item.image} alt={item.title} className="w-40 md:w-72 h-full object-contain transition-all duration-300 ease-in group-hover:scale-105 " />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
