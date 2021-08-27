import * as Styled from './styles';

import PropTypes from 'prop-types';

import searchIcon from '../../assets/icons/search-icon.svg';
import clearIcon from '../../assets/icons/cleanField-icon.svg';
import { useState } from 'react';

export const SearchInput = ({ banks = [], reference, searchValue = '', setSearchValue, setSearchBanks }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    searchValue
      ? setSearchBanks(banks.filter((bank) => bank.name.toLowerCase().includes(searchValue.toLowerCase())))
      : banks;
  };

  const clearField = () => {
    reference.current.value = '';
    setSearchValue('');
  };

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
  banks: PropTypes.array,
  reference: PropTypes.object.isRequired,
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func.isRequired,
  setSearchBanks: PropTypes.func.isRequired,
};
