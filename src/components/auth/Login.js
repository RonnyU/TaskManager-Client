import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  //* States here
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  //* variables here
  const { email, password } = user;

  //* Functions here
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='form-usuario'>
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
