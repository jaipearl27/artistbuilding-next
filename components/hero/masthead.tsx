'use client';

import { useState, useEffect } from 'react';
import ArrowRight from '../icons/arrowRight';
import ArrowRightLong from '../icons/arrowRightLong';
import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';

interface HeroVideoProps {
  reelURL: string;
}
const paragraph = `Explore boundless creativity, where we turn your ideas into reality through streamlined processes, expert craftsmanship and business acumen. Witness a uniquely successful experience like never before`;

const MastHead: React.FC<HeroVideoProps> = ({ reelURL }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id='home'
      className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className='flex min-h-screen w-full min-w-full flex-col items-center justify-center bg-[a2a2a4] text-white'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='h-screen w-full bg-black object-cover'
        >
          <source src={reelURL}></source>
        </video>
        {/* Overlay */}
        <div className='absolute h-screen bg-gradient-to-r from-transparent via-transparent to-black'>
          {/* Content */}
          <div
            className='flex h-full w-full flex-col items-start justify-end px-5 md:pb-[49px] md:pl-24 md:pr-44'
            style={{ maxWidth: '100vw' }}
          >
            <div className='flex flex-col gap-4  md:pr-52'>
              <Heading
                heading='Your Portal To Visual Wonders'
                textSize='3xl'
                font='sherika'
              />
              <Paragraph paragraph={paragraph} textSize='2xl' font='sherika' />
            </div>
            <div className='mt-16 flex w-full flex-col pr-6'>
              <div className='flex flex-col'>
                <div className='hidden items-center gap-8 pr-4 md:flex'>
                  <ArrowRight />
                  <p className='text-white'>SCROLL</p>
                </div>
                <div className='mt-2 hidden md:flex'>
                  <ArrowRightLong />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MastHead;
