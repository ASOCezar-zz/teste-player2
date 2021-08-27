import PropTypes from 'prop-types';

import notifications from './dataNotifications';

import withNotificationIcon from '../../assets/icons/withNotification-icon.svg';
import withoutNotificationIcon from '../../assets/icons/withoutNotification-icon.svg';
import arrowDownIcon from '../../assets/icons/arrowDown-icon.svg';
import { Button } from '../Button';

import * as Styled from './styles';

export const Header = ({ pageTitle, handleClick = undefined }) => {
  return (
    <Styled.Container>
      <div onClick={handleClick} className="page-title">
        <div className="top-page">
          <div className="title-content">{pageTitle}</div>
        </div>
      </div>
      <div className="funcionalities">
        <Button text="+ Criar Banco" />
        {notifications.length > 0 ? (
          <img src={withNotificationIcon} className="notification-button" alt="icone com notificações" />
        ) : (
          <img src={withoutNotificationIcon} className="notification-button" alt="icone sem notificações" />
        )}

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
