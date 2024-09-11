import Image from 'next/image';
import bgImage from '@/public/website-assets/ArtistBui.png';
import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';

const paragraph = `At The Artistbuilding, there is always accommodation for your ideas and imagination. A one stop suite for all your visual needs. We make sure every frame is tailored to you and what you envision.
We believe in the symphony of technology and artistry. 
Our team of dedicated professionals will weave magic into every frame, whether it’s a pulse-pounding scene of a blockbuster movie or the immersive landscapes of virtual reality, we thrive on challenges that push us to reimagine reality.`;

const AboutUs = () => {
  return (
    <section
      id='about-us'
      className='relative flex-col gap-16 bg-black py-6 text-3xl text-white lg:flex lg:py-16 lg:text-4xl'
    >
      <Image
        src={bgImage}
        width={1100}
        height={800}
        quality={100}
        className='absolute bottom-0 right-5 z-0 hidden lg:block'
        alt='bg-image'
      />
      <div className='z-10 flex w-full flex-col items-start justify-between px-6 lg:flex-row lg:px-36'>
        <div className='z-10 flex h-full w-full lg:w-3/5'>
          <div className='flex h-full w-full flex-col gap-3'>
            <Heading
              heading={'ABOUT US'}
              textSize='xl'
              className='europa text-4xl font-semibold lg:text-8xl'
            />
            <Paragraph
              paragraph={paragraph}
              textSize='xs'
              font='sherika'
              className='text-left text-sm lg:text-xl'
            />
          </div>
        </div>
        <div className='relative flex h-[450px] w-full lg:w-1/3'>
          <Image
            src='/website-assets/about.png'
            fill
            className='object-contain opacity-40 lg:opacity-100'
            quality={100}
            alt='about-image'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
