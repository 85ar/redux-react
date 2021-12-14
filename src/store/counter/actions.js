export const incrementAction = () => {
  return {
    type: "counter/increment",
    payload: 1,
  };
};

export const decrementAction = () => {
  return {
    type: "counter/decrement",
    payload: 1,
  };
};
