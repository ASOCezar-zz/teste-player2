import PropTypes from 'prop-types';

import * as Styled from './styles';

export const Button = ({ image = '', text }) => (
  <Styled.Container>
    <button>
      <img src={image} />
      <p>{text}</p>
    </button>
  </Styled.Container>
);

Button.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string.isRequired,
};
