import React from 'react';

export const InfinityCarousel = ({ slide, speed = 30000 }) => {
    return (
        <div className="inner">
            <div className="wrapper">
                <section className='wrapper__container' style={{ "--speed": `${speed}ms` }}>
                    {slide.map(({ id, image }) => (
                        <div className="wrapper__image" key={id}>
                            <img className='slide__image' src={image} alt={id} />
                        </div>
                    ))}
                </section>
                <section className='wrapper__container' style={{ "--speed": `${speed}ms` }}>
                    {slide.map(({ id, image }) => (
                        <div className="wrapper__image" key={id}>
                            <img className='slide__image' src={image} alt={id} />
                        </div>
                    ))}
                </section>
                <section className='wrapper__container' style={{ "--speed": `${speed}ms` }}>
                    {slide.map(({ id, image }) => (
                        <div className="wrapper__image" key={id}>
                            <img className='slide__image' src={image} alt={id} />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}
