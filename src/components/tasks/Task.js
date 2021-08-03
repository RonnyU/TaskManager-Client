import React, { useContext } from 'react';
import taskContext from '../../context/tasks/taskContext';
import projectContext from '../../context/projects/projectContext';

const Task = ({ task }) => {
  const tasksContext = useContext(taskContext);
  const { deleteTask, getTasks, updateTask, setCurrentState } = tasksContext;

  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const [currentProject] = project;

  const handleDelete = (taskId) => {
    deleteTask(taskId, currentProject._id);

    getTasks(currentProject._id);
  };

  const changeStatus = (task) => {
    if (task.status) {
      task.status = false;
    } else {
      task.status = true;
    }
    updateTask(task);
  };

  const selectTask = (task) => {
    setCurrentState(task);
  };
  return (
    <li className='task sombra'>
      <p>{task.name}</p>
      <div className='status'>
        {task.status ? (
          <button
            type='button'
            className='complete'
            onClick={() => changeStatus(task)}
          >
            Completed
          </button>
        ) : (
          <button
            type='button'
            className='incomplete'
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
          className='btn btn-secundario'
          onClick={() => handleDelete(task._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
