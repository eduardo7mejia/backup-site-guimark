import uno from '../../assets/images/site_web/quienes-somos/1.png';
import dos from '../../assets/images/site_web/quienes-somos/2.png';
import tres from '../../assets/images/site_web/quienes-somos/3.png';
import imageCard from '../../assets/images/site_web/base-verSomos.png';
import onepage from '../../assets/images/site_web/onepage.png';
import ELEARNING from '../../assets/images/site_web/E-LEARNING.png';

export const BentoGuimark = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-4'>
            <div className='row-span-1 md:row-span-2 rounded-3xl overflow-hidden relative h-96 md:h-auto group' data-aos="fade-up" >
                <img src={uno} className='h-full w-full max-w-full object-cover transition-transform duration-500 group-hover:scale-110' alt="" />
                <div className='absolute -left-28 md:-left-5 bottom-32 md:bottom-0 md:w-80 md:h-96 transform -rotate-90 z-10'>
                    <span className='text-[4rem] md:text-[7rem] 2xl:text-[10rem] text-orange-50 text-center uppercase font-bold text-stroke text-transparent'>guimark</span>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-orange-600 to-slate-50/0"></div>
                <img
                    src={imageCard}
                    alt="Base Section"
                    className="absolute top-0 left-0 t-0 w-full h-full hidden md:block z-10"
                />
            </div>
            <div className='col-span-1 md:col-span-4 rounded-3xl overflow-hidden relative h-96 md:h-auto group' data-aos="fade-up" data-aos-delay={`100`}>
                <img src={dos} className='h-full w-full max-w-full object-cover transition-transform duration-500 group-hover:scale-110' alt="" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-orange-600 to-slate-50/0">
                    <div className='md:flex p-2 md:p-10 justify-center items-center gap-4 md:gap-10'>
                        <h2 className='text-4xl md:text-6xl 2xl:text-8xl font-bold text-orange-50'>Nuestra Misión</h2>
                        <p className='text-orange-50 text-base md:text-base 2xl:text-2xl'>
                        Somos un Grupo que brinda Soluciones Integrales en Mercadotecnia y Publicidad Estratégica a través de la Sinergia con personas y empresas Líder en su ámbito, juntos construimos los pilares de una organización sólida que contribuye a la sociedad con mejores oportunidades de negocio, empleos y calidad de vida.
                        </p>
                    </div>
                </div>
                <img
                    src={onepage}
                    alt="Base Section"
                    className="absolute top-0 left-0 t-0 w-full h-full hidden md:block z-10"
                />
            </div>
            <div className='col-span-1 md:col-span-4 md:col-start-2 w-full rounded-3xl overflow-hidden relative h-96 md:h-auto group' data-aos="fade-up" data-aos-delay={`200`}>
                <img src={tres} className='h-full w-full max-w-full object-cover transition-transform duration-500 group-hover:scale-110' alt="" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-orange-600 to-slate-50/0">
                    <div className='md:flex p-2 md:p-10 justify-center items-center gap-4 md:gap-10'>
                        <h2 className='text-4xl md:text-6xl 2xl:text-8xl font-bold text-orange-50'>Nuestra Visión</h2>
                        <p className='text-white text-base md:text-base 2xl:text-2xl'>
                        Ser un Corporativo Internacional Consolidado, Reconocido por su trayectoria de mejora continua y lo procesos de Adaptabilidad e Innovación Tecnológica que asegure a nuestros clientes y socios comerciales las mejores Estrategias de Crecimiento y Solidez.
                        </p>
                    </div>
                </div>
                <img
                    src={ELEARNING}
                    alt="Base Section"
                    className="absolute top-0 left-0 t-0 w-full h-full hidden md:block z-10"
                />
            </div>
        </section>

    )
}
