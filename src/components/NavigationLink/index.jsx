import PropTypes from 'prop-types';

import * as Styled from './styles';

import logoNavlink from '../../assets/logos/logo-navlink.svg';
import homeIcon from '../../assets/icons/navlink/home.svg';
import groupsIcon from '../../assets/icons/navlink/groups.svg';
import logoutIcon from '../../assets/icons/navlink/logout.svg';
import arrowDown from '../../assets/icons/navlink/arrow-down.svg';
import megaphoneIcon from '../../assets/icons/navlink/megaphone.svg';
import groupIcon from '../../assets/icons/navlink/group.svg';

export const NavigationLink = ({ isOpen, onMouseOver, onMouseLeave }) => (
  <Styled.Container isOpen={isOpen} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
    {isOpen ? (
      <>
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
      </>
    ) : (
      <>
        <div className="content">
          <a href="#">
            <img src={homeIcon} />
          </a>
          <a href="#">
            <img src={megaphoneIcon} />
          </a>
          <a href="#">
            <img src={groupsIcon} />
          </a>
          <a href="#">
            <img src={groupIcon} />
          </a>
          <a href="/login">
            <img src={logoutIcon} />
          </a>
        </div>
      </>
    )}
  </Styled.Container>
);

NavigationLink.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
};
