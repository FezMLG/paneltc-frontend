const userNicknameReducer = (state = "", action: any) => {
  switch (action.type) {
    case 'nickname':
      return 'nickname' + state;
    default:
      return state;
  }
};

export default userNicknameReducer;