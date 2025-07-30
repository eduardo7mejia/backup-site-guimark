import React from 'react'
import { HeroClientes } from '../Views/clientes/HeroClientes'
import { ClientsGrid } from '../Views/clientes/ClientsGrid'
import { ContenidoPrincipal } from '../components/ContenidoPrincipal'

export const NuestrosClientes = () => {
    return (
        <ContenidoPrincipal>
            <main className='w-full py-5 md:py-2 px-3 md:px-10 mt-16 md:mt-8 mb-8'>
                <HeroClientes />
                <ClientsGrid />
            </main>
        </ContenidoPrincipal>
    )
}
