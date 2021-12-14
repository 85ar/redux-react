export const depositMoneyAction = (value) => {
  return {
    type: "bank/depositMoney",
    payload: +value,
  };
};

export const withdrawMoneyAction = (value) => {
  return {
    type: "bank/withdrawMoney",
    payload: +value,
  };
};
