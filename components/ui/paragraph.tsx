import { cn } from '@/lib/utils';
interface HeadingProps {
  paragraph: string;
  textSize: string;
  font?: string;
  className?: string;
}

const Paragraph: React.FC<HeadingProps> = ({
  paragraph,
  textSize,
  font,
  className,
}) => {
  return (
    <p className={(cn(`white text-${textSize} text-white ${font}`), className)}>
      {paragraph}
    </p>
  );
};

export default Paragraph;
