'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SplashScreen from '../splash-screen/splashScreen';
import Image from 'next/image';
import logoImage from '@/public/website-assets/logoside.png';

const ProjectsNav = () => {
  const [loading, setLoading] = useState(true);

  const routes = [
    {
      href: '/',
      label: 'Home',
      active: false,
    },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Set loading false after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  // Disable scrolling when loading
  useEffect(() => {
    const scrollContainer = document.getElementById(
      'scroll-container'
    ) as HTMLElement;
    if (!scrollContainer) return;
    if (loading) {
      scrollContainer.style.overflow = 'hidden';
    } else {
      scrollContainer.style.overflow = 'auto';
    }
  }, [loading]);

  return loading ? (
    <SplashScreen isWorksPage={true} />
  ) : (
    <nav
      className={`text-bold absolute z-20 h-fit w-full items-center justify-between space-x-2 bg-transparent px-8 py-4 text-2xl transition-opacity md:flex md:space-x-4 lg:space-x-6 ${loading ? 'opacity-0' : 'opacity-100'}`}
    >
      <Link
        href={'/'}
        prefetch
        className='flex flex-col items-center gap-[10px]'
      >
        <Image
          src={logoImage}
          alt='ArtistBuilding Logo'
          width={165}
          height={165}
        />
      </Link>
      <div className='hidden space-x-2 md:flex md:space-x-4 lg:space-x-6'>
        {routes.map((route) =>
          route.href.startsWith('/') ? (
            <Link
              key={route.href}
              href={route.href}
              passHref
              className={`${route.active ? 'primary-text text-base' : 'secondary-text text-base'}`}
            >
              {route.label}
            </Link>
          ) : (
            <Link
              key={route.href}
              href={route.href}
              passHref
              onClick={(e) => handleClick(e, route.href)}
              className={`${route.active ? 'primary-text text-base' : 'secondary-text text-base'}`}
            >
              {route.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default ProjectsNav;
