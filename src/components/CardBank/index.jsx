import * as Styled from './styles';
import PropTypes from 'prop-types';

import optionsIcon from '../../assets/cards_imgs/options.svg';
import arrowRight from '../../assets/cards_imgs/arrow_right.svg';
import connections from '../../assets/cards_imgs/connections.svg';
import icon from '../../assets/cards_imgs/main.svg';
import deleteIcon from '../../assets/icons/delete-icon.svg';

import { useState } from 'react';
import { useHistory } from 'react-router';

export const CardBank = ({ name, code = null, ispb }) => {
  const history = useHistory();

  const [openOptions, setOpenOptions] = useState(false);

  const handleRedirect = (code) => {
    !!code && history.push(`/messages/${code}/#`);
  };

  return (
    <Styled.Container openOptions={openOptions}>
      <div className="head-card">
        <div className="dispatching-card">
          <label>Disparando agora ...</label>
          <img src={arrowRight} />
        </div>
        <div className="profiles-card">
          <img src={connections} />
          <span>23</span>
        </div>
        <div className="options-card">
          <button className="btn-options" onClick={() => setOpenOptions(!openOptions)}>
            <div className="tooltip">
              <div className="tooltip-text">
                <img src={deleteIcon} />
                <p>Deletar Banco</p>
              </div>
            </div>
            <img src={optionsIcon} />
          </button>
        </div>
      </div>
      <div className="content-card" onClick={() => handleRedirect(code)}>
        <div className="img-content-card">
          <img src={icon} />
        </div>
        <div className="txt-content-card">
          <h4>
            {name} - {code}
          </h4>
          <h4>ISPB: {ispb}</h4>
        </div>
      </div>
    </Styled.Container>
  );
};

CardBank.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.number,
  ispb: PropTypes.string.isRequired,
};
