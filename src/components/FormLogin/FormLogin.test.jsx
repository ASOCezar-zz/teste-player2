import { fireEvent, screen } from '@testing-library/react';
import { FormLogin } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

const fn = jest.fn();

describe('<FormLogin />', () => {
  it('Should render a formulary for login users', () => {
    renderTheme(<FormLogin authenticate={fn} />);
    expect(screen.getByLabelText('formulário de login')).toBeInTheDocument;
  });

  it('Should change style of email field when it was invalid', () => {
    renderTheme(<FormLogin authenticate={fn} />);
    const button = screen.getByRole('button', { name: 'Entrar' });
    const emailInput = screen.getByLabelText('Email');

    fireEvent.click(button);
    expect(emailInput).toHaveStyle({
      border: `1px solid ${theme.colors.error}`,
    });
    expect(fn).toBeCalledTimes(0);
  });

  it('Should change style of password field when it was null', () => {
    renderTheme(<FormLogin authenticate={fn} />);
    const button = screen.getByRole('button', { name: 'Entrar' });
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');

    fireEvent.change(emailInput, { target: { value: 'teste@teste.com' } });
    fireEvent.click(button);

    expect(emailInput).toHaveStyle({
      border: `1px solid ${theme.colors.darkGray}`,
    });
    expect(passwordInput).toHaveStyle({
      border: `1px solid ${theme.colors.error}`,
    });
    expect(fn).toBeCalledTimes(0);
  });

  it('Should style of password field when it was invalid', () => {
    renderTheme(<FormLogin authenticate={fn} />);
    const button = screen.getByRole('button', { name: 'Entrar' });
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');

    fireEvent.change(emailInput, { target: { value: 'teste@teste.com' } });
    fireEvent.change(passwordInput, { target: { value: 'a' } });
    fireEvent.click(button);

    expect(emailInput).toHaveStyle({
      border: `1px solid ${theme.colors.darkGray}`,
    });
    expect(passwordInput).toHaveStyle({
      border: `1px solid ${theme.colors.error}`,
    });
    expect(fn).toBeCalledTimes(0);
  });

  it('Should call a auth function when submited', () => {
    renderTheme(<FormLogin authenticate={fn} />);
    const button = screen.getByRole('button', { name: 'Entrar' });
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Senha');

    fireEvent.change(emailInput, { target: { value: 'teste@teste.com' } });
    fireEvent.change(passwordInput, { target: { value: 'abcdefgh' } });
    fireEvent.click(button);

    expect(emailInput).toHaveStyle({
      border: `1px solid ${theme.colors.darkGray}`,
    });
    expect(passwordInput).toHaveStyle({
      border: `1px solid ${theme.colors.darkGray}`,
    });
    expect(fn).toBeCalledTimes(1);
  });
});
