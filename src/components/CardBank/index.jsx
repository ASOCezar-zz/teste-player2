import * as Styled from './styles';
import PropTypes from 'prop-types';

export const CardBank = ({ name, code = null, ispb }) => (
  <Styled.Container>
    <div className="head-card">
      <div className="dispatching-card">
        <label>Disparando agora ...</label>
        <img></img>
      </div>
      <div className="profiles-card">
        <img></img>
        <span>23</span>
      </div>
      <div className="options-card">
        <button className="btn-options">
          <img></img>
        </button>
      </div>
    </div>
    <div className="content-card">
      <div className="img-content-card">
        <img></img>
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

CardBank.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.number,
  ispb: PropTypes.string.isRequired,
};
