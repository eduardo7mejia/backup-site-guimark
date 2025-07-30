import React, { useEffect, useState } from 'react';
import { dataNavbar } from '../data/navbar';
import logoGuimark from '../assets/images/site_web/logo-guimark.gif';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        }
    }, []);

    useEffect(() => {
        closeMenu();
    }, [location]);

    return (
        <header className="flex justify-center md:py-5">
            <nav className={`${navbar ? 'bg-white shadow-lg' : 'bg-white '} md:rounded-3xl fixed transition-all md:w-calc-100-minus-80 flex items-center w-full md:px-4 md:py-2 z-50`}>
                <div className="w-full flex flex-wrap md:flex-nowrap mx-auto items-center justify-between p-4 md:p-2 2xl:p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logoGuimark} className="h-auto w-28 md:w-44" alt="Guimark Logo" />
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            onClick={toggleMenu}
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm transition-colors text-orange-600 rounded-lg md:hidden hover:bg-orange-600 hover:text-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            aria-controls="navbar-sticky"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-end ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:order-1`} id="navbar-sticky">
                        <ul className="w-full md:w-10/12 2xl:w-9/12 flex flex-col justify-around p-4 md:p-0 mt-4 border border-orange-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 gap-3 md:gap-0">
                            {dataNavbar.map(({ id, link, name }) => (
                                <li key={id}>
                                    <Link
                                        to={link}
                                        className={`block 2xl:text-xl md:text-base py-2 px-4 transition-colors duration-300 ease-linear rounded-full hover:text-zinc-800 ${location.pathname === link ? 'font-bold bg-orange-500 !text-white hover:text-white' : 'bg-white hover:bg-zinc-100 text-zinc-500'}`}
                                        onClick={closeMenu}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
