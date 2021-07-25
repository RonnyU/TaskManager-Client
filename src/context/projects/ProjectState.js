import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { PROJECT_FORM, GET_PROJECTS } from '../../types';

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: 'Tienda Virutal' },
    { id: 2, name: 'Intranet' },
    { id: 3, name: 'Diseño de sitio' },
    { id: 3, name: 'DMERN' },
  ];

  const initialState = {
    projects: [],
    form: false,
  };

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //serie de funciones para el CRUD
  const displayForm = () => {
    dispatch({
      type: PROJECT_FORM,
    });
  };

  //obtenerProyectos

  const getProjects = () => {
    console.log('get');
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        displayForm,
        getProjects,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
