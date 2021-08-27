import { Loading } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Loading />', () => {
  it('Should render a loading animation', () => {
    const { container } = renderTheme(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
