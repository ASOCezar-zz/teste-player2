import PropTypes from 'prop-types';

import logoMenu from '../../assets/logos/logo-menu.svg';
import { NavigationLink } from '../NavigationLink';

import * as Styled from './styles';

export const Header = ({ menuOpen, setMenuOpen, pageTitle, handleClick = undefined }) => {
  return (
    <Styled.Container>
      <header>
        <button className="btn-open-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={logoMenu} alt="botão do menu" />
        </button>
        <div onClick={handleClick} className="page-title">
          <span>{pageTitle}</span>
        </div>
      </header>
      <NavigationLink isOpen={menuOpen} />
    </Styled.Container>
  );
};

Header.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  pageTitle: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
};
