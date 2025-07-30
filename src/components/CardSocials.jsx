
import { IconCheronAnimate } from './ui/Icons';

export const CardSocials = ({socials}) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow-top-bottom">
            {socials.map((social, index) => (
                <div key={index} data-aos="zoom-in" data-aos-delay={`${index}00`}>
                    <div className="flex items-center justify-between p-1 bg-slate-200 rounded-full hover:bg-slate-300 hover:scale-95 transform transition-all duration-300">
                        <span className="flex items-center justify-center w-14 h-14 2xl:w-20 2xl:h-20 rounded-full bg-orange-500 text-white text-xl mr-4">
                            {social.icon}
                        </span>
                        <span className="flex-1 text-base md:text-2xl font-semibold">{social.info}</span>
                        <a href={social.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-3xl text-orange-500 w-14 h-14 2xl:w-20 2xl:h-20 rounded-full">
                            <IconCheronAnimate />
                        </a>
                    </div>
                </div>

            ))}
        </div>
    );
};
