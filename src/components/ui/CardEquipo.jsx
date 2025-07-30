import React from 'react';
import { IoShareSocialSharp } from 'react-icons/io5';

export const CardEquipo = ({ name, puesto, image, mt, redesSociales, id }) => {
    return (
        <div 
        data-aos="fade-up" data-aos-delay={`${id}00`}
        className={`flex flex-col ${mt} group w-full h-auto md:h-[32rem] bg-white rounded-3xl relative overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition-all duration-300 ease-in`}>
            <div className="relative pt-[80%] rounded-t-xl overflow-hidden bg-gray-200">
                <img className="w-full h-auto absolute top-0 start-0 object-contain translate-x-0 group-hover:translate-x-10 group-focus:translate-x-10 transition-transform duration-500 ease-in-out rounded-t-xl"
                    src={image} alt="Card Image" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-orange-600 to-slate-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
            </div>
            <div className="p-4 md:p-5 uppercase">
                <h3 className="text-2xl md:text-2xl font-semibold text-gray-800 ">
                    {name}
                </h3>
                <p translate='no' className="mt-1 text-gray-500 ">
                    {puesto}
                </p>
            </div>
            <div className="absolute left-14 bottom-20 md:bottom-[37%] w-14 h-14 group-hover:h-36 rounded-full bg-white group-hover:transform z-20 transition-all duration-500 ease-in-out flex flex-col items-center justify-around p-2">
                <div className="group-hover:hidden flex items-center justify-center h-full">
                    <IoShareSocialSharp className="text-gray-500 text-2xl" />
                </div>
                <div className="hidden group-hover:flex flex-col items-center justify-around w-full h-full">
                    {Object.values(redesSociales).map((social, index) => (
                        <a key={index} href={social.url} target='blank' className="text-gray-500 hover:text-blue-500 transition-colors duration-300 w-12 h-12 grid justify-center items-center">
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
