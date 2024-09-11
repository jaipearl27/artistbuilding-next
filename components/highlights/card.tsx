'use client';

import { cn } from '@/lib/utils';
import { HighlightsData } from './highlights';

const HighlightCard: React.FC<HighlightsData> = ({
  brand,
  brandHex,
  video,
  className,
  start,
}) => {
  const parentStyles = cn(
    `relative flex h-max w-full md:w-max flex-col bg-black`,
    {
      'self-start': start,
      'self-end': !start,
    },
    className
  );

  return (
    <div id='highlights' className={parentStyles}>
      <div className='w-ful flex h-max flex-col gap-2 text-white md:flex md:flex-row md:justify-evenly md:gap-0 md:overflow-visible'>
        <div className='flex flex-1 flex-col items-start justify-center space-y-2 px-6 md:m-0 md:h-max md:px-0'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='flex min-h-fit w-full items-center justify-center rounded-xl border border-opacity-10 hover:border-2 hover:border-purple-500 md:min-h-max md:max-w-[35rem]'
          >
            <source src={video}></source>
          </video>
          <h1
            className={cn(
              `z-10 flex w-full max-w-[35rem] justify-center text-center text-3xl font-normal md:justify-start md:text-start`,
              brandHex
            )}
          >
            {brand}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
