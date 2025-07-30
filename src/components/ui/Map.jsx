import React from 'react'

export const Map = ({src}) => {
    return (
        <section className="body-font relative ">
            <div className="inset-0 rounded-md border overflow-hidden" data-aos="fade-up">
                <iframe src={src}
                    allowFullScreen loading="lazy"
                    className=' max-w-full w-full h-96 2xl:h-[30rem]'
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>


    )
}
