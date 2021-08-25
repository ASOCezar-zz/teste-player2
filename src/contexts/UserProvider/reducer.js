import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_USER_DATA: {
      console.log('As infos do usuário foram setadas');
      return { email: action.payload.email, password: action.payload.password };
    }
  }
};
