import { UserContext } from '../../contexts/UserProvider/context';
import * as types from '../../contexts/UserProvider/types';
import nookies from 'nookies';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { useRef } from 'react';

import iconError from '../../assets/icons/errorField-icon.svg';

import * as Styled from './styles';

export const FormLogin = () => {
  const userContext = useContext(UserContext);
  const history = useHistory();

  const emailInput = useRef();
  const passwordInput = useRef();

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

  const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailValue,
    );

  const validPassword = passwordValue.length >= 6;

  function authenticate() {
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
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail) {
      setIsEmailInvalid(false);
    }
    if (validPassword) {
      setIsPasswordInvalid(false);
    }
    if (validEmail && validPassword) {
      authenticate();
      userContext.userDispatch({
        type: types.SET_USER_DATA,
        payload: { email: emailValue.current?.value, password: passwordValue.current?.value },
      });
    } else if (!validEmail) {
      setIsEmailInvalid(true);
    } else if (!validPassword) {
      setIsPasswordInvalid(true);
    }
  };

  return (
    <Styled.Container isEmailInvalid={isEmailInvalid} isPasswordInvalid={isPasswordInvalid}>
      <form>
        <div className="form-group">
          <label className="field-label">Email</label>
          <input
            autoComplete="off"
            ref={emailInput}
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            required
            className="form-input"
          />
          {isEmailInvalid && (
            <span className="form-error">
              <img src={iconError} /> <p>Insira um e-mail aqui</p>
            </span>
          )}
          <label className="field-label" htmlFor="password">
            Senha
          </label>
          <input
            ref={passwordInput}
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            required={true}
            className="form-input"
          />
          {isPasswordInvalid && (
            <span className="form-error">
              <img src={iconError} /> <p>Insira sua senha aqui</p>
            </span>
          )}
        </div>
        <button className="btn-login" type="submit" onClick={(e) => handleSubmit(e)}>
          Entrar
        </button>
      </form>
    </Styled.Container>
  );
};
