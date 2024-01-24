import { ComponentPropsWithoutRef } from 'react';
import cn from '@/common/utils/classnames';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

const Button = ({
  children,
  className,
  type = 'button',
  ...rest
}: ButtonProps) => (
  <button
    className={cn('border-black', className)}
    type={type || 'button'}
    {...rest}
  >
    {children}
  </button>
);

export default Button;