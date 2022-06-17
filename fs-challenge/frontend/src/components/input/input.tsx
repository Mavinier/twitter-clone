import { StyledInput } from './styles';
import { InputProps } from './types';

export const Input = ({
  id,
  disabled,
  name,
  placeholder,
  type,
  value,
  onBlur,
  onChange,
}: InputProps) => {
  return (
    <StyledInput
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
