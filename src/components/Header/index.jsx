import PropTypes from 'prop-types';

import withNotificationIcon from '../../assets/icons/withNotification-icon.svg';
import arrowDownIcon from '../../assets/icons/arrowDown-icon.svg';
import { Button } from '../Button';

import * as Styled from './styles';

export const Header = ({ pageTitle, handleClick = undefined }) => {
  return (
    <Styled.Container>
      <div onClick={handleClick} className="page-title">
        <div className="top-page">{pageTitle}</div>
      </div>
      <div className="funcionalities">
        <Button text="+ Criar Banco" />
        <img src={withNotificationIcon} className="notification-button" />
        <button className="btn-profile">
          <p>
            Olá, <strong>Beleza Rara</strong>
          </p>
          <img src={arrowDownIcon} />
        </button>
      </div>
    </Styled.Container>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
};
