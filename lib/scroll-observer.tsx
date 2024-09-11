'use client';
import { usePathname } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';

interface ActiveSectionValue {
  activeSection: string;
}

interface ScrollObserverProps {
  children: React.ReactNode;
}

export const ScrollContext = createContext<ActiveSectionValue>({
  activeSection: '',
});

const ScrollObserver: React.FC<ScrollObserverProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && pathname === '/') {
            setActiveSection(entry.target.id);
          } else if (pathname !== '/') {
            setActiveSection('');
          }
        });
      },
      { threshold: 0.7 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [pathname]);

  return (
    <ScrollContext.Provider value={{ activeSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserver;
