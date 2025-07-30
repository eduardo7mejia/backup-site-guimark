import CardServicio from '../../components/ui/CardServicio'
import { dataServicios } from '../../data/dataSectionServices'

export const FullServices = () => {
    return (
        <section className='bg-blue-500 overflow-hidden rounded-3xl h-auto w-full pt-8 pb-8 md:pt-16 md:pb-16 pl-2 pr-2 md:pl-12 md:pr-12 bg-lineTexturas bg-cover bg-fixed relative'>
            <h2 className='text-white pt-4 pb-4 text-4xl md:text-6xl font-semibold' data-aos="fade-up">Elevamos tu crecimiento al siguiente nivel con nuestros servicios personalizados.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-6 pb-6 md:pl-10 md:pr-20">
                {dataServicios.map(servicio => (
                    <CardServicio
                        key={servicio.id}
                        id={servicio.id}
                        title={servicio.title}
                        img={servicio.img}
                        description={servicio.description}
                        isList={servicio.isList}
                    />
                ))}
            </div>
            {/* <div className='absolute hidden md:flex top-0 right-0 h-full items-center'>
                <div className='bg-[#f0f2f4] w-16 h-96 rounded-l-3xl'></div>
            </div>
            <div className='absolute hidden md:flex top-0 left-0 h-full items-center'>
                <div className='bg-[#f0f2f4] w-16 h-96 rounded-r-3xl'></div>
            </div> */}
        </section>

    )
}
