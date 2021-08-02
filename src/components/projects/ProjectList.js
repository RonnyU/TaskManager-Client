import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import AlertContext from '../../context/alerts/alertContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProjectList = () => {
  //extraer projectos del state inicial
  const projectsContext = useContext(projectContext);
  const { message, projects, getProjects } = projectsContext;

  const alertContext = useContext(AlertContext);
  const { alert, displayAlert } = alertContext;

  const nodeRef = React.useRef(null);

  useEffect(() => {
    if (message) {
      displayAlert(message.msg, message.category);
    }
    getProjects();
    //eslint-disable-next-line
  }, [message]);

  if (projects.length === 0)
    return <p>There is no projects to display, create one to start</p>;

  return (
    <div>
      <ul className='listado-proyectos'>
        {alert ? (
          <div className={`alerta ${alert.category}`}>{alert.msg}</div>
        ) : null}
        <TransitionGroup>
          {projects.map((project) => (
            <CSSTransition
              key={project._id}
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
