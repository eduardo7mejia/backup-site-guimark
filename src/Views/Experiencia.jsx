import { TbBriefcaseFilled } from "react-icons/tb";
import { IoIosArrowDropupCircle } from "react-icons/io";
import teamImage from '../assets/images/site_web/experiencia/team.png';
import elements from '../assets/images/site_web/experiencia/elements.png';
import celCircle from '../assets/images/site_web/experiencia/celCircle.png';

export const Experiencia = () => {
    return (
        <section className="2xl:my-8 md:flex flex-shrink-0 justify-center w-full items-center 2xl:py-4 px-4 bg-white" aria-labelledby="experience-heading">
            <div className="w-full relative grid items-center content-center justify-center lg:h-[40rem] lg:max-h-[40rem] py-8 md:py-0">
                <img src={elements} className="absolute w-40 md:w-80 h-auto top-0 md:top-4 2xl:left-16 animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in animate-normal animate-fill-forwards" data-aos="fade-up" alt="Elementos decorativos" />
                <div className="bg-teal-500 w-72 md:w-[28rem] h-auto md:h-[28rem] max-w-full z-[1] overflow-hidden" data-aos="fade-up">
                    <img src={teamImage} className="w-full h-auto max-w-full z-[1] hover:scale-110 transition-all duration-300 ease-in hover:rotate-6" alt="Imagen del equipo" />
                </div>
                <img src={celCircle} className="absolute w-28 md:w-48 h-auto top-6 right-0 md:top-12 2xl:top-[4rem] 2xl:right-24 z-[2]" alt="Círculo decorativo" data-aos="fade-up" data-aos-delay={`200`} />
                <div className="bg-white absolute w-auto p-2 z-[2] left-1 bottom-2 md:left-0 2xl:left-24 md:bottom-10 rounded-md" data-aos="fade-up" data-aos-delay={`200`}>
                    <div className="grid items-center justify-center border border-orange-600 py-2 px-8 font-bold">
                        <p className="flex items-center justify-center gap-2 text-center text-orange-600 md:text-6xl">
                            <TbBriefcaseFilled /> <span className="text-black">+25</span>
                        </p>
                        <p className="text-black text-xl uppercase">Años de experiencia</p>
                    </div>
                </div>
            </div>
            <div className="w-full relative grid gap-3 lg:h-[40rem] lg:max-h-[40rem] items-center content-center mt-4 md:mt-0 px-2 md:px-0">
                <h2 id="experience-heading" className="text-lg md:text-2xl 2xl:text-4xl  font-bold uppercase" data-aos="fade-up">
                    El poder de la creatividad; <span className="block">Impulsando el éxito de tu negocio</span>
                </h2>
                <p className="text-base md:text-xl font-medium text-zinc-500" data-aos="fade-up" data-aos-delay={`200`}>
                    En nuestra Agencia de Publicidad, la calidad es nuestro estándar y el servicio al cliente nuestra pasión.
                    Cada proyecto es un testimonio de nuestro compromiso con la excelencia.
                </p>
                <div className="flex items-center gap-6 px-2 md:px-6 md:mt-6" data-aos="fade-up" data-aos-delay={`200`}>
                    <p className="text-4xl md:text-6xl font-bold text-orange-600">25+</p>
                    <p className="text-base md:text-xl font-medium text-zinc-500">
                        Doce años de innovación en impresión y publicidad, construyendo marcas que perduran.
                    </p>
                </div>
                <div role="separator" aria-orientation="horizontal" className="flex items-center px-6" data-aos="fade-up" data-aos-delay={`300`}>
                    <div className="flex-grow border-t border-orange-600" aria-hidden="true"></div>
                    <div className="mx-4">
                        <IoIosArrowDropupCircle className="text-orange-600 text-4xl" aria-label="Icono de flecha hacia arriba" />
                    </div>
                </div>
            </div>
        </section>
    );
};
