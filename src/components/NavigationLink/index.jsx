import PropTypes from 'prop-types';

import * as Styled from './styles';

import logoNavlink from '../../assets/logos/logo-navlink.svg';
import homeIcon from '../../assets/icons/navlink/home.svg';
import groupsIcon from '../../assets/icons/navlink/groups.svg';
import logoutIcon from '../../assets/icons/navlink/logout.svg';
import megaphoneIcon from '../../assets/icons/navlink/megaphone.svg';
import groupIcon from '../../assets/icons/navlink/group.svg';
import { ButtonNavlink } from '../ButtonNavlink';

export const NavigationLink = ({ isOpen, onMouseOver, onMouseLeave, handleLogout }) => (
  <Styled.Container isOpen={isOpen} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} aria-label="menu lateral">
    {isOpen ? (
      <>
        <div className="navlink-title" aria-label="menu lateral aberto">
          <img src={logoNavlink} />
        </div>
        <div className="content">
          <a href="#" aria-label="Início">
            <img src={homeIcon} />
            <span>Início</span>
          </a>
          <ButtonNavlink image={homeIcon} text="Disparos" textOption1="Disparos" textOption2="Criar Disparo" />
          <ButtonNavlink image={groupsIcon} text="Grupos" textOption1="Lista de Grupos" textOption2="Criar Grupo" />
          <ButtonNavlink image={groupsIcon} text="Contatos" textOption1="Contatos" textOption2="Adicionar Contatos" />
          <a onClick={handleLogout} aria-label="Sair">
            <img src={logoutIcon} />
            <span>Sair</span>
          </a>
        </div>
      </>
    ) : (
      <>
        <div className="content" aria-label="menu lateral fechado">
          <a href="#" aria-label="Início">
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
          <a>
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
  handleLogout: PropTypes.func.isRequired,
};
