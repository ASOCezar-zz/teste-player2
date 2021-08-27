import { NavBar } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<NavBar />', () => {
  it('Should render', () => {
    renderTheme(<NavBar>children</NavBar>);
  });
});
