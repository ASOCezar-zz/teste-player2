import PropTypes from 'prop-types';

import withNotificationIcon from '../../assets/icons/withNotification-icon.svg';
import arrowDownIcon from '../../assets/icons/arrowDown-icon.svg';
import { Button } from '../Button';

import * as Styled from './styles';
import { NavBar } from '../NavBar';

export const Header = ({ pageTitle, handleClick = undefined }) => {
  return (
    <Styled.Container>
      <NavBar />
      <header>
        <div onClick={handleClick} className="page-title">
          <span>{pageTitle}</span>
        </div>
        <div className="funcionalities">
          <Button text="+ Criar Banco" />
          <img src={withNotificationIcon} />
          <button className="btn-profile">
            <p>
              Olá, <strong>Beleza Rara</strong>
            </p>
            <img src={arrowDownIcon} />
          </button>
        </div>
      </header>
    </Styled.Container>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
};
