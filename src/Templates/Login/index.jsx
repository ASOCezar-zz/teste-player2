import * as Styled from './styles';
import loginLogo from '../../assets/logos/login-logo.svg';
import { FormLogin } from '../../components/FormLogin';

export const Login = () => {
  return (
    <Styled.Container>
      <div className="logo">
        <img src={loginLogo} />
      </div>
      <div className="login-title">
        <h2>Dispare mensagens quando e para quem você quiser.</h2>
      </div>
      <FormLogin />
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
