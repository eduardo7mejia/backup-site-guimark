const CardServicio = ({ id, title, img, description, isList }) => {
    const items = description.split(', ');
    const isFlex = items.length > 3;

    return (
        <section className="cardContainer">
            <article className="grid md:flex rounded-lg md:p-8 md:h-64 relative p-4transform transition-all duration-3000 ease-in hover:shadow-lg shadow-blue-100"
            data-aos="fade-up" data-aos-delay={`${id}00`}
            >
                <figure className={`md:w-1/6 flex md:justify-start items-start mb-4 md:mb-0`}>
                    <img src={img} alt={`Imagen representativa de ${title}`} className="w-16 h-16 object-contain" />
                </figure>
                <div className={`md:w-5/6 text-left relative grid pb-4 text-white`}>
                    <figcaption>
                        <h3 className="text-2xl 2xl:text-3xl font-semibold mb-2 uppercase">{title}</h3>
                    </figcaption>
                    {isList ? (
                        <ul className={`md:text-base 2xl:text-xl ${isFlex ? 'grid md:grid-cols-2 gap-2' : 'grid'}`}>
                            {items.map((item, index) => (
                                <li key={index} className="list-inside list-none">{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className=" md:text-base 2xl:text-xl mb-6">{description}</p>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 border-t border-white" aria-hidden="true"></div>
                </div>
            </article>
        </section>
    );
};

export default CardServicio;
