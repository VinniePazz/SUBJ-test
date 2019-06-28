export default (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_FORM_VALUES":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
