const initialState = "";

const listboxValueReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_LIST_VALUE':
      return action.payload;
    default:
      return state;
  }
};

export default listboxValueReducer;
