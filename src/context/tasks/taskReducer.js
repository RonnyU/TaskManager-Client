import { PROJECT_TASK, ADD_TASK, CHECK_TASKFORM } from '../../types';

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
        tasks: [...state.tasks, action.payload],
        taskerror: false,
      };
    case CHECK_TASKFORM:
      return {
        ...state,
        taskerror: true,
      };
    default:
      return state;
  }
};
