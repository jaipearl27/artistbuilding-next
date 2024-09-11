import Image from 'next/image';
import bgImage from '@/public/website-assets/2.png';
import FounderCard from './foundercard';

const shivam = `Shivam Solanki is the Founder of ArtistBuiIding Studios. He has been in the Visual Effects industry since 2015. His work garnered the gold award of MAAC 24FPS 2019 VFX Compositing.`;

const AboutFounders = () => {
  return (
    <section id='about' className='relative flex gap-16 bg-black py-16 text-3xl text-white md:text-4xl'>
      <Image
        src={bgImage}
        width={600}
        height={500}
        quality={100}
        className='absolute bottom-0 left-0 z-0'
        alt='bg-image'
      />
      <div className='z-10 flex w-full items-center justify-between px-16'>
        <div className='flex flex-col'>
          <FounderCard
            heading='FOUNDER'
            name='Shivam Solanki'
            paragraph={shivam}
          />
        </div>
        <div className='flex flex-col'>
          <FounderCard
            heading='CO-FOUNDER'
            name='Yash Agrawal'
            paragraph={shivam}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutFounders;
