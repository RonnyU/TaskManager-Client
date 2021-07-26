import React, { useContext, useState } from 'react';
import taskContext from '../../context/tasks/taskContext';
import projectContext from '../../context/projects/projectContext';

const TaskForm = () => {
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { taskerror, getTasks, addTask, checkTaskForm } = tasksContext;

  //States
  const [task, setTask] = useState({
    name: '',
  });

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
    task.projectId = currentProject.id;
    task.status = false;
    //console.log(task);
    addTask(task);
    getTasks(currentProject.id);

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
            value='Add task'
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
