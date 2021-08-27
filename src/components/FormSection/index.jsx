import * as Styled from './styles';

import { FormLogin } from '../FormLogin';
import loginLogo from '../../assets/logos/login-logo.svg';

export const FormSection = () => (
  <Styled.Container>
    <div className="logo">
      <img src={loginLogo} />
    </div>
    <div className="login-title">
      <h2>Dispare mensagens quando e para quem você quiser.</h2>
    </div>
    <FormLogin />
    <div className="register">
      <span className="register-text">
        Não tem uma conta? &nbsp;
        <a href="#" className="registration-link">
          Cadastre-se
        </a>
      </span>
    </div>
    <footer>
      <span>Copyright © 2010-2021 - Informem-se Company S.L. All rights reserved.</span>
    </footer>
  </Styled.Container>
);
