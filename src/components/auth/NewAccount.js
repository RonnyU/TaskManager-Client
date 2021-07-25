import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {
  //* States here
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmpsw: '',
  });

  //* variables here
  const { name, email, password, confirmpsw } = user;

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
