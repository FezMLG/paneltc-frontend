const userExcuseReducer = (state = "", action: any) => {
  switch (action.type) {
    case 'typeOfExcuse':
      return 'typeOfExcuse' + state;
    default:
      return state;
  }
};

export default userExcuseReducer;