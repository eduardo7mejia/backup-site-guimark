import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const useScrollWidth = () => {
    const [scrollY, setScrollY] = useState(0);
    const isAbove1024px = useMediaQuery({ query: '(min-width: 1024px)' });

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calcWidth = () => {
        const maxScroll = 100;
        const initialOffset = 80;
        const currentOffset = Math.max(0, initialOffset - (scrollY / maxScroll) * initialOffset);
        return `calc(100% - ${currentOffset}px)`;
    };

    return { scrollY, isAbove1024px, calcWidth };
};

export default useScrollWidth;
