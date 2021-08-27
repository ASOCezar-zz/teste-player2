import { screen } from '@testing-library/react';
import { Button } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<Button />', () => {
  it('Should render a deafault button', () => {
    renderTheme(<Button text="button">children</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument;

    expect(screen.getByRole('button')).toMatchInlineSnapshot(`
      <button>
        <img
          src=""
        />
        <p>
          button
        </p>
      </button>
    `);
  });
});
