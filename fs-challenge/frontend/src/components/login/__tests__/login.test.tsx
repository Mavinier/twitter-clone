import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { Login } from '../login';

describe('Login page', () => {
  it('Should render login page', () => {
    act(() => {
      render(<Login />);
    });
    expect(screen.getByText('Log in to Twitter.')).toBeInTheDocument();
  });
});
