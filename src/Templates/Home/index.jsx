import { useContext } from 'react';
import { UserContext } from '../../contexts/UserProvider/context';
import './styles';

export const Home = () => {
  const userContext = useContext(UserContext);
  const {
    userState: { email, password },
  } = userContext;

  return (
    <div>
      <h1>{email}</h1>
      <h1>{password}</h1>
    </div>
  );
};
