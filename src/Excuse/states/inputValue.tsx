const initialState = "";

export const inputValueReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_INPUT_VALUE':
      return action.payload;
    default:
      return state;
  }
};

