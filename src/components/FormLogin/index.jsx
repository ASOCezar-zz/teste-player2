import { useState } from 'react';
import { useRef } from 'react';
import PropTypes from 'prop-types';

import iconError from '../../assets/icons/errorField-icon.svg';

import * as Styled from './styles';

export const FormLogin = ({ authenticate }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail) {
      setIsEmailInvalid(false);
    }
    if (validPassword) {
      setIsPasswordInvalid(false);
    }
    if (validEmail && validPassword) {
      const email = emailValue.current?.value;
      const password = passwordValue.current?.value;
      authenticate(email, password);
    } else if (!validEmail) {
      setIsEmailInvalid(true);
    } else {
      setIsPasswordInvalid(true);
    }
  };

  return (
    <Styled.Container isEmailInvalid={isEmailInvalid} isPasswordInvalid={isPasswordInvalid}>
      <form aria-label="formulário de login">
        <div className="form-group">
          <label className="field-label" htmlFor="email">
            Email
          </label>
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
            name="senha"
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

FormLogin.propTypes = {
  authenticate: PropTypes.func.isRequired,
};
