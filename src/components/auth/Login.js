import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const Login = (props) => {
  const alertaContext = useContext(AlertContext);
  const { alert, displayAlert } = alertaContext;

  const authContext = useContext(AuthContext);
  const { authenticated, message, logIn } = authContext;

  //* States here
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  //* variables here
  const { email, password } = user;

  useEffect(() => {
    if (authenticated) {
      props.history.push('/projects');
    }
    if (message) {
      displayAlert(message.msg, message.category);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, authenticated, props.history]);

  //* Functions here
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      displayAlert('All fields are required', 'alerta-error');
    }

    logIn({ email, password });
  };

  return (
    <div className='form-usuario'>
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.msg}</div>
      ) : null}
      <div className='contenedor-form sombra-dark'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='campo-form'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Your Email'
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className='campo-form'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Your Password'
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Sign In'
            />
          </div>
        </form>
        <Link to='/new-account' className='enlace-cuenta'>
          Get Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
