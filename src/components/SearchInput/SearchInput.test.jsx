import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchInput } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

const fn = jest.fn();
const fn2 = jest.fn();

describe('<SearchInput />', () => {
  it('Should call a function when user types', () => {
    renderTheme(<SearchInput reference={undefined} clearField={fn} handleChange={fn2} />);

    userEvent.type(screen.getByRole('textbox'), 'olá');
    expect(fn2).toBeCalledTimes(3);
  });

  it('Should render a magnifying glass to search input', () => {
    renderTheme(<SearchInput reference={undefined} clearField={fn} handleChange={fn2} searchValue="" />);

    expect(screen.getByAltText('lupa para procurar por bancos')).toBeInTheDocument();
  });

  it('Should render a clear icon to search input', () => {
    renderTheme(<SearchInput reference={undefined} clearField={fn} handleChange={fn2} searchValue="dasda" />);

    expect(screen.getByAltText('limpar o campo de busca')).toBeInTheDocument();
  });

  it('Should call a function when clicks on clear field', () => {
    renderTheme(<SearchInput reference={undefined} clearField={fn} handleChange={fn2} searchValue="dasda" />);

    userEvent.click(screen.getByAltText('limpar o campo de busca'));
    expect(fn).toBeCalledTimes(1);
  });

  it('Should call a function when user clicks on input', () => {
    const { container } = renderTheme(
      <SearchInput reference={undefined} clearField={fn} handleChange={fn2} searchValue="sas" />,
    );

    const input = screen.getByRole('textbox');

    userEvent.click(input);
    expect(container.firstChild).toHaveStyle({ border: `1px solid ${theme.colors.green}` });

    userEvent.click(screen.getByAltText('limpar o campo de busca'));
    expect(container.firstChild).toHaveStyle({ border: `1px solid ${theme.colors.darkGray}` });
  });

  it('Should match with snapshot', () => {
    const { container } = renderTheme(
      <SearchInput reference={undefined} clearField={fn} handleChange={fn2} searchValue="sas" />,
    );

    expect(container).toMatchSnapshot();
  });
});
