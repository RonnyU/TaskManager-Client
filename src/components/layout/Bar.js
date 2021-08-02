import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/authentication/authContext';

const Bar = () => {
  const authContext = useContext(AuthContext);
  const { user, returnUserAuthenticated, signOff } = authContext;

  useEffect(() => {
    returnUserAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className='app-header'>
      {user ? (
        <p className='nombre-usuario'>
          Hi <span>{user.name}</span>
        </p>
      ) : null}

      <nav className='nav-principal'>
        <button
          className='btn btn-blank cerrar-sesion'
          onClick={() => signOff()}
        >
          Sign Off
        </button>
      </nav>
    </header>
  );
};

export default Bar;
