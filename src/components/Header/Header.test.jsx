import { screen } from '@testing-library/react';
import { Header } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Header />', () => {
  it('Should render a header with an alert for notifications', () => {
    renderTheme(<Header pageTitle={<h1>Teste</h1>} />);
    expect(screen.getByRole('heading', { name: 'Teste' })).toBeInTheDocument();
    expect(screen.getByAltText('icone sem notificações')).toBeInTheDocument();
    expect(screen.queryByAltText('icone com notificações')).not.toBeInTheDocument();
  });
  it('Should match with a snapshot', () => {
    const { container } = renderTheme(<Header pageTitle="Teste" />);
    expect(container).toMatchSnapshot();
  });
});
