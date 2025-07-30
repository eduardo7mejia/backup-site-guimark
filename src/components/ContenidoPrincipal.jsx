import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const ContenidoPrincipal = ({ children }) => {
    return (
        <div className="contenido">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
