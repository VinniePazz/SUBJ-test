import { combineReducers } from "redux";
import notesReducer from "./notesReducer";
import formReducer from "./formReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
  notes: notesReducer,
  form: formReducer,
  ui: uiReducer
});
