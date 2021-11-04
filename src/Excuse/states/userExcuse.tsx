import { Action } from "../actions";

export interface userExcuseState {
  excuse: string[]
}

const initialState = {
  excuse: []
}

const userExcuseReducer = (state:userExcuseState = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_EXCUSE':
      return {...state, excuse: [...state.excuse, action.payload]};
    default:
      return state;
  }
};

export default userExcuseReducer;