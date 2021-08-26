import { useEffect, useState } from 'react';
import nookies from 'nookies';

import { CardBank } from '../../components/CardBank';

import * as Styled from './styles';

import searchIcon from '../../assets/icons/search-icon.svg';
import clearIcon from '../../assets/icons/cleanField-icon.svg';

import { useRef } from 'react';
import { Header } from '../../components/Header';
import { useHistory } from 'react-router';
import { NavBar } from '../../components/NavBar';
import { Loading } from '../../components/Loading';

export const Home = (context) => {
  const [banks, setBanks] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchBanks, setSearchBanks] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;

  const searchField = useRef();

  useEffect(() => {
    setIsLoading(true);
    fetch('https://brasilapi.com.br/api/banks/v1')
      .then((res) => res.json())
      .then((res) => setBanks(res))
      .then(() => setIsLoading(false));
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    searchValue
      ? setSearchBanks(banks.filter((bank) => bank.name.toLowerCase().includes(searchValue.toLowerCase())))
      : banks;
  };

  const clearField = () => {
    searchField.current.value = '';
    setSearchValue('');
  };

  if (token) {
    return (
      <Styled.Container isFocused={isFocused}>
        <NavBar />
        <Header pageTitle={<h2>Bancos</h2>} />
        <main>
          <div className="section-title">
            <h3>Bancos </h3>
            <h4>{isLoading ? 'Carregando ...' : banks.length + ' bancos'}</h4>
          </div>
          <div className="search" id="search-input">
            <input
              type="text"
              name="search"
              placeholder="Digite o nome do banco"
              ref={searchField}
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
          </div>
          {isLoading ? (
            <div className="loading">
              <Loading />
            </div>
          ) : searchValue ? (
            <>
              <h2>Resultados para {searchValue}</h2>
              <div className="grid-banks">
                <div className="grid-banks">
                  {searchBanks.map((bank) => (
                    <CardBank key={bank.ispb} name={bank.name} code={bank.code} ispb={bank.ispb} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="grid-banks">
              {banks.map((bank) => (
                <CardBank key={bank.ispb} name={bank.name} code={bank.code} ispb={bank.ispb} />
              ))}
            </div>
          )}
        </main>
      </Styled.Container>
    );
  } else {
    history.push('/login');
    return null;
  }
};
