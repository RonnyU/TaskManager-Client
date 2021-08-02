import {
  PROJECT_TASK,
  ADD_TASK,
  CHECK_TASKFORM,
  DELETE_TASK,
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
        projecttasks: action.payload,
      };

    case ADD_TASK:
      return {
        ...state,
        projecttasks: [action.payload, ...state.projecttasks],
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
        projecttasks: state.projecttasks.filter(
          (task) => task._id !== action.payload
        ),
      };
    case UPDATE_TASK:
      return {
        ...state,
        projecttasks: state.projecttasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
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
