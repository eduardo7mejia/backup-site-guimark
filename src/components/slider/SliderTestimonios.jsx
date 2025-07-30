import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import fondoBack from '../../assets/images/site_web/equipo/testimonios/placa-base.png';
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

export const SliderTestimonios = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="emblaTestimonios">
            <div className="emblaTestimonios__viewport" ref={emblaRef}>
                <div className="emblaTestimonios__container">
                    {slides?.map((slide, index) => (
                        <article key={slide.nombre} className="testimonial-card max-w-sm rounded overflow-hidden p-4 flex flex-col justify-between pt-12 md:pt-20"
                            style={{ backgroundImage: `url(${fondoBack})`, backgroundSize: 'cover', height: '450px' }}
                            data-aos="fade-up" data-aos-delay={`${index}00`}
                        >
                            <img className="w-32 h-32 rounded-full mx-auto mt-4" src={slide.foto} alt={`Foto de ${slide.nombre}`} />
                            <div className="text-content px-6 py-4">
                                <p className="text-gray-700 text-base mb-4">
                                    {slide.testimonio}
                                </p>
                            </div>
                            <h3 className="person-name font-bold text-xl 2xl:text-2xl mb-2 text-center">{slide.nombre}</h3>
                        </article>
                    ))}
                </div>
            </div>

            <div className="emblaTestimonios__controls">
                <div className="emblaTestimonios__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="emblaTestimonios__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'emblaTestimonios__dot'.concat(
                                index === selectedIndex ? ' emblaTestimonios__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

