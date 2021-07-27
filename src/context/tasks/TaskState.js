import React, { useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';
import uuid from 'uuid';
import {
  PROJECT_TASK,
  ADD_TASK,
  CHECK_TASKFORM,
  DELETE_TASK,
  TASK_STATE,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAN_TASK,
} from '../../types';

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, name: 'Elegir plataforma', status: true, projectId: 1 },
      { id: 2, name: 'Elegir colores', status: false, projectId: 2 },
      { id: 3, name: 'Elegir diseño', status: false, projectId: 3 },
      { id: 4, name: 'Elegir hosting', status: true, projectId: 4 },
      { id: 5, name: 'Elegir acvbd', status: false, projectId: 1 },
      { id: 6, name: 'Elegir plataforma', status: true, projectId: 2 },
      { id: 7, name: 'Elegir colores', status: false, projectId: 3 },
      { id: 8, name: 'Elegir diseño', status: false, projectId: 4 },
      { id: 9, name: 'Elegir hosting', status: true, projectId: 3 },
      { id: 10, name: 'Elegir plataforma', status: true, projectId: 2 },
      { id: 11, name: 'Elegir colores', status: false, projectId: 1 },
      { id: 12, name: 'Elegir diseño', status: false, projectId: 2 },
      { id: 13, name: 'Elegir hosting', status: true, projectId: 3 },
    ],
    projecttasks: null,
    taskerror: false,
    taskselected: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  //Functions
  const getTasks = (projectId) => {
    dispatch({
      type: PROJECT_TASK,
      payload: projectId,
    });
  };

  const addTask = (task) => {
    task.id = uuid.v4();
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  const checkTaskForm = () => {
    dispatch({
      type: CHECK_TASKFORM,
    });
  };

  const deleteTask = (taskId) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId,
    });
  };

  const changeTaskStatus = (task) => {
    dispatch({
      type: TASK_STATE,
      payload: task,
    });
  };

  const setCurrentState = (task) => {
    dispatch({
      type: CURRENT_TASK,
      payload: task,
    });
  };

  const updateTask = (task) => {
    dispatch({
      type: UPDATE_TASK,
      payload: task,
    });
  };

  const cleanTask = () => {
    dispatch({
      type: CLEAN_TASK,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        projecttasks: state.projecttasks,
        taskerror: state.taskerror,
        taskselected: state.taskselected,
        getTasks,
        addTask,
        checkTaskForm,
        deleteTask,
        changeTaskStatus,
        setCurrentState,
        updateTask,
        cleanTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
