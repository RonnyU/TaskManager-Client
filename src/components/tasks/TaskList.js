import React, { Fragment } from 'react';
import Task from './Task';

const TaskList = () => {
  const projectTasks = [
    { name: 'Elegir plataforma', status: true },
    { name: 'Elegir colores', status: false },
    { name: 'Elegir diseño', status: false },
    { name: 'Elegir hosting', status: true },
    { name: 'Elegir acvbd', status: false },
  ];

  return (
    <Fragment>
      <h2>Project: Online Store</h2>
      <ul className='listado-tareas'>
        {projectTasks.length === 0 ? (
          <li className='tarea'>
            <p>No task to display</p>
          </li>
        ) : (
          projectTasks.map((task) => <Task task={task} />)
        )}
      </ul>
      <button type='button' className='btn btn-eliminar'>
        Delete project &times;
      </button>
    </Fragment>
  );
};

export default TaskList;
