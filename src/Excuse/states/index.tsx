import userEmailReducer from "./userEmail";
import userNicknameReducer from "./userNickname";
import userExcuseReducer from "./userExcuse";
import { combineReducers } from "redux";

const allUserInputDataReducers = combineReducers({
  userEmailReducer,
  userNicknameReducer,
  userExcuseReducer
});

export default allUserInputDataReducers;