import { useEffect, useState } from 'react';
// import { useContext, useEffect } from 'react';
// import { useHistory } from 'react-router';
import { CardBank } from '../../components/CardBank';
// import { UserContext } from '../../contexts/UserProvider/context';

import * as Styled from './styles';

import logoMenu from '../../assets/logos/logo-menu.svg';
import searchIcon from '../../assets/icons/search-icon.svg';
import { NavLink } from '../../components/NavLink';

export const Home = () => {
  // const history = useHistory();

  const [banks, setBanks] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchBanks, setSearchBanks] = useState([]);

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

  // if (token) {
  return (
    <Styled.Container>
      <header>
        <button className="btn-open-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={logoMenu} alt="botão do menu" />
        </button>
        <div className="page-title">
          <h2>Bancos</h2>
        </div>
      </header>
      <NavLink isOpen={menuOpen} />
      <main>
        <div className="section-title">
          <h3>Bancos </h3>
          <h4>{banks.length} bancos</h4>
        </div>
        <div className="search">
          <input type="text" name="search" placeholder="Digite o nome do banco" onChange={handleChange} />
          <button>
            <img src={searchIcon} alt="lupa para procurar por bancos" />
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
  );
  // } else {
  //   history.push('/login');
  //   return null;
  // }
};
