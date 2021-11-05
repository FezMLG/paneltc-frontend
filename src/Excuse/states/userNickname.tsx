const userNicknameReducer = (state = "", action: any) => {
  switch (action.type) {
    case 'ADD_NICKNAME':
      return action.payload;
    default:
      return state;
  }
};

export default userNicknameReducer;