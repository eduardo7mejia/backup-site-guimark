import React, { useRef, useState, useEffect } from 'react';
import { FaVolumeUp } from 'react-icons/fa';

const LazyLoadingVideo = ({ srcMobile, srcDesktop, className = "" }) => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);
    const [showButton, setShowButton] = useState(true);

    const handleUnmute = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = false;
            video.play();
            setIsMuted(false);
            setShowButton(false);
        }
    };

    useEffect(() => {
        const video = videoRef.current;

        const handleUserInteraction = () => {
            console.log('User interaction detected');
            if (video) {
                console.log('Unmuting and playing video');
                video.muted = false;
                video.play();
            }
            video.removeEventListener('click', handleUserInteraction);
            video.removeEventListener('touchstart', handleUserInteraction);
        };

        if (video) {
            console.log('Adding event listeners');
            video.addEventListener('click', handleUserInteraction);
            video.addEventListener('touchstart', handleUserInteraction);
        }

        return () => {
            if (video) {
                console.log('Removing event listeners');
                video.removeEventListener('click', handleUserInteraction);
                video.removeEventListener('touchstart', handleUserInteraction);
            }
        };
    }, []);

    return (
        <div className={`w-full h-full relative ${className}`}>
            {showButton && (
                <button
                    onClick={handleUnmute}
                    className="absolute inset-0 m-auto  w-20 h-20 bg-black bg-opacity-75 text-white rounded-full flex items-center justify-center"
                    style={{ zIndex: 10 }}
                >
                    <FaVolumeUp size={24} />
                </button>
            )}
            <video
                ref={videoRef}
                className="w-full md:h-screen"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                controls
            >
                <source media="(min-width: 1024px)" type="video/mp4" src={srcDesktop} />
                <source media="(max-width: 1024px)" type="video/mp4" src={srcMobile} />
            </video>
        </div>
    );
};

export default LazyLoadingVideo;
