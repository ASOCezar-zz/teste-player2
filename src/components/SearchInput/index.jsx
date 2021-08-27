import * as Styled from './styles';

import PropTypes from 'prop-types';

import searchIcon from '../../assets/icons/search-icon.svg';
import clearIcon from '../../assets/icons/cleanField-icon.svg';
import { useState } from 'react';

export const SearchInput = ({ reference, clearField, handleChange, searchValue = '' }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Styled.Container isFocused={isFocused}>
      <input
        type="text"
        name="search"
        placeholder="Digite o nome do banco"
        ref={reference}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button>
        {searchValue ? (
          <img
            src={clearIcon}
            style={{ width: '14px', height: '14px', top: '17px' }}
            alt="limpar o campo de busca"
            onClick={clearField}
          />
        ) : (
          <img src={searchIcon} alt="lupa para procurar por bancos" />
        )}
      </button>
    </Styled.Container>
  );
};

SearchInput.propTypes = {
  reference: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  clearField: PropTypes.func.isRequired,
  searchValue: PropTypes.string,
};
