
import EmblaCarousel from "../../components/carousel/EmblaCarousel";
import { dataContent } from "../../data/dataSectionServices";


export const BentoCard = () => {
    const OPTIONS = { dragFree: true, loop: true }
    return (
        <div className="mt-4">
            <h2 className="uppercase text-2xl 2xl:text-6xl text-orange-500 font-semibold">Beneficios</h2>
            <div className="hidden md:grid grid-cols-1 grid-rows-4 md:grid-rows-3 md:grid-cols-3 gap-2 mt-4 mb-4 h-auto md:h-[50rem]">
                {
                    dataContent.map(({ id, image, title, description, classBento, imageCard }) => (
                        <div key={id} className={`relative rounded-3xl overflow-hidden  ${classBento}`} data-index={id}
                            data-aos="fade-up" data-aos-delay={`${id}00`}
                        >
                            <img src={image} alt={title} className="w-full h-full object-fill" />
                            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-orange-600 to-slate-50/0 z-0">
                                <h3 className="text-white text-4xl md:text-4xl font-semibold uppercase">{title}</h3>
                                <p className="text-white w-9/12 leading-tight 2xl:text-2xl ">{description}</p>
                            </div>
                            <img
                                src={imageCard}
                                alt="Base Section"
                                className="absolute top-0 left-0 w-full h-auto max-h-full object-fill z-10"
                            />
                        </div>
                    ))
                }
            </div>
            <div className="md:hidden mt-5">
                <EmblaCarousel slides={dataContent} options={OPTIONS} />
            </div>
        </div>
    );
};
