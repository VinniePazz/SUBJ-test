import { CHANGE_FORM_VALUES } from "./types";

export const changeFormValues = values => dispatch => {
  dispatch({
    type: CHANGE_FORM_VALUES,
    payload: values
  });
};
