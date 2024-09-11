import { Plus } from 'lucide-react';

interface ThreePlusGridProps {
  top?: boolean;
}

const ThreePlusGrid: React.FC<ThreePlusGridProps> = ({ top }) => {
  const plusIcons = [];
  for (let i = 0; i < 3; i++) {
    plusIcons.push(
      <Plus
        key={i}
        width={20}
        height={20}
        className='hover:animation-spin transition-all z-20'
        id={top ? `icon-${i}-top` : `icon-${i}`}
      />
    );
  }

  return plusIcons;
};

export default ThreePlusGrid;
