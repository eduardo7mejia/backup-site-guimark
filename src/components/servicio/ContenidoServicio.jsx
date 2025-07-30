import React, { useState, useRef } from 'react';
import { FaPlay } from 'react-icons/fa6';

export const ContenidoServicio = ({ srcVideo, children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className='md:flex w-full h-auto md:h-[70vh] justify-center items-center gap-4'>
            <div className='md:w-2/5 h-full w-full grid items-center justify-center content-center'>
                <div className='max-w-screen-sm 2xl:h-[40rem] relative  overflow-hidden rounded-3xl md:rounded-[3rem]'>
                    {
                        !isPlaying && (
                            <button
                                onClick={togglePlay}
                                className="absolute inset-0 m-auto w-20 h-20 md:w-28 md:h-28 bg-black bg-opacity-75 text-white rounded-full flex items-center justify-center"
                                style={{ zIndex: 10 }}
                            >
                                <FaPlay size={28} />
                            </button>
                        )
                    }
                    <video
                        ref={videoRef}
                        className='w-full h-full object-fill'
                        onContextMenu={(e) => e.preventDefault()}
                        controls
                        controlsList="nodownload noremoteplayback, disablePictureInPicture: true,"
                    >
                        <source type="video/mp4" src={srcVideo} />
                    </video>
                </div>
            </div>
            <div className='md:w-3/5 py-4 h-full w-full grid  content-center p-4 md:p-0'>
                {children}
            </div>
        </div>
    );
};
