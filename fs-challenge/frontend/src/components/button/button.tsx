import { StyledButton } from './styles';
import { ButtonProprs } from './types';

export const Button = ({ type, disabled, children }: ButtonProprs) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
