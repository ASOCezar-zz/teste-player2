import { Header } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Header />', () => {
  it('Should render', () => {
    renderTheme(<Header />);
  });
});
