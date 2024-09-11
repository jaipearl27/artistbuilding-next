import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';
import ServicesCard from './services-card';
import Button from '../ui/button';
import Link from 'next/link';

const paragraph = `Step into our creative kitchen at The Artistbuilding, where we craft visual delicacies tailored to your unique taste. 
As culinary artists in the realm of design, our menu of services offers a diverse range of flavors. 
Each project is a carefully curated dish of innovation and precision. From sizzling visual effects to the artful plating of animations, our skilled chefs bring a blend of expertise and creativity to the table. 
Just like a masterful chef tailors a menu to your preferences, we customize our services to cater to your creative cravings.`;

const Services = () => {
  return (
    <section
      id='services'
      className='relative flex-col gap-16 overflow-hidden bg-black py-2 text-3xl text-white lg:flex-row lg:py-16 lg:text-4xl'
      style={{ minHeight: '85vh' }}
    >
      <div className='relative z-10 flex w-full flex-col gap-4 px-6 lg:pl-[60px] lg:pr-3'>
        <Heading
          heading='SERVICES'
          textSize='3xl'
          className='europa text-4xl lg:text-8xl'
        />
        <Paragraph
          paragraph={paragraph}
          textSize='lg'
          font='sherika'
          className='text-justify text-sm lg:text-sm'
        />
        <div className='flex flex-col gap-4'>
          <Paragraph
            paragraph={
              'Want to have a brainstorming session with us? Book a free session now!'
            }
            textSize='lg'
            font='sherika'
            className='text-left text-sm font-bold lg:text-sm'
          />
          <Link
            href={
              'https://calendly.com/artistbuildingstudio/30min?month=2024-01'
            }
            aria-label='Book an appointment'
          >
            <Button className='flex items-center justify-center text-sm'>
              Book An Appointment
            </Button>
          </Link>
        </div>
      </div>
      <div className='z-10 flex h-min w-full px-6 pt-6 lg:px-0 lg:pt-0'>
        <div className='flex w-full items-center gap-4 lg:gap-24'>
          <div className='flex w-full flex-col gap-5'>
            <ServicesCard heading='COMPOSITING' />
            <ServicesCard heading='ROTOSCOPING' />
            <ServicesCard heading='MATCHMOVE' />
          </div>
          <div className='flex w-full flex-col gap-5'>
            <ServicesCard heading='CLEANUP' />
            <ServicesCard heading='3D ANIMATION' />
            <ServicesCard heading='ON-SET SUPERVISION' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
