import React, { useContext } from 'react';
import taskContext from '../../context/tasks/taskContext';
import projectContext from '../../context/projects/projectContext';

const Task = ({ task }) => {
  const tasksContext = useContext(taskContext);
  const { deleteTask, getTasks, changeTaskStatus, setCurrentState } =
    tasksContext;

  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const [currentProject] = project;

  const handleDelete = (taskId) => {
    deleteTask(taskId);

    getTasks(currentProject.id);
  };

  const changeStatus = (task) => {
    if (task.status) {
      task.status = false;
    } else {
      task.status = true;
    }
    changeTaskStatus(task);
  };

  const selectTask = (task) => {
    setCurrentState(task);
  };
  return (
    <li className='tarea sombra'>
      <p>{task.name}</p>
      <div className='estado'>
        {task.status ? (
          <button
            type='button'
            className='completo'
            onClick={() => changeStatus(task)}
          >
            Completed
          </button>
        ) : (
          <button
            type='button'
            className='incompleto'
            onClick={() => changeStatus(task)}
          >
            Incomplete
          </button>
        )}
      </div>
      <div className='acciones'>
        <button
          type='button'
          className='btn btn-primario'
          onClick={() => selectTask(task)}
        >
          Edit
        </button>
        <button
          type='button'
          className='btn btn-segundario'
          onClick={() => handleDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
