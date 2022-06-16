import { render, screen, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Login } from '../login';

const renderComponent = async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
  });
};

describe('Login page', () => {
  it('Should render login page', async () => {
    await renderComponent();
    await waitFor(() => {
      expect(screen.getByText('Log in to Twitter.')).toBeInTheDocument();
    });
  });
});
