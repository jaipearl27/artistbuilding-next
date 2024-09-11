import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';

const paragraph = `Embark a journey where your only limitation is your imagination. 
If you can imagine it, we can cook it. We are visual chefs, pioneers of the secret sauce that blends precision with creativity. 
Join us in breaking barriers of reality and let us kindle the spark your ideas can ignite into a fire.`;

const WhatWeDo = () => {
  return (
    <section
      id='what-we-do'
      className='min-h-min w-full border-t-2 border-[#A67FB9] bg-black pt-8 text-white md:min-h-screen md:border-l-2 md:border-t-0 md:p-0  md:pb-0'
    >
      <div className='flex h-full items-start md:ml-10 md:flex-col md:items-center'>
        <div className='flex h-full w-full border-l-0  md:col-span-1 md:grid-cols-3  md:py-0 md:pl-5 md:pt-0'>
          <div className='flex h-full w-full flex-col items-center justify-center gap-14 px-3 py-3 pr-0 md:col-span-1 md:gap-[3rem] md:px-0 md:pr-20'>
            <div className='flex flex-col items-start justify-start md:h-44 md:w-[25rem]'>
              <Heading heading='What We Do' textSize='4xl' font='sherika' />
              <Paragraph paragraph={paragraph} textSize='lg' font='sherika' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
