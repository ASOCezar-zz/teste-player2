import { screen } from '@testing-library/react';
import { FormSection } from '.';
import { renderTheme } from '../../styles/renderTheme';

const fn = jest.fn();

describe('<FormSection />', () => {
  it('Should render a section with logo and formulary', () => {
    renderTheme(<FormSection authenticate={fn} />);
    expect(screen.getByLabelText('logo da informe-se')).toBeInTheDocument;
  });
  it('Should match with a snapshot', () => {
    const { container } = renderTheme(<FormSection authenticate={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
