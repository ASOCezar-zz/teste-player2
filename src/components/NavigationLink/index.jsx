import PropTypes from 'prop-types';

import * as Styled from './styles';

import logoNavlink from '../../assets/logos/logo-navlink.svg';
import homeIcon from '../../assets/icons/navlink/home.svg';
import groupsIcon from '../../assets/icons/navlink/groups.svg';
import logoutIcon from '../../assets/icons/navlink/logout.svg';
import arrowDown from '../../assets/icons/navlink/arrow-down.svg';

export const NavigationLink = ({ isOpen }) => (
  <Styled.Container isOpen={isOpen}>
    <div className="navlink-title">
      <img src={logoNavlink} />
    </div>
    <div className="content">
      <a href="#">
        <img src={homeIcon} />
        <span>Início</span>
      </a>
      <div className="see-more">
        <div>
          <a href="#">
            <img src={homeIcon} />
            <span>Disparos</span>
          </a>
        </div>
        <div>
          <img src={arrowDown} />
        </div>
      </div>
      <div className="see-more">
        <div>
          <a href="#">
            <img src={groupsIcon} />
            <span>Grupos</span>
          </a>
        </div>
        <div>
          <img src={arrowDown} />
        </div>
      </div>
      <div className="see-more">
        <div>
          <a href="#">
            <img src={groupsIcon} />
            <span>Contatos</span>
          </a>
        </div>
        <div>
          <img src={arrowDown} />
        </div>
      </div>
      <a href="/login">
        <img src={logoutIcon} />
        <span>Sair</span>
      </a>
    </div>
  </Styled.Container>
);

NavigationLink.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
