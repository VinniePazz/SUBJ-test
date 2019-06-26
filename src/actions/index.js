import axios from "axios";
import { GET_NOTES, GET_NOTE, CREATE_NOTE } from "./types";

export const getNotes = () => async dispatch => {
  try {
    const response = await axios.get(`/notes`);
    dispatch({ type: GET_NOTES, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const createNote = () => async dispatch => {
  try {
    const response = await axios.post(`/notes`, {
      title: "test",
      content: "testContent"
    });
    console.log(response);
    dispatch({ type: CREATE_NOTE, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const getNote = ID => async dispatch => {
  try {
    const response = await axios.get(`/notes`, {
      params: {
        ID
      }
    });
    console.log(response.data);
    dispatch({ type: GET_NOTE, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};