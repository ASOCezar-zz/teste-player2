import { screen } from '@testing-library/react';
import { FormSection } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<FormSection />', () => {
  it('Should render', () => {
    renderTheme(<FormSection />);
    expect(screen.getByRole('heading')).toBeInTheDocument;
  });
});
