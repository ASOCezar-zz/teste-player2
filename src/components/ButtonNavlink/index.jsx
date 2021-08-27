import * as Styled from './styles';

import PropTypes from 'prop-types';

import arrowDown from '../../assets/icons/navlink/arrow-down.svg';
import { useState } from 'react';

export const ButtonNavlink = ({ image = '', text, textOption1, textOption2 }) => {
  const [openList, setOpenList] = useState(false);

  return (
    <Styled.Container
      aria-label={'botão para abrir ' + text}
      openList={openList}
      onClick={() => setOpenList(!openList)}
    >
      <div className="btn-container">
        <button className="see-more">
          <img src={image} aria-label={image} />
          <span>{text}</span>
        </button>
        <div>
          <img src={arrowDown} aria-label="seta para baixo" />
        </div>
      </div>
      <ul className="options" id="options-list" aria-label={'opções para ' + text}>
        <li className="drop-item" aria-labelledby="options">
          <a href="#">{textOption1}</a>
        </li>
        <li className="drop-item">
          <a href="#">{textOption2}</a>
        </li>
      </ul>
    </Styled.Container>
  );
};

ButtonNavlink.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string.isRequired,
  textOption1: PropTypes.string.isRequired,
  textOption2: PropTypes.string.isRequired,
};
