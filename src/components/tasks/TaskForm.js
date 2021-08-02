import React, { useContext, useState, useEffect } from 'react';
import taskContext from '../../context/tasks/taskContext';
import projectContext from '../../context/projects/projectContext';

const TaskForm = () => {
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const tasksContext = useContext(taskContext);
  const {
    taskerror,
    taskselected,
    getTasks,
    addTask,
    checkTaskForm,
    updateTask,
    cleanTask,
  } = tasksContext;

  //States
  const [task, setTask] = useState({
    name: '',
  });

  useEffect(() => {
    if (taskselected !== null) {
      setTask(taskselected);
    } else {
      setTask({
        name: '',
      });
    }
  }, [taskselected]);

  const { name } = task;

  if (!project) return null;

  const [currentProject] = project;

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      checkTaskForm();
      return;
    }

    if (taskselected === null) {
      task.project = currentProject._id;
      //console.log('ADDIND');
      addTask(task);
    } else {
      updateTask(task);
      cleanTask();
    }

    getTasks(currentProject._id);

    setTask({
      name: '',
    });
  };

  return (
    <div className='formulario'>
      <form onSubmit={handleSubmit}>
        <div className='contenedor-input'>
          <input
            type='text'
            className='input-text'
            placeholder='Task name...'
            name='name'
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className='contenedor-input'>
          <input
            type='submit'
            className='btn btn-primario btn-submit btn-block'
            value={taskselected ? 'Edit task' : 'Add task'}
          />
        </div>
      </form>
      {taskerror ? (
        <p className='mensaje error'>Task name is required</p>
      ) : null}
    </div>
  );
};

export default TaskForm;
