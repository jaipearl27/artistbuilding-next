'use client';
import Image from 'next/image';
import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { VideoOverlayContext } from '../overlay/video-overlay-context';
import { motion } from 'framer-motion';

type VideoTileProps = {
  videoID: string;
  title: string;
  subtitle: string;
  parentHovered: boolean;
  index: number;
  setCurrentHoveredTile: React.Dispatch<React.SetStateAction<number | null>>;
  currentHoveredTile: number | null;
};

const VideoTile: React.FC<VideoTileProps> = ({
  videoID,
  title,
  subtitle,
  parentHovered,
  setCurrentHoveredTile,
  currentHoveredTile,
  index,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { toggleOverlay, setSubtitle, setTitle, setVideoID, showOverlay } =
    useContext(VideoOverlayContext);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setIsHovering(false);
    toggleOverlay();
    setSubtitle(subtitle);
    setTitle(title);
    setVideoID(videoID);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setCurrentHoveredTile(index);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCurrentHoveredTile(null);
  };

  useEffect(() => {
    if (showOverlay === false) {
      setIsPlaying(false);
    }
  }, [showOverlay]);

  const tileAnimation = {
    scale: parentHovered ? (currentHoveredTile === null ? 1 : 0.5) : 1,
    translateX: isHovering ? (index % 2 === 0 ? 20 : -20) : 0,
    translateY: isHovering ? (index < 2 ? 25 : -25) : 0,
    transition: { duration: isHovering ? 1.5 : 1.4, ease: 'easeInOut' },
  };

  const tileHoverAnimation = {
    scale: 1.1,
    transition: { duration: 1.5, ease: 'easeInOut', delay: 0.35 },
  };

  return (
    <motion.div
      key={videoID}
      className={`relative mb-3 h-full w-full cursor-pointer overflow-hidden bg-gray-700 md:mb-0`}
      animate={tileAnimation}
      whileHover={tileHoverAnimation}
      onClick={handlePlayClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        fill
        className='object-cover'
        quality={100}
        src={`https://i.ytimg.com/vi/${videoID}/maxresdefault.jpg`}
        alt=''
      />
      {isPlaying ? null : (
        <div className='absolute inset-0 flex flex-col items-center justify-center border-4 border-black bg-black bg-opacity-20'>
          {isHovering && (
            <div className='absolute flex h-full w-full flex-col justify-center bg-black bg-opacity-50 p-4 text-center'>
              <h3 className='text-2xl font-bold text-white'>{title}</h3>
              <p className='text-xl text-white'>{subtitle}</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};
export default VideoTile;
