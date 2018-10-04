const initialState = {
  myObject: {},
  shareId: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      console.log(action.data);
      return state;
    case 'NEW_SHARE':
      return {
        ...state,
        shareId: action.id
      };
    default:
      return state;
  }
};

export default reducer;
