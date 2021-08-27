import { SearchInput } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<SearchInput />', () => {
  it('Should render', () => {
    renderTheme(<SearchInput>children</SearchInput>);
  });
});
