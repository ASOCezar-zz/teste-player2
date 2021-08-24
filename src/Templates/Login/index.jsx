import * as Styled from './styles';
import loginLogo from '../../assets/logos/login-logo.svg';
import errorIcon from '../../assets/icons/errorField-icon.svg';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import jwt from 'jsonwebtoken';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { UserContext } from '../../contexts/UserProvider/context';
import * as types from '../../contexts/UserProvider/types';
import { useState } from 'react';

export const Login = () => {
  const userContext = useContext(UserContext);
  const history = useHistory();

  const [isEmailBlank, setIsEmailBlank] = useState(false);
  const [isPasswordBlank, setIsPasswordBlank] = useState(false);

  const handleSubmit = (values) => {
    const token = jwt.sign(values, values.email, {
      expiresIn: 5000,
    });
    const userValues = { ...values, token };
    userContext.userDispatch({ type: types.SET_USER_DATA, payload: userValues });
    history.push('/');
  };

  const validations = yup.object().shape({
    email: yup.string().email('Insira um e-mail válido').required('Insira seu e-mail aqui'),
    password: yup.string().min(8, 'Senha muito curta!').required('Insira sua senha aqui'),
  });

  return (
    <Styled.Container isEmailBlank={isEmailBlank} isPasswordBlank={isPasswordBlank}>
      <div className="logo">
        <img src={loginLogo} />
      </div>
      <div className="login-title">
        <h2>Dispare mensagens quando e para quem você quiser.</h2>
      </div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validations}
      >
        {({ errors, touched }) => {
          setIsEmailBlank(errors.email);
          setIsPasswordBlank(errors.password);
          return (
            <Form autoComplete="off">
              <div className="form-group">
                <label htmlFor="email" className="field-label">
                  E-mail
                </label>
                <Field name="email" className="form-field" id="email" placeholder="E-mail" />
                {errors.email && touched.email ? (
                  <ErrorMessage name="email">
                    {() => (
                      <div className="form-error">
                        <img src={errorIcon} />
                        <p>{errors.email}</p>
                      </div>
                    )}
                  </ErrorMessage>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="password" className="field-label">
                  Senha
                </label>
                <Field name="password" className="form-field" id="password" placeholder="Senha" />
                {errors.password && touched.password ? (
                  <ErrorMessage name="password">
                    {() => (
                      <div className="form-error">
                        <img src={errorIcon} />
                        <p>{errors.password}</p>
                      </div>
                    )}
                  </ErrorMessage>
                ) : null}
              </div>
              <button className="btn-login" type="submit">
                Entrar
              </button>
            </Form>
          );
        }}
      </Formik>
      <footer className="register">
        <span className="register-text">
          Não tem uma conta? &nbsp;
          <a href="#" className="registration-link">
            Cadastre-se
          </a>
        </span>
      </footer>
    </Styled.Container>
  );
};
