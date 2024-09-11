import { cn } from '@/lib/utils';

interface HeadingProps {
  heading: string;
  textSize?: string;
  font?: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  heading,
  textSize,
  font,
  className,
}) => {
  return (
    <h1
      className={cn(
        `inline-block h-fit bg-gradient-to-br from-purple-500 via-[#E6E3F1] to-white bg-clip-text text-${textSize} text-transparent ${font}`,
        className
      )}
    >
      {heading}
    </h1>
  );
};

export default Heading;
