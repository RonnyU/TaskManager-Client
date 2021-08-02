/* eslint-disable import/no-anonymous-default-export */
import {
  REGISTRY_SUCCESS,
  REGISTRY_ERROR,
  GET_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGN_OFF,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTRY_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        authenticated: true,
        message: null,
        loading: false,
      };

    case SIGN_OFF:
    case LOGIN_ERROR:
    case REGISTRY_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        authenticated: null,
        message: action.payload,
        loading: false,
      };

    case GET_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
