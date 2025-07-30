import imageFooter from '../assets/images/site_web/icons/icon-white.png';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full py-5 md:py-2 px-3 md:px-10 text-white h-72 grid relative overflow-hidden bg-none my-6">
            <div className="bg-linesFooter bg-100-100 w-full bg-blue-500 rounded-3xl relative overflow-hidden">
                <div className="w-full max-w-[90%] mx-auto h-[70%] grid md:flex gap-0 md:gap-6 items-center justify-normal">
                    <div className="flex items-center justify-center md:justify-around gap-4 w-full">
                        <img className="w-14 md:w-24 h-auto" src={imageFooter} alt="Footer Icon" />
                        <p className="md:text-3xl 2xl:text-5xl">Estamos ansiosos <span className="block font-bold"><span className="font-normal">de</span> trabajar contigo</span></p>
                    </div>
                    <address className="grid items-center justify-center md:justify-end w-full text-center md:text-left not-italic">
                        <p className="md:text-xl 2xl:text-2xl font-bold">Dirección: <span className="font-normal md:text-base 2xl:text-xl">Carolina 98-101 Col. Ciudad de los Deportes, Alcaldía Benito Juárez, C.P. 02710 CDMX</span></p>
                        <p className="md:text-xl 2xl:text-2xl font-bold">Teléfono: <span className="font-normal md:text-base 2xl:text-xl"><a href="tel:+525555632257">(55) 556-32257</a></span></p>
                        <p className="md:text-xl 2xl:text-2xl font-bold">Email: <span className="font-normal md:text-base 2xl:text-xl"><a href="mailto:ventas@guimark.com">ventas@guimark.com</a></span></p>
                    </address>
                </div>
                <div className="absolute bg-blue-500 w-[15%] md:w-[30%] h-20 -bottom-[0] md:-bottom-[0.6%] 2xl:-bottom-[0.5%] left-0 rounded-3xl z-[2]"></div>
                <div className="absolute bg-blue-500 w-[15%] md:w-[30%] h-20 -bottom-[0] md:-bottom-[0.6%] 2xl:-bottom-[0.5%] right-0 rounded-3xl z-[2]"></div>
                <div className="bg-[#f0f2f4] w-14 h-5 md:h-10 absolute left-[10%] md:left-[28%] bottom-0"></div>
                <div className="bg-[#f0f2f4] w-14 h-5 md:h-10 absolute right-[10%] md:right-[28%] bottom-0"></div>
                <div className="absolute w-[70%] md:w-[40%] bg-[#f0f2f4] h-12 md:h-20 left-1/2 transform -translate-x-1/2 -bottom-1 md:bottom-0 rounded-t-3xl text-slate-500 text-xs md:text-lg font-medium text-center grid items-center md:items-end">
                    <p>&copy; {currentYear} Guimark. <span className="block md:inline">Todos los derechos reservados.</span></p>
                </div>
            </div>
        </footer>
    );
};
