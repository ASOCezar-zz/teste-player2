import { useEffect, useState } from 'react';
// import { useContext, useEffect } from 'react';
// import { useHistory } from 'react-router';
import { CardBank } from '../../components/CardBank';
// import { UserContext } from '../../contexts/UserProvider/context';

import * as Styled from './styles';

import searchIcon from '../../assets/icons/search-icon.svg';
import clearIcon from '../../assets/icons/cleanField-icon.svg';

import { useRef } from 'react';
import { Header } from '../../components/Header';

export const Home = () => {
  // const history = useHistory();

  const [banks, setBanks] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchBanks, setSearchBanks] = useState([]);

  const searchField = useRef();

  // const userContext = useContext(UserContext);
  // const {
  //   userState: { token },
  // } = userContext;

  useEffect(() => {
    fetch('https://brasilapi.com.br/api/banks/v1')
      .then((res) => res.json())
      .then((res) => setBanks(res));
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

  // if (token) {
  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} pageTitle={<h2>Bancos</h2>} />
      <Styled.Container>
        <main>
          <div className="section-title">
            <h3>Bancos </h3>
            <h4>{banks.length} bancos</h4>
          </div>
          <div className="search">
            <input
              type="text"
              name="search"
              placeholder="Digite o nome do banco"
              ref={searchField}
              onChange={handleChange}
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
          {searchValue ? (
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
    </>
  );
  // } else {
  //   history.push('/login');
  //   return null;
  // }
};
