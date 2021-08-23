import * as Styled from './styles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserProvider/context';
import * as types from '../../contexts/UserProvider/types';
import { useHistory } from 'react-router-dom';

export const Login = () => {
  const userContext = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = (values) => {
    userContext.userDispatch({ type: types.SET_USER_DATA, payload: values });
    history.push('/');
  };

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  return (
    <div>
      <Styled.Container>
        <h1>Login</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <Form>
            <div className="form-group">
              <ErrorMessage component="span" name="email" className="form-error" />
              <Field name="email" className="form-field" />
            </div>
            <div className="form-group">
              <ErrorMessage component="span" name="password" className="form-error" />
              <Field name="password" className="form-field" />
            </div>
            <button className="btn-login" type="submit">
              Login
            </button>
          </Form>
        </Formik>
      </Styled.Container>
    </div>
  );
};
