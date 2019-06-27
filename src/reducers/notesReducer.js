export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_NOTE":
      return [...state, ...action.payload.notes];
    case "GET_NOTES":
      return [...state, ...action.payload.notes];
    case "GET_NOTE":
      return { ...state, note: action.payload };
    case "EDIT_NOTE":
      return { ...state, note: action.payload };
    case "DELETE_NOTE":
      return [...state.filter(notes => notes.id !== action.payload)];
    default:
      return state;
  }
};
