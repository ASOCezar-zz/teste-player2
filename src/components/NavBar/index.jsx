import * as Styled from './styles';

import { useState } from 'react';
import { NavigationLink } from '../NavigationLink';

import PropTypes from 'prop-types';

import logoMenu from '../../assets/logos/logo-menu.svg';
import homeIcon from '../../assets/icons/navlink/home.svg';
import megaphoneIcon from '../../assets/icons/navlink/megaphone.svg';
import groupsIcon from '../../assets/icons/navlink/groups.svg';
import groupIcon from '../../assets/icons/navlink/group.svg';
import logoutIcon from '../../assets/icons/navlink/logout.svg';

export const NavBar = ({ handleLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Styled.Container menuOpen={menuOpen}>
        <button className="btn-open-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={logoMenu} alt="botão do menu" />
        </button>
        <div className="options-group">
          <img src={homeIcon} />
          <img src={megaphoneIcon} />
          <img src={groupsIcon} />
          <img src={groupIcon} />
        </div>
        <div className="options-logout">
          <img src={logoutIcon} />
        </div>
      </Styled.Container>
      <NavigationLink
        isOpen={menuOpen}
        setIsOpen={setMenuOpen}
        onMouseOver={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
        handleLogout={handleLogout}
      />
    </>
  );
};

NavBar.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};
