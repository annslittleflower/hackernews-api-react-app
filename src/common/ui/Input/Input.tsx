import { ComponentPropsWithoutRef } from 'react';
import cn from '@/common/utils/classnames';

type InputProps = ComponentPropsWithoutRef<'input'>;

const Input = ({ className, ...rest }: InputProps) => (
  <input className={cn('border-black', className)} {...rest} />
);

export default Input;