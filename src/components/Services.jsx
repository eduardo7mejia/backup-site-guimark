import { MdOutlineFileDownload } from 'react-icons/md';
import { ImageCard } from './ui/Image';

export const Services = ({ services, catalogoPdf, namePDF }) => {
    return (
        <section className="w-full p-4" >
            <div className="" data-aos="zoom-in" data-aos-delay='200' >
                <h2 className="text-2xl md:text-5xl 2xl:text-6xl font-semibold text-black relative inline-block mb-1">
                    NUESTROS SERVICIOS
                    <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-2 w-full bg-blue-500 "></span>
                </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4 2xl:mt-8">
                {services.map((service, index) => (
                    <div key={index} data-aos="zoom-in" data-aos-delay={`${index}00`}>
                        <div className="bg-slate-50 overflow-hidden relative w-full h-auto md:h-72 transform hover:scale-95 duration-300 ">
                            <ImageCard src={service.imgSrc} alt={service.title} text={service.title} loading='lazy' />
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full h-32 flex items-center justify-center ' data-aos="zoom-in" data-aos-delay='300'>
                <a href={catalogoPdf} download={namePDF} className="text-white flex items-center gap-2 text-md md:text-3xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase">
                    Descarga nuestro catálogo
                    {<MdOutlineFileDownload />}
                </a>
            </div>
        </section>
    );
};