const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/increment":
      return { ...state, value: state.value + action.payload };
    case "counter/decrement":
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
};

export default counterReducer;
