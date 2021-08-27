import * as Styled from './styles';

import * as types from '../../contexts/UserProvider/types';

import { UserContext } from '../../contexts/UserProvider/context';
import { useContext } from 'react';

import loginImage from '../../assets/images/login-image.svg';
import { FormSection } from '../../components/FormSection';

import { useHistory } from 'react-router';
import nookies from 'nookies';

export const Login = () => {
  const history = useHistory();
  const userContext = useContext(UserContext);

  document.title = 'informe-se | Login';

  const authenticate = (email, password) => {
    userContext.userDispatch({
      type: types.SET_USER_DATA,
      payload: { email: email, password: password },
    });

    fetch('https://alurakut.vercel.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async (res) => {
      const data = await res.json();
      const token = data.token;
      nookies.set(null, 'USER_TOKEN', token, {
        path: '/',
        maxAge: 8640000 * 7,
      });
      history.push('/');
    });
  };

  return (
    <Styled.Container>
      <FormSection authenticate={authenticate} />
      <section className="image-section">
        <div className="imageSection-content">
          <img src={loginImage} className="imageSection-image" />
          <div className="imageSection-text">
            <h2 className="imageSection-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
            <span className="imageSection-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sapien mi, commodo ut pellentesque non,
              fermentum at risus. Sed eu augue sit amet leo scelerisque cursus vitae ac dolor
            </span>
          </div>
        </div>
      </section>
    </Styled.Container>
  );
};
