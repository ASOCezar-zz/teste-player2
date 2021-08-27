import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NavBar } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<NavBar />', () => {
  it('Should render a navbar and open it when clicks on the button', () => {
    renderTheme(<NavBar />);
    const button = screen.getByAltText('botão do menu').parentElement;
    const menu = screen.getByLabelText('menu lateral');

    expect(menu).toHaveStyle({ visibility: 'hidden' });
    expect(menu).toHaveStyleRule('visibility', 'visible', { media: '(min-width: 1024px)' });
    expect(menu).toHaveStyleRule('width', '44px', { media: '(min-width: 1024px)' });

    userEvent.click(button);

    expect(menu).toHaveStyleRule({ visibility: 'visible' });
    expect(menu).toHaveStyleRule('width', '35%', { media: '(min-width: 1024px)' });
  });

  it('Should render a navbar and open it when mouseOver', () => {
    renderTheme(<NavBar />);
    const menu = screen.getByLabelText('menu lateral');

    expect(menu).toHaveStyleRule('visibility', 'visible', { media: '(min-width: 1024px)' });
    expect(menu).toHaveStyleRule('width', '44px', { media: '(min-width: 1024px)' });

    userEvent.hover(menu);
    expect(menu).toHaveStyleRule({ visibility: 'visible' });
    expect(menu).toHaveStyleRule('width', '35%', { media: '(min-width: 1024px)' });

    userEvent.unhover(menu);
    expect(menu).toHaveStyleRule('visibility', 'visible', { media: '(min-width: 1024px)' });
    expect(menu).toHaveStyleRule('width', '44px', { media: '(min-width: 1024px)' });
  });

  it('Should match with a snapshot', () => {
    const { container } = renderTheme(<NavBar />);
    expect(container).toMatchSnapshot();
  });
});
