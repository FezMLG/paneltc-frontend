import { Action } from "../actions";

const initialState = "";

const userExcuseReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_EXCUSE':
      return action.payload;
    default:
      return state;
  }
};

export default userExcuseReducer;