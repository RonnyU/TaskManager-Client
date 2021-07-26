import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ProjectList = () => {
  //extraer projectos del state inicial
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  useEffect(() => {
    console.log(getProjects());
  }, []);

  if (projects.length === 0)
    return <p>There is no projects to display, create one to start</p>;

  return (
    <div>
      <ul className='listado-proyectos'>
        {projects.map((project, index) => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
