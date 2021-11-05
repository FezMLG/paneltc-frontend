import userEmailReducer from "./userEmail";
import userNicknameReducer from "./userNickname";
import userExcuseReducer from "./userExcuse";
import listboxValueReducer from "./listboxValue";
import { combineReducers } from "redux";

const allUserInputDataReducers = combineReducers({
  userEmailReducer,
  userNicknameReducer,
  userExcuseReducer,
  listboxValueReducer
});

export default allUserInputDataReducers;