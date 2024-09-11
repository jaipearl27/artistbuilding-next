'use client';
import { createContext, useState, ReactNode } from 'react';

interface VideoOverlayContextProps {
  videoID: string;
  setVideoID: (videoID: string) => void;
  subtitle: string;
  setSubtitle: (subtitle: string) => void;
  title: string;
  setTitle: (title: string) => void;
  showOverlay: boolean;
  toggleOverlay: () => void;
}

export const VideoOverlayContext = createContext<VideoOverlayContextProps>({
  videoID: '',
  setVideoID: () => {},
  subtitle: '',
  setSubtitle: () => {},
  title: '',
  setTitle: () => {},
  showOverlay: false,
  toggleOverlay: () => {},
});

interface VideoOverlayContextProviderProps {
  children: ReactNode;
}

const VideoOverlayContextProvider: React.FC<
  VideoOverlayContextProviderProps
> = ({ children }) => {
  const [videoID, setVideoID] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [title, setTitle] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <VideoOverlayContext.Provider
      value={{
        videoID,
        setVideoID,
        subtitle,
        setSubtitle,
        title,
        setTitle,
        showOverlay,
        toggleOverlay,
      }}
    >
      {children}
    </VideoOverlayContext.Provider>
  );
};

export default VideoOverlayContextProvider;
