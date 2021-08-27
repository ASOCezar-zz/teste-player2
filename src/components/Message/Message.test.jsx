import { screen } from '@testing-library/react';
import { Message } from '.';
import { renderTheme } from '../../styles/renderTheme';

import data from './mock';

describe('<Message />', () => {
  it('Should render a message', () => {
    const { container } = renderTheme(<Message message={data} />);
    expect(screen.getByRole('heading', { name: 'Mensagem Teste' }));
    expect(container).toMatchSnapshot();
  });
});
