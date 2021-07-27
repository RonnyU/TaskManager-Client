import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProjectList = () => {
  //extraer projectos del state inicial
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  const nodeRef = React.useRef(null);

  useEffect(() => {
    getProjects();
    //eslint-disable-next-line
  }, []);

  if (projects.length === 0)
    return <p>There is no projects to display, create one to start</p>;

  return (
    <div>
      <ul className='listado-proyectos'>
        <TransitionGroup>
          {projects.map((project) => (
            <CSSTransition
              key={project.id}
              nodeRef={nodeRef}
              timeout={200}
              classNames='proyecto'
            >
              <Project ref={nodeRef} project={project} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default ProjectList;
