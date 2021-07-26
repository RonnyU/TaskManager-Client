import React, { useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';
import { PROJECT_TASK, ADD_TASK, CHECK_TASKFORM } from '../../types';

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { name: 'Elegir plataforma', status: true, projectId: 1 },
      { name: 'Elegir colores', status: false, projectId: 2 },
      { name: 'Elegir diseño', status: false, projectId: 3 },
      { name: 'Elegir hosting', status: true, projectId: 4 },
      { name: 'Elegir acvbd', status: false, projectId: 1 },
      { name: 'Elegir plataforma', status: true, projectId: 2 },
      { name: 'Elegir colores', status: false, projectId: 3 },
      { name: 'Elegir diseño', status: false, projectId: 4 },
      { name: 'Elegir hosting', status: true, projectId: 3 },
      { name: 'Elegir plataforma', status: true, projectId: 2 },
      { name: 'Elegir colores', status: false, projectId: 1 },
      { name: 'Elegir diseño', status: false, projectId: 2 },
      { name: 'Elegir hosting', status: true, projectId: 3 },
    ],
    projecttasks: null,
    taskerror: false,
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
    console.log(task);
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
  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        projecttasks: state.projecttasks,
        taskerror: state.taskerror,
        getTasks,
        addTask,
        checkTaskForm,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
