import { screen } from '@testing-library/react';
import { NavigationLink } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<NavigationLink />', () => {
  it('Should render', () => {
    renderTheme(<NavigationLink>children</NavigationLink>);
  });
});
