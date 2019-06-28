import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SHOW_NOTIFICATION,
  CLOSE_NOTIFICATION
} from "./types";

export const openModal = id => {
  return {
    type: OPEN_MODAL,
    payload: id || null
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const showNotification = (noteId, type) => {
  return {
    type: SHOW_NOTIFICATION,
    payload: {
      currentNoteId: noteId,
      type: type
    }
  };
};

export const closeNotification = () => dispatch => {
  dispatch({
    type: CLOSE_NOTIFICATION
  });
};
