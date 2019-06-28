export default (state = [], action) => {
  switch (action.type) {
    case "CREATE_NOTE":
      return [...state, action.payload];
    case "GET_NOTES":
      return [...state, ...action.payload.notes];
    case "EDIT_NOTE":
      return [
        ...state.map(notes =>
          notes.id === action.payload.id ? action.payload : notes
        )
      ];
    case "DELETE_NOTE":
      return [...state.filter(notes => notes.id !== action.payload)];
    default:
      return state;
  }
};
