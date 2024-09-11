import Heading from '../ui/heading';

interface ServicesCardProps {
  heading: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ heading }) => {
  return (
    <div className='flex h-20 w-full flex-col gap-3'>
      <Heading
        heading={heading}
        textSize='xl'
        className='sherika text-lg font-semibold md:text-3xl'
      />
    </div>
  );
};

export default ServicesCard;
