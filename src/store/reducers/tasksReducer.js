import {
  GET_NEXT_LEVEL_TASKS_SUCCESS,
  GET_TASKS_START, GET_TASKS_SUCCESS,
} from "../actions/actionType";

const initialState = {
  tasks: [],
  nextLevelTasks: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type){
    case GET_TASKS_START:
      return {
        ...state,
      };
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.data
      };
    case GET_NEXT_LEVEL_TASKS_SUCCESS:
      return {
        ...state,
        nextLevelTasks: action.data
      };

    default:
      return state
  }
};

export default postReducer