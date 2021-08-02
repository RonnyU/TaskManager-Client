import React, { useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';
import axiosClient from '../../config/axios';
import {
  PROJECT_TASK,
  ADD_TASK,
  CHECK_TASKFORM,
  DELETE_TASK,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAN_TASK,
} from '../../types';

const TaskState = (props) => {
  const initialState = {
    projecttasks: [],
    taskerror: false,
    taskselected: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  //Functions
  const getTasks = async (project) => {
    try {
      const response = await axiosClient.get('/api/task', {
        params: { project },
      });

      //console.log(response);
      dispatch({
        type: PROJECT_TASK,
        payload: response.data.tasks,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async (task) => {
    try {
      await axiosClient.post('/api/task', task);

      dispatch({
        type: ADD_TASK,
        payload: task,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const checkTaskForm = () => {
    dispatch({
      type: CHECK_TASKFORM,
    });
  };

  const deleteTask = async (taskId, project) => {
    try {
      await axiosClient.delete(`/api/task/${taskId}`, { params: { project } });
      dispatch({
        type: DELETE_TASK,
        payload: taskId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (task) => {
    try {
      await axiosClient.put(`/api/task/${task._id}`, task);
      dispatch({
        type: UPDATE_TASK,
        payload: task,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setCurrentState = (task) => {
    dispatch({
      type: CURRENT_TASK,
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
        projecttasks: state.projecttasks,
        taskerror: state.taskerror,
        taskselected: state.taskselected,
        getTasks,
        addTask,
        checkTaskForm,
        deleteTask,
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
