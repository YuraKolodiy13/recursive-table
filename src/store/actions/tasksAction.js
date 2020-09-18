import {
  GET_NEXT_LEVEL_TASKS_START, GET_NEXT_LEVEL_TASKS_SUCCESS,
  GET_TASKS_START,
  GET_TASKS_SUCCESS,
} from "./actionType";
import axios from "axios/index";

export const getTasks = () => async dispatch => {
  dispatch({
    type: GET_TASKS_START
  });
  const res = await axios.get('http://165.227.133.204/api/public/v1/euro_act_tasks');
  dispatch({
    type: GET_TASKS_SUCCESS,
    data: res.data
  })
};

export const getNextLevelTasks = (id) => async dispatch => {
  dispatch({
    type: GET_NEXT_LEVEL_TASKS_START
  });
  const res = await axios.get(`http://165.227.133.204/api/public/v1/euro_act_tasks?type=chapter&id=${id}`);
  dispatch({
    type: GET_NEXT_LEVEL_TASKS_SUCCESS,
    data: res.data
  })
};