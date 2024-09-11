import { IconProps } from './icon.types';

const ArrowRightLong: React.FC<IconProps> = ({ className, height, width }) => {
  return (
    <svg
      width={width || 1312}
      height={height || 8}
      viewBox='0 0 1312 8'
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1311.35 4.35355C1311.55 4.15829 1311.55 3.84171 1311.35 3.64645L1308.17 0.464466C1307.98 0.269204 1307.66 0.269204 1307.46 0.464466C1307.27 0.659728 1307.27 0.976311 1307.46 1.17157L1310.29 4L1307.46 6.82843C1307.27 7.02369 1307.27 7.34027 1307.46 7.53553C1307.66 7.7308 1307.98 7.7308 1308.17 7.53553L1311.35 4.35355ZM0 4.5H1311V3.5H0V4.5Z'
        fill='white'
      />
    </svg>
  );
};

export default ArrowRightLong;
