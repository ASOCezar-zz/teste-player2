import { Loading } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Loading />', () => {
  it('Should render', () => {
    renderTheme(<Loading>children</Loading>);
  });
});
