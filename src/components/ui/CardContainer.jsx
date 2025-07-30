import React from 'react';

export const CardContainer = ({ id, icon, title, description }) => {
    return (
        <article className="flex flex-col md:flex-row bg-white overflow-hidden py-1 px-1" data-aos="fade-up" data-aos-delay={`${id}00`}>
            <div className="flex-none bg-orange-500 text-white p-6 grid rounded-2xl justify-center items-center content-center text-center">
                <p className='text-4xl font-bold'>0{id}</p>
                <span className='text-5xl'>{icon}</span>
            </div>
            <section className="flex flex-col justify-between p-6 w-full">
                <header>
                    <h2 className="text-lg 2xl:text-2xl font-semibold">{title}</h2>
                </header>
                <p className="mt-2 text-sm 2xl:text-lg flex-grow text-zinc-500">{description}</p>
            </section>
        </article>
    );
};
