import React, { useReducer } from 'react';
import authReducer from './authReducer';
import authContext from './authContext';
import axiosClient from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

import {
  REGISTRY_SUCCESS,
  REGISTRY_ERROR,
  GET_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGN_OFF,
} from '../../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    user: null,
    message: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //functions

  const addUser = async (datos) => {
    try {
      const response = await axiosClient.post('/api/user', datos);

      dispatch({
        type: REGISTRY_SUCCESS,
        payload: response.data,
      });

      returnUserAuthenticated();
    } catch (error) {
      //console.log(error.response.data.msg);
      const alert = {
        msg: error.response.data.msg,
        category: 'alerta-error',
      };
      dispatch({
        type: REGISTRY_ERROR,
        payload: alert,
      });
    }
  };

  const returnUserAuthenticated = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      //function to sent the token by headers
      tokenAuth(token);
    }

    try {
      const response = await axiosClient.get('/api/auth');

      dispatch({
        type: GET_USER,
        payload: response.data.user,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  //when user log in
  const logIn = async (datos) => {
    try {
      const response = await axiosClient.post('/api/auth', datos);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });

      returnUserAuthenticated();
    } catch (error) {
      //console.log(error.response.data.msg);
      const alert = {
        msg: error.response.data.msg,
        category: 'alerta-error',
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: alert,
      });
    }
  };

  const signOff = () => {
    dispatch({
      type: SIGN_OFF,
    });
  };
  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        loading: state.loading,
        addUser,
        logIn,
        returnUserAuthenticated,
        signOff,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
