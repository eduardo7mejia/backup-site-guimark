import iconAgency from '../../assets/images/site_web/icons/icon.png'
import family from '../../assets/images/site_web/quienes-somos/main-content.png'

export const NuestraHistoria = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2 p-4 grid">
                <div className='grid items-start justify-center'>
                    <img src={iconAgency} className='h-auto w-40 md:w-auto max-w-full' data-aos="fade-up" />
                </div>
                <div className=''>
                    <h2 className='text-3xl md:text-6xl text-blue-500 uppercase font-bold' data-aos="fade-up">Nuestra <span className='md:block'>Historia</span></h2>
                    <p className='text-base md:text-xl text-slate-600 text-justify' data-aos="fade-up" data-aos-delay={`100`}>
                        Con Tres Generaciones de Experiencia en las Artes Gráficas, la calidad en nuestros servicios, la honestidad y el Servicio al Cliente nos han permitido permanecer vigentes en el medio y con el interés de mantenernos a la vanguardia hemos evolucionado y nos convertimos en una Agencia de Publicidad que su principal objetivo es brindarte un Servicio Integral para tus proyectos, integrando el servicio online y las nuevas tendencias en el ámbito publicitario.
                    </p>
                </div>
            </div>
            <div className="md:col-span-3 p-4 grid">
                <div className='grid'>
                    <div className='grid justify-start text-left w-full uppercase' data-aos="fade-up" >
                        <h2 className="text-4xl md:text-7xl text-orange-500 font-medium">AGENCIA DIGITAL</h2>
                        <p className="text-3xl text-blue-500 md:text-7xl font-bold">LA RESPUESTA <span className='md:block'>A TUS IDEAS</span></p>
                    </div>
                    <div className='grid justify-center items-center'>
                        <img src={family} className='h-auto max-w-full' data-aos="fade-up" data-aos-delay={`100`} />
                    </div>
                </div>
            </div>
        </div>
    )
}
