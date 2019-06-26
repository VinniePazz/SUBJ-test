export default (state = {}, action) => {
  switch (action.type) {
    case "CREATE_NOTE":
      return { ...state, note: action.payload };
    case "GET_NOTES":
      return { ...state, notes: action.payload };
    case "GET_NOTE":
      return { ...state, note: action.payload };
    case "EDIT_NOTE":
      return { ...state, note: action.payload };
    default:
      return state;
  }
};
