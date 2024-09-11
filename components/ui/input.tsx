import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  type?: string;
  name: string;
  errorMessage?: string | null;
}

const Input: React.FC<InputProps> = ({
  className,
  placeholder,
  type,
  name,
  errorMessage,
  ...props
}) => {
  switch (type) {
    case 'text':
    default:
      return (
        <div className='flex flex-col gap-1'>
          <input
            className={cn(
              `h-12 w-full rounded-[4px] border border-white bg-transparent p-3 text-sm text-white placeholder-[#646464] outline-none  focus:border-purple-500`,
              className,
              errorMessage
                ? 'border-red-500 focus:border-red-500'
                : 'border-white'
            )}
            placeholder={placeholder}
            name={name}
            id='name'
            {...props}
          />
        </div>
      );
  }
};

export default Input;
