import { fireEvent, screen } from '@testing-library/react';
import { CardBank } from '.';
import { renderTheme } from '../../styles/renderTheme';
import data from './mock';

const fn = jest.fn();
const fn2 = jest.fn();

describe('<CardBank />', () => {
  it('Should render a card with bank infos', () => {
    renderTheme(<CardBank {...data} handleDeleteBank={fn} handleRedirect={fn2} />);
    expect(screen.getByRole('heading', { name: data.name + ' - ' + data.code })).toBeInTheDocument;
  });

  it('Should render a card without bank code', () => {
    renderTheme(
      <CardBank {...data} code={null} banks={[]} setBanks={undefined} searchBanks={[]} setSearchBanks={undefined} />,
    );
    expect(screen.getByRole('heading', { name: data.name + ' -' })).toBeInTheDocument;
  });

  it('Should go to the page of bank when clicking on card text', () => {
    renderTheme(<CardBank {...data} handleDeleteBank={fn} handleRedirect={fn2} />);
    const cardContent = screen.getByRole('heading', { name: data.name + ' - ' + data.code });

    fireEvent.click(cardContent);
    expect(fn2).toBeCalledTimes(1);
  });

  it('Should open and close a tooltip when button is clicked', () => {
    renderTheme(<CardBank {...data} handleDeleteBank={fn} handleRedirect={fn2} />);
    const button = screen.getByLabelText('opções para o card');
    expect(screen.getByText('Deletar Banco')).toHaveStyle({ visibility: 'hidden' });

    fireEvent.click(button);
    expect(screen.getByText('Deletar Banco')).toHaveStyle({ visibility: 'visible' });
    fireEvent.click(button);
    expect(screen.getByText('Deletar Banco')).toHaveStyle({ visibility: 'hidden' });
  });

  it('Should close when clicking everywhere on page', () => {
    const { container } = renderTheme(<CardBank {...data} handleDeleteBank={fn} handleRedirect={fn2} />);
    const button = screen.getByLabelText('opções para o card');

    fireEvent.click(button);

    const background = container.querySelector('.optionsBackground');
    fireEvent.click(background);
    expect(screen.getByText('Deletar Banco')).toHaveStyle({ visibility: 'hidden' });
  });

  it('Should delete the card when clicking on tooltip', () => {
    renderTheme(<CardBank {...data} handleDeleteBank={fn} handleRedirect={fn2} />);
    const button = screen.getByLabelText('opções para o card');
    const tooltip = screen.getByText('Deletar Banco');

    fireEvent.click(button);
    fireEvent.click(tooltip);

    expect(fn).toBeCalledTimes(1);
  });

  it('Should match with a snapshot', () => {
    const { container } = renderTheme(<CardBank {...data} handleDeleteBank={fn} handleRedirect={fn2} />);
    expect(container).toMatchSnapshot();
  });
});
