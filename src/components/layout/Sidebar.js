import React from 'react';
import NewProject from '../projects/NewProject';
import ProjectList from '../projects/ProjectList';

const Sidebar = () => {
  return (
    <aside>
      <h1>
        TASK <span>Manager</span>
      </h1>
      <NewProject />
      <div className='proyectos'>
        <h2>My Projects</h2>
        <ProjectList />
      </div>
    </aside>
  );
};

export default Sidebar;
