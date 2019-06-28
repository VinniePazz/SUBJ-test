export default (state = {}, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, modal: true, id: action.payload };
    case "CLOSE_MODAL":
      return { ...state, modal: false };
    case "SHOW_NOTIFICATION":
      return {
        ...state,
        notification: true,
        meta: {
          currentNoteId: action.payload.currentNoteId,
          type: action.payload.type
        }
      };
    case "CLOSE_NOTIFICATION":
      return { ...state, notification: false };
    default:
      return state;
  }
};
