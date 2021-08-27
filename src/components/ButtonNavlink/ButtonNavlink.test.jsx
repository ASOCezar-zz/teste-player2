import { fireEvent, screen, within } from '@testing-library/react';
import { ButtonNavlink } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<ButtonNavlink />', () => {
  it('Should render a button with only a text ', () => {
    renderTheme(<ButtonNavlink text="button" textOption1="textOption1" textOption2="textOption2" />);
    expect(screen.getByRole('button')).toHaveTextContent('button');
  });
  it('Should render a button with a text and a image inside', () => {
    renderTheme(<ButtonNavlink image="image.svg" text="button" textOption1="textOption1" textOption2="textOption2" />);
    expect(screen.getByRole('button')).toHaveTextContent('button');
    expect(screen.getByLabelText('image.svg')).toBeInTheDocument();
    expect(screen.getByLabelText(/seta para baixo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/opções para button/i)).toHaveStyle({ display: 'none' });
  });
  it('Should open a options list with 2 items when clicked', () => {
    renderTheme(<ButtonNavlink image="image.svg" text="button" textOption1="textOption1" textOption2="textOption2" />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    const list = screen.getByRole('list', { label: /opções para button/i });
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');

    expect(list).toHaveStyle({ display: 'flex' });
    expect(items.length).toBe(2);
  });
  it('Should match with a snapshot', () => {
    renderTheme(<ButtonNavlink text="button" textOption1="textOption1" textOption2="textOption2" />);
    expect(screen.getByRole('button')).toMatchSnapshot();
  });
});
