import * as Styled from './styles';
import loginLogo from '../../assets/logos/login-logo.svg';
import { FormLogin } from '../../components/FormLogin';
import loginImage from '../../assets/images/login-image.svg';

export const Login = () => {
  return (
    <Styled.Container>
      <section className="form-section">
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
      </section>
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
