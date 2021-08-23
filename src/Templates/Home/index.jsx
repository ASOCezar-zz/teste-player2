import { useHistory } from 'react-router';
import jwt_decode from 'jwt-decode';
import './styles';

export const Home = () => {
  const history = useHistory();

  const token = localStorage.getItem('token');

  if (token) {
    const decoded = jwt_decode(token);
    return (
      <div>
        <h1>{decoded.email}</h1>
        <h1>{decoded.password}</h1>
      </div>
    );
  } else {
    history.push('/login');
    return null;
  }
};
