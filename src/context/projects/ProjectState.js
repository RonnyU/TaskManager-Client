import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import uuid from 'uuid';
import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  CHECK_FORM,
  CURRENT_PROJECT,
  DELETE_PROJECT,
} from '../../types';

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: 'Tienda Virutal' },
    { id: 2, name: 'Intranet' },
    { id: 3, name: 'Diseño de sitio' },
    { id: 4, name: 'DMERN' },
  ];

  const initialState = {
    projects: [],
    form: false,
    formerror: false,
    project: null,
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

  const addProject = (project) => {
    project.id = uuid.v4();

    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  const displayFormError = () => {
    dispatch({
      type: CHECK_FORM,
    });
  };

  const currentProject = (projectId) => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId,
    });
  };

  const deleteProject = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        project: state.project,
        form: state.form,
        formerror: state.formerror,
        displayForm,
        getProjects,
        addProject,
        displayFormError,
        currentProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
