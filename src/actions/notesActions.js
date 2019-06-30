import axios from "axios";
import {
  GET_NOTES,
  GET_NOTE,
  CREATE_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  CLOSE_NOTIFICATION
} from "./types";

export const getNotes = () => async dispatch => {
  try {
    const response = await axios.get(`/notes`);
    dispatch({ type: GET_NOTES, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const createNote = note => async (dispatch, getState) => {
  const noteValues = getState().form;
  try {
    const response = await axios.post(`/notes`, noteValues);

    dispatch({ type: CREATE_NOTE, payload: response.data });
    dispatch({ type: CLOSE_NOTIFICATION });
  } catch (error) {
    dispatch({ type: CLOSE_NOTIFICATION });
  }
};

export const getNote = ID => async dispatch => {
  try {
    const response = await axios.get(`/notes`, {
      params: {
        ID
      }
    });
    dispatch({ type: GET_NOTE, payload: response.data });
    dispatch({ type: CLOSE_NOTIFICATION });
  } catch (error) {
    console.log(error);
  }
};

export const editNote = id => async (dispatch, getState) => {
  const newValues = getState().form;
  id = id || getState().ui.meta.currentNoteId;
  console.log(id);
  try {
    const response = await axios.patch(`/notes/${id}`, newValues);
    dispatch({ type: EDIT_NOTE, payload: response.data });
    dispatch({ type: CLOSE_NOTIFICATION });
  } catch (error) {
    dispatch({ type: CLOSE_NOTIFICATION });
  }
};

export const deleteNote = id => async dispatch => {
  try {
    await axios.delete(`/notes/${id}`, {
      params: {
        id
      }
    });
    dispatch({ type: DELETE_NOTE, payload: id });
    dispatch({ type: CLOSE_NOTIFICATION });
  } catch (error) {
    dispatch({ type: CLOSE_NOTIFICATION });
  }
};
