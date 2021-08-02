import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Bar from '../layout//Bar';
import TaskForm from '../tasks/TaskForm';
import TaskList from '../tasks/TaskList';
import AuthContext from '../../context/authentication/authContext';

const Projects = () => {
  const authContext = useContext(AuthContext);
  const { returnUserAuthenticated } = authContext;

  useEffect(() => {
    returnUserAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='contenedor-app'>
      <Sidebar />
      <div className='seccion-principal'>
        <Bar />
        <main>
          <TaskForm />
          <div className='contenedor-tareas'>
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
