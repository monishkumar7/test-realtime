const initialState = {
  myObject: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      console.log(action.data);
      return state;
    default:
      return state;
  }
};

export default reducer;
