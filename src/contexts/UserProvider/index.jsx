import { UserContext } from './context';
import PropTypes from 'prop-types';
import { reducer } from './reducer';
import { userData } from './data';
import { useReducer } from 'react';

export const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(reducer, userData);

  return <UserContext.Provider value={{ userState, userDispatch }}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
