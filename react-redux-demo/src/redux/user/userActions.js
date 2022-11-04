import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userTypes";

export const fetchRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchSuccess = (users) => {
  return { type: FETCH_USER_SUCCESS, payload: users };
};

export const fetchFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};
