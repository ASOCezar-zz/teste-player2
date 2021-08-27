import { useEffect, useState } from 'react';
import nookies from 'nookies';

import * as Styled from './styles';

import { useRef } from 'react';
import { Header } from '../../components/Header';
import { useHistory } from 'react-router';
import { NavBar } from '../../components/NavBar';
import { Loading } from '../../components/Loading';
import { SearchInput } from '../../components/SearchInput';
import { GridBanks } from '../../components/GridBanks';

export const Home = (context) => {
  const [banks, setBanks] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchBanks, setSearchBanks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;

  const searchField = useRef();

  useEffect(() => {
    !token && history.push('/login');

    //eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://brasilapi.com.br/api/banks/v1')
      .then((res) => res.json())
      .then((res) => setBanks(res))
      .then(() => setIsLoading(false))
      .catch((err) => console.error(err.message));
  }, []);

  const handleDeleteBank = (ispb) => {
    setBanks(banks.filter((bank) => bank.ispb !== ispb));
    setSearchBanks(searchBanks.filter((bank) => bank.ispb !== ispb));
  };

  const handleRedirect = (code) => {
    !!code && history.push(`/messages/${code}/#`);
  };

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
      <Styled.Container>
        <NavBar />
        <Header pageTitle={<h2>Bancos</h2>} />
        <main>
          <div className="section-top">
            <div className="section-title">
              <h3>Bancos </h3>
              <h4>{isLoading ? 'Carregando ...' : banks.length + ' bancos'}</h4>
            </div>
            <SearchInput
              handleChange={handleChange}
              clearField={clearField}
              reference={searchField}
              searchValue={searchValue}
            />
          </div>
          <div className="section-content">
            {isLoading ? (
              <Loading />
            ) : searchValue ? (
              <>
                <h2>Resultados para {searchValue}</h2>
                <GridBanks
                  array={searchBanks}
                  banks={banks}
                  searchBanks={searchBanks}
                  setBanks={setBanks}
                  setSearchBanks={setSearchBanks}
                  handleDeleteBank={handleDeleteBank}
                  handleRedirect={handleRedirect}
                />
              </>
            ) : (
              <div className="grid-banks">
                <GridBanks
                  array={banks}
                  banks={banks}
                  searchBanks={searchBanks}
                  setBanks={setBanks}
                  setSearchBanks={setSearchBanks}
                  handleDeleteBank={handleDeleteBank}
                  handleRedirect={handleRedirect}
                />
              </div>
            )}
          </div>
        </main>
      </Styled.Container>
    );
  } else {
    return null;
  }
};
