import testUno from '../../assets/images/site_web/equipo/testimonios/test-memo.png';
import testDos from '../../assets/images/site_web/equipo/testimonios/test-carlos.png';
import testTres from '../../assets/images/site_web/equipo/testimonios/test-carmen.png';
import testCuatro from '../../assets/images/site_web/equipo/testimonios/test-mariana.png';
import testCinco from '../../assets/images/site_web/equipo/testimonios/test-gabriela.png';
import testSeis from '../../assets/images/site_web/equipo/testimonios/test-martha.png';
import testSiete from '../../assets/images/site_web/equipo/testimonios/test-eduardo.png';
import testOcho from '../../assets/images/site_web/equipo/testimonios/test-luisa.png';
import testNueve from '../../assets/images/site_web/equipo/testimonios/test-alfonso.png';
import testDiez from '../../assets/images/site_web/equipo/testimonios/test-guillermo.png';
import testOnce from '../../assets/images/site_web/equipo/testimonios/test-marco.png';
import testDoce from '../../assets/images/site_web/equipo/testimonios/test-luis.png';

import fondoBack from '../../assets/images/site_web/equipo/testimonios/placa-base.png';
import { SliderTestimonios } from '../../components/slider/SliderTestimonios';

export const TestimoniosPersonalGuimark = () => {
    const personas = [
        {
            nombre: "Guillermo Pacheco N.",
            foto: testUno,
            testimonio: "En Guimark me siento como en casa, me ilusiona seguir desarrollando y aprendiendo. Es un honor liderar a este gran equipo de colaboradores y lo más importante para mí es disfrutar y “Trabajar por la satisfacción de nuestros clientes”."
        },
        {
            nombre: "Carlos Gutiérrez",
            foto: testDos,
            testimonio: "En Guimark he tenido la oportunidad de desarrollar capacidades y compartir experiencias con mis compañeros, teniendo así una satisfacción personal de sentirme bien en el presente y progresar para el futuro."
        },
        {
            nombre: "Carmen Méndez",
            foto: testTres,
            testimonio: "Trabajar en Guimark ha sido un reto ya que es una empresa en constante crecimiento con el objetivo de satisfacer las necesidades de los clientes."
        },
        {
            nombre: "Mariana Bustamante",
            foto: testCuatro,
            testimonio: "El mayor reconocimiento de todo esfuerzo y trabajo duro valen la pena vivirlos y más si va acompañado de agradecimiento de formar parte de un equipo de trabajo como lo es Guimark y contribuir con su éxito día a día."
        },
        {
            nombre: "Eduardo Cabrera",
            foto: testSiete,
            testimonio: "Estoy realmente agradecido por formar parte de un equipo tan dinámico y por las oportunidades que GUIMARK me ha brindado. Si estás buscando un lugar donde puedas crecer, aprender y realmente marcar la diferencia, GUIMARK es el lugar adecuado."
        },
        {
            nombre: "Ma. Luisa Camacho",
            foto: testOcho,
            testimonio: "Guimark, más q ser un proyecto empresarial, es un proyecto de vida para mí, pertenecer y colaborar en esta agencia me da mucho orgullo y me llena de satisfacción y entusiasmo cada día. Sus objetivos de innovar a cada momento, nos permiten ofrecer más opciones a todos los que confían en nosotros. Solo me queda decir, ¡Gracias Guimark por todo lo que nos has brindado!"
        },
        {
            nombre: "Alfonso García",
            foto: testNueve,
            testimonio: "Pertenecer a Guimark es una gran experiencia en mi desarrollo profesional y personal, otorgando mis servicios siempre buscando satisfacer las necesidades tanto a clientes internos y externos."
        },
        {
            nombre: "Guillermo Pacheco",
            foto: testDiez,
            testimonio: "Pertenezco a la segunda generación de Guimark y ver el crecimiento en todos los aspectos, la innovación y los logros que se han tenido en esta tercera etapa, es de admirar y sentirme orgulloso de poder seguir colaborando y creciendo como persona y profesionalmente."

        },
        {
            nombre: "Marco Avila",
            foto: testOnce ,
            testimonio: "Trabajar en Guimark ha sido una experiencia única y de logros importantes dando como resultado la satisfacción total de nuestros clientes."
        },
        {
            nombre: "Luis Enrique Diaz",
            foto: testDoce,
            testimonio: "En Guimark, he visto y vivido cómo la agencia se ha sostenido durante 12 años, desde sus inicios, con la visión a futuro de incursionar en proyectos nuevos e innovadores. Aquí se presenta la oportunidad de crecer juntos, brindando al cliente opciones nuevas y frescas que marcan la diferencia."
        }
    ];
    const OPTIONS = { dragFree: true, loop: true }

    return (
        <section className=' mt-8'>
            <h2 data-aos="fade-up" className='text-orange-500 uppercase text-2xl md:text-6xl font-medium'>Testimonios <span className='md:block'>colaboradores <span className='text-blue-600 font-bold'>guimark</span></span> </h2>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 justify-center items-center gap-4 md:gap-10 mt-10 md:mt-20">
                {personas.map((persona, index) => (
                    <article
                        key={persona.nombre}
                        className="testimonial-card max-w-sm rounded overflow-hidden p-4 flex flex-col justify-between pt-12 md:pt-16"
                        style={{ backgroundImage: `url(${fondoBack})`, backgroundSize: 'cover', minHeight: '450px' }}
                        data-aos="fade-up"
                        data-aos-delay={`${index}00`}
                    >
                        <img className="w-32 h-32 rounded-full mx-auto mt-4" src={persona.foto} alt={`Foto de ${persona.nombre}`} />
                        <div className="text-content px-6 py-4">
                            <p className="text-gray-700 text-base mb-4">
                                {persona.testimonio}
                            </p>
                        </div>
                        <h3 className="person-name font-bold text-xl 2xl:text-2xl mb-4 text-center">{persona.nombre}</h3>
                    </article>
                ))}
            </div>
        </section>
    );
}
