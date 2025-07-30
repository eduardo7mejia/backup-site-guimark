import { Map } from "./ui/Map"


export const Locations = ({ locations }) => {
    return (
        <section className="w-full pt-4 p-4">
            <div className="w-full">
                <h2 className="text-2xl md:text-5xl 2xl:text-6xl font-semibold text-black relative inline-block mb-1" data-aos="fade-up">
                    NUESTRA UBICACIÓN
                    <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-2 w-full bg-orange-500 "></span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full">
                    {locations.map((location, index) => (
                        <div key={index} className="p-4  w-full ">
                            <h3 className="text-xl font-bold md:text-3xl 2xl:text-5xl text-blue-700 uppercase" data-aos="fade-up" data-aos-delay={`${index}00`}>Oficinas {location.city}</h3>
                            <p className="font-bold text-slate-800 text-lg 2xl:text-2xl" data-aos="fade-up" data-aos-delay={`${index}00`}>Dirección: <span className="font-medium text-base 2xl:text-xl">{location.address}</span></p>
                            <p className="font-bold text-slate-800 text-lg 2xl:text-2xl" data-aos="fade-up" data-aos-delay={`${index}00`}>Teléfono: <span className="font-medium text-base 2xl:text-xl">{location.phone}</span></p>
                            <p className="font-bold text-slate-800 text-lg 2xl:text-2xl" data-aos="fade-up" data-aos-delay={`${index}00`}>Email: <span className="font-medium text-base 2xl:text-xl">{location.email}</span></p>
                            <Map src={location.urlMapa} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
