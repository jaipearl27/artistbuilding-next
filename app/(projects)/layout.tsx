import Overlay from '@/components/overlay/overlay';
import ProjectsNav from '@/components/navbar/projects-navbar';
import React from 'react';
import VideoOverlay from '@/components/services/video-overlay';
import VideoOverlayContextProvider from '@/components/overlay/video-overlay-context';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VideoOverlayContextProvider>
        <VideoOverlay />
        <ProjectsNav />
        <Overlay />
        <main id='scroll-container' className='z-10 overflow-hidden'>
          <article>{children}</article>
        </main>
      </VideoOverlayContextProvider>
    </>
  );
}
