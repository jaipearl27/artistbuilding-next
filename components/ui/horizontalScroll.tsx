'use client';
import React, { useEffect, useRef } from 'react';

interface HorizontalScrollProps {
  children: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) {
      return;
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (scrollContainer) {
        scrollContainer.scrollLeft += e.deltaY;
      }
    };

    scrollContainer.addEventListener('wheel', handleWheel);
    return () => scrollContainer.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div ref={scrollContainerRef} className='flex overflow-x-auto '>
      {children}
    </div>
  );
};

export default HorizontalScroll;
