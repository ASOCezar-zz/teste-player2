import { MessagesContainer } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<MessagesContainer />', () => {
  it('Should render', () => {
    renderTheme(<MessagesContainer>children</MessagesContainer>);
  });
});
