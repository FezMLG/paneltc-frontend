const userEmailReducer = (state = "", action: any) => {
  switch (action.type) {
    case 'email':
      return "email: " + state;
    default:
      return state;
  }
};

export default userEmailReducer;
