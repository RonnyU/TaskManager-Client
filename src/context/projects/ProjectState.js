import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import axiosClient from '../../config/axios';
import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  PROJECT_ERROR,
  CHECK_FORM,
  CURRENT_PROJECT,
  DELETE_PROJECT,
} from '../../types';

const ProjectState = (props) => {
  const initialState = {
    projects: [],
    form: false,
    formerror: false,
    project: null,
    message: null,
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

  const getProjects = async () => {
    try {
      const response = await axiosClient.get('/api/project');
      console.log(response);
      dispatch({
        type: GET_PROJECTS,
        payload: response.data.projects,
      });
    } catch (error) {
      const alert = {
        msg: 'oops! something went wrong',
        category: 'alerta-error',
      };

      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  const addProject = async (project) => {
    try {
      const response = await axiosClient.post('/api/project', project);

      dispatch({
        type: ADD_PROJECT,
        payload: response.data,
      });
    } catch (error) {
      //oops! something went wrong
      const alert = {
        msg: 'oops! something went wrong',
        category: 'alerta-error',
      };

      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
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

  const deleteProject = async (projectId) => {
    try {
      await axiosClient.delete(`/api/project/${projectId}`);
      dispatch({
        type: DELETE_PROJECT,
        payload: projectId,
      });
    } catch (error) {
      const alert = {
        msg: 'oops! something went wrong',
        category: 'alerta-error',
      };

      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        project: state.project,
        form: state.form,
        formerror: state.formerror,
        message: state.message,
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
