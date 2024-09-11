import Image from 'next/image';
import Overlay from '../overlay/overlay';

interface SplashScreenProps {
  isWorksPage?: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isWorksPage }) => {
  return isWorksPage ? (
    <section className='splash-screen-section absolute z-50 hidden bg-black text-white md:flex'>
      <div className='flex h-full w-full flex-col items-center justify-center gap-[10px]'>
        <Overlay />
      </div>
    </section>
  ) : (
    <section className='splash-screen-section absolute z-50 hidden bg-black text-white md:flex'>
      <div className='flex h-full w-full flex-col items-center justify-center gap-2'>
        <div className='splash-screen-logo relative flex h-14 w-14 mr-4'>
          <Image
            src='/website-assets/logo-building.png'
            fill
            className='object-contain'
            quality={100}
            alt='about-image'
          />
        </div>
        <div className='splash-screen-logo-text relative flex h-14 w-48'>
          <Image
            src='/website-assets/logo-text.png'
            fill
            className='object-contain'
            quality={100}
            alt='about-image'
          />
        </div>
      </div>
    </section>
  );
};

export default SplashScreen;
