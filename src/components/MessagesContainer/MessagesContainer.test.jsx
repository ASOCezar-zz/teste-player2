import { MessagesContainer } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<MessagesContainer />', () => {
  it('Should render some messages', () => {
    const { container } = renderTheme(<MessagesContainer />);
    expect(container).toMatchSnapshot();
  });
});
