'use client';
import { useContext } from 'react';
import { VideoOverlayContext } from '../overlay/video-overlay-context';

const VideOverlay = () => {
  const { videoID, toggleOverlay, subtitle, title, showOverlay } =
    useContext(VideoOverlayContext);

  if (!showOverlay) {
    return null;
  }

  return (
    <div className='fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-black bg-opacity-90'>
      <button
        className='absolute right-20 top-5 mr-5 rounded-full p-2'
        onClick={() => toggleOverlay()}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 text-white'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M2.293 3.293a1 1 0 011.414 0L10 8.586l6.293-6.293a1 1 0 011.414 1.414L11.414 10l6.293 6.293a1 1 0 01-1.414 1.414L10 11.414l-6.293 6.293a1 1 0 01-1.414-1.414L8.586 10 2.293 3.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <div className='relative sm:h-2/5 sm:w-3/6 md:h-2/5 md:w-3/6 lg:h-4/5 lg:w-4/6'>
        <iframe
          src={`https://www.youtube.com/embed/${videoID}`}
          className='aspect-w-16 aspect-h-9 h-full w-full'
          allowFullScreen
        />
      </div>
      <div className='mt-2 flex flex-col justify-self-start text-center text-white'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='text-3xl'>{subtitle}</p>
      </div>
    </div>
  );
};

export default VideOverlay;
