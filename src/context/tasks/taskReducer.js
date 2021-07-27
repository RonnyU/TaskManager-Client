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

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
  switch (action.type) {
    case PROJECT_TASK:
      return {
        ...state,
        projecttasks: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        taskerror: false,
      };
    case CHECK_TASKFORM:
      return {
        ...state,
        taskerror: true,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case UPDATE_TASK:
    case TASK_STATE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case CURRENT_TASK:
      return {
        ...state,
        taskselected: action.payload,
      };
    case CLEAN_TASK:
      return {
        ...state,
        taskselected: null,
      };

    default:
      return state;
  }
};
