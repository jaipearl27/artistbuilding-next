import { IconProps } from './icon.types';

const ArrowRight: React.FC<IconProps> = ({ className, height, width }) => {
  return (
    <svg
      width={width || 1154}
      height={height || 8}
      viewBox='0 0 1154 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M1153.85 4.35355C1154.05 4.15829 1154.05 3.84171 1153.85 3.64645L1150.67 0.464466C1150.48 0.269204 1150.16 0.269204 1149.96 0.464466C1149.77 0.659728 1149.77 0.976311 1149.96 1.17157L1152.79 4L1149.96 6.82843C1149.77 7.02369 1149.77 7.34027 1149.96 7.53553C1150.16 7.7308 1150.48 7.7308 1150.67 7.53553L1153.85 4.35355ZM0 4.5H1153.5V3.5H0V4.5Z'
        fill='white'
        width={width}
      />
    </svg>
  );
};

export default ArrowRight;
