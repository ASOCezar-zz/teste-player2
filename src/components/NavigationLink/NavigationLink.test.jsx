import userEvent from '@testing-library/user-event';
import { NavigationLink } from '.';
import { renderTheme } from '../../styles/renderTheme';

const fn = jest.fn();
const fn2 = jest.fn();

describe('<NavigationLink />', () => {
  it('Should render a navigation link and observes mouse events', () => {
    const { container } = renderTheme(<NavigationLink onMouseOver={fn} onMouseLeave={fn2} />);

    userEvent.hover(container.firstChild);
    expect(fn).toBeCalled();

    userEvent.unhover(container.firstChild);
    expect(fn2).toBeCalled();

    expect(container).toMatchSnapshot();
  });
});
