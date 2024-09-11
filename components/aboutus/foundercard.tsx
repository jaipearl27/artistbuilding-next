import Image from 'next/image';
import Heading from '../ui/heading';
import Paragraph from '../ui/paragraph';

interface FounderCardProps {
  name: string;
  heading: string;
  paragraph: string;
}

const FounderCard: React.FC<FounderCardProps> = ({
  heading,
  name,
  paragraph,
}) => {
  return (
    <div className='flex gap-6'>
      <Image
        alt='founder-image'
        width={280}
        height={300}
        src={'/website-assets/9.jpg'}
      />
      <div className='flex w-[350px] flex-col'>
        <Heading heading={heading} font='sherika' />
        <h2>{name}</h2>
        <Paragraph paragraph={paragraph} textSize='xs' className='text-xl' />
      </div>
    </div>
  );
};

export default FounderCard;
