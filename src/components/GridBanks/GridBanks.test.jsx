import { screen } from '@testing-library/react';
import { GridBanks } from '.';
import { renderTheme } from '../../styles/renderTheme';

import data from './mock';

const fn1 = jest.fn();
const fn2 = jest.fn();

describe('<GridBanks />', () => {
  it('Should not render a grid when dont have an array', () => {
    const { container } = renderTheme(<GridBanks array={undefined} handleDeleteBank={fn1} handleRedirect={fn2} />);
    expect(screen.queryByLabelText('card')).not.toBeInTheDocument;
    expect(container).toMatchSnapshot();
  });

  it('Should render a grid when dont have an array', () => {
    renderTheme(<GridBanks array={data} handleDeleteBank={fn1} handleRedirect={fn2} />);
    expect(screen.getAllByLabelText('card com informações do banco').length).toBe(data.length);
  });

  it('Should match with a snapshot', () => {
    const { container } = renderTheme(<GridBanks array={data} handleDeleteBank={fn1} handleRedirect={fn2} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
