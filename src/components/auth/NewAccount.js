import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const NewAccount = (props) => {
  const alertaContext = useContext(AlertContext);
  const { alert, displayAlert } = alertaContext;

  const authContext = useContext(AuthContext);
  const { authenticated, message, addUser } = authContext;

  //* States here
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmpsw: '',
  });

  //* variables here
  const { name, email, password, confirmpsw } = user;

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
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirmpsw.trim() === ''
    ) {
      displayAlert('All fields are required', 'alerta-error');
      return;
    }

    if (password < 6) {
      displayAlert(
        'The password has to be at least 6 characters',
        'alerta-error'
      );
      return;
    }

    if (password !== confirmpsw) {
      displayAlert('The password did not match', 'alerta-error');
      return;
    }

    addUser({
      name,
      email,
      password,
    });
  };

  return (
    <div className='form-usuario'>
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.msg}</div>
      ) : null}
      <div className='contenedor-form sombra-dark'>
        <h1>Create new account</h1>
        <form onSubmit={handleSubmit}>
          <div className='campo-form'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Your Name'
              value={name}
              onChange={handleChange}
            />
          </div>
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
            <label htmlFor='confirmpsw'>Password</label>
            <input
              type='password'
              id='confirmpsw'
              name='confirmpsw'
              placeholder='Confirm Password'
              value={confirmpsw}
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
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
