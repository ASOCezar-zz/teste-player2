import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NavigationLink } from '.';
import { renderTheme } from '../../styles/renderTheme';

const fn = jest.fn();
const fn2 = jest.fn();
const fn3 = jest.fn();

describe('<NavigationLink />', () => {
  it('Should render a navigation link and observes mouse events', () => {
    const { container } = renderTheme(
      <NavigationLink isOpen={false} handleLogout={fn3} onMouseOver={fn} onMouseLeave={fn2} />,
    );

    userEvent.hover(container.firstChild);
    expect(fn).toBeCalled();

    userEvent.unhover(container.firstChild);
    expect(fn2).toBeCalled();

    expect(container).toMatchSnapshot();
  });

  it('Should render a diferent template when closed', () => {
    renderTheme(<NavigationLink isOpen={false} onMouseOver={fn} handleLogout={fn3} onMouseLeave={fn2} />);

    expect(screen.getByLabelText('menu lateral fechado')).toBeInTheDocument();
  });

  it('Should render a diferent template when opened', () => {
    renderTheme(<NavigationLink isOpen={true} onMouseOver={fn} onMouseLeave={fn2} handleLogout={fn3} />);

    expect(screen.getByLabelText('menu lateral aberto')).toBeInTheDocument();

    userEvent.click(screen.getByLabelText('Sair'));
    expect(fn3).toBeCalled();
  });
});
