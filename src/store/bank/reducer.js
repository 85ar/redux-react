const initialState = {
  money: 150,
};

const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "bank/depositMoney":
      return { ...state, money: state.money + action.payload };
    case "bank/withdrawMoney":
      return { ...state, money: state.money - action.payload };
    default:
      return state;
  }
};

export default moneyReducer;
