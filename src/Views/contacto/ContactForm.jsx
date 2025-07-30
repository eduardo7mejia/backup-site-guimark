import { MdSend } from "react-icons/md";
import { FormContact } from "./FormContact";

export const ContactForm = () => {
    return (
        <div className="container mx-auto grid md:grid-cols-2 gap-2">
            <div className="text-left grid items-center px-4 md:px-0">
                <p data-aos="fade-up" className="text-base md:text-xl 2xl:text-2xl font-medium mb-1">Estamos ansiosos de trabajar contigo.</p>
                <h3 data-aos="fade-up" className="text-3xl md:text-5xl 2xl:text-6xl font-bold text-orange-600 leading-tight tracking-wide">
                    SIEMPRE ESTAMOS <span className="text-blue-800 grid">LISTOS PARA AYUDARTE </span>
                    <span className="text-orange-600">Y RESPONDER </span>
                    <span className="grid text-blue-800">TUS PREGUNTAS.</span>
                </h3>
                <div className="md:my-6">
                    <h2 data-aos="fade-up" className="text-xl 2xl:text-2xl font-semibold">DIRECCIÓN</h2>
                    <p data-aos="fade-up" className="text-base 2xl:text-lg">Carolina No. 98 Int. 101, Col. Ciudad de los Deportes Del. Benito Juárez, C.P. 03710, CDMX, México</p>
                </div>
                <div data-aos="fade-up" className="md:flex mb-6 md:gap-24 ">
                    <div className="mr-4">
                        <h2 className="text-xl 2xl:text-2xl font-semibold">TELÉFONO</h2>
                        <p className="text-base 2xl:text-lg">5555632257</p>
                    </div>
                    <div className="">
                        <h2 className="text-xl 2xl:text-2xl font-semibold">E-MAIL</h2>
                        <p className="text-base 2xl:text-lg"> ventas@guimark.com</p>
                    </div>
                </div>
            </div>
            <FormContact />
        </div>
    );
};
