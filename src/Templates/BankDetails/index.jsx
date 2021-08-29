import * as Styled from './styles';

import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import nookies from 'nookies';

import backArrow from '../../assets/icons/back-arrow.svg';
import pencilIcon from '../../assets/icons/pencil-icon.svg';

import { Header } from '../../components/Header';

import { NavBar } from '../../components/NavBar';
import { MessagesContainer } from '../../components/MessagesContainer';

export const BankDetails = (context) => {
  const history = useHistory();
  const { id } = useParams();

  const [bank, setBank] = useState([]);

  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;

  useEffect(() => {
    !token && history.push('/login');

    //eslint-disable-next-line
  }, [token]);

  const handleBackToHome = () => {
    history.goBack();
  };

  const handleLogout = () => {
    nookies.destroy(null, 'USER_TOKEN');
    history.push('/login');
  };

  useEffect(() => {
    document.title = `informe-se | Carregando ...`;
    fetch(`https://brasilapi.com.br/api/banks/v1/${id}`)
      .then((res) => res.json())
      .then((res) => setBank(res))
      .catch((err) => console.error(err.message));
  }, [id]);

  document.title = `informe-se | ${bank.name}`;

  if (token) {
    return (
      <Styled.Container>
        <NavBar handleLogout={handleLogout} />
        <Header
          pageTitle={
            <>
              <img src={backArrow} />
              <h3>{bank.name}</h3>
            </>
          }
          buttonContent={
            <p>
              <img src={pencilIcon} /> Editar Banco
            </p>
          }
          handleClick={handleBackToHome}
        />
        <main>
          <div className="main-content">
            <div className="bank-details">
              <h3 className="header-title">Detalhes do Banco</h3>
              <h4 className="section-title">{bank.fullName}</h4>
              <h4 className="section-subtitle">Título</h4>
              <h4 className="section-title">Code: {bank.code}</h4>
              <h4 className="section-subtitle">24/08/2021</h4>
              <h4 className="section-title">IPSB: {bank.ispb}</h4>
              <h4 className="section-subtitle">8:30</h4>
            </div>
            <MessagesContainer />
          </div>
        </main>
      </Styled.Container>
    );
  } else {
    return null;
  }
};
