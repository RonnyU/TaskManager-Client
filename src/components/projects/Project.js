import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Project = ({ project }) => {
  const projectsContext = useContext(projectContext);
  const { currentProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { getTasks } = tasksContext;

  const selectProject = (projectId) => {
    currentProject(projectId); //fijar un proyecto actual
    getTasks(projectId); //filtrar las tareas por proyectos al dar click
  };
  return (
    <li>
      <button
        type='button'
        className='btn btn-blank'
        onClick={() => selectProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
