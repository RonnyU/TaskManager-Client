import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const TaskList = () => {
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { projecttasks } = tasksContext;

  if (!project) return <h2>Select a project</h2>;
  /*
    usar array destructuring para extraer la primer posicion
    seria lo mismo a Array[0] y si se sigue sacando valores va siendo 
    array[1], array[2], array[3] etc...
    */

  const [currentProject] = project;

  const handleDelete = () => {
    deleteProject(currentProject.id);
  };
  return (
    <Fragment>
      <h2>Project: {currentProject.name}</h2>
      <ul className='listado-tareas'>
        {projecttasks.length === 0 ? (
          <li className='tarea'>
            <p>No task to display</p>
          </li>
        ) : (
          projecttasks.map((task) => <Task task={task} />)
        )}
      </ul>
      <button type='button' className='btn btn-eliminar' onClick={handleDelete}>
        Delete project &times;
      </button>
    </Fragment>
  );
};

export default TaskList;
