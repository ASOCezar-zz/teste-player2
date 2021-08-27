import { Message } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Message />', () => {
  it('Should render', () => {
    renderTheme(<Message>children</Message>);
  });
});
