import { useEffect, useState } from 'react';
// import { useContext, useEffect } from 'react';
// import { useHistory } from 'react-router';
import { CardBank } from '../../components/CardBank';
// import { UserContext } from '../../contexts/UserProvider/context';
import './styles';

export const Home = () => {
  // const history = useHistory();

  const [banks, setBanks] = useState([]);

  // const userContext = useContext(UserContext);
  // const {
  //   userState: { token },
  // } = userContext;

  useEffect(() => {
    fetch('https://brasilapi.com.br/api/banks/v1')
      .then((res) => res.json())
      .then((res) => setBanks(res));
  }, []);

  console.log(banks);

  // if (token) {
  return (
    <div>
      <h2>Bancos</h2>
      <ul>
        {banks.map((bank) => (
          <CardBank key={bank.ispb} name={bank.name} code={bank.code} ispb={bank.ispb} />
        ))}
      </ul>
    </div>
  );
  // } else {
  //   history.push('/login');
  //   return null;
  // }
};
