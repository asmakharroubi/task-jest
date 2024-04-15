import { ADD_Movie, EDIT_Movie, CHANGE_DONE } from "../Constants/Action-type";

export const addMovie = (payload: any) => {
  return {
    type: ADD_Movie,
    payload: payload,
  };
};

export const editMovie = (payload: any) => {
  return {
    type: EDIT_Movie,
    payload: payload,
  };
};

export const changeDone = (payload: any) => {
  return {
    type: CHANGE_DONE,
    payload: payload,
  };
};
