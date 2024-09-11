import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          `
        inter 
        w-auto
        rounded-lg
        bg-[#B295C3] 
        px-5 
        py-3 
        font-semibold
        transition
        hover:opacity-60
        disabled:cursor-not-allowed
        disabled:opacity-50
      `,
          disabled && 'cursor-not-allowed opacity-75',
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
