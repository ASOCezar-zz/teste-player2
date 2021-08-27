import * as Styled from './styles';

import loginImage from '../../assets/images/login-image.svg';
import { FormSection } from '../../components/FormSection';

export const Login = () => {
  return (
    <Styled.Container>
      <FormSection />
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
