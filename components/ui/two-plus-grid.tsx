import { Plus } from 'lucide-react';

const TwoPlusGrid = () => {
  const plusIcons = [];
  for (let i = 0; i < 2; i++) {
    plusIcons.push(
      <Plus
        key={i}
        width={20}
        height={20}
        className='hover:animation-spin transition-all'
        id={`icon-${i}-mid`}
      />
    );
  }

  return plusIcons;
};

export default TwoPlusGrid;
