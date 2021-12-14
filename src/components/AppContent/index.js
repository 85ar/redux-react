import React, { useState } from "react";
import "./styles.css";

import { useDispatch, useSelector } from "react-redux";

// selector
const selectMoney = (state) => state.money;

// action
const depositMoneyAction = (value) => {
  return {
    type: "bank/depositMoney",
    payload: +value,
  };
};

const withdrawMoneyAction = (value) => {
  return {
    type: "bank/withdrawMoney",
    payload: +value,
  };
};

const AppContent = () => {
  const [depositValue, setDepositValue] = useState(0);
  const [withdrawValue, setWithdrawValue] = useState(0);

  const dispatch = useDispatch();
  const money = useSelector(selectMoney);

  const depositMoney = () => {
    dispatch(depositMoneyAction(depositValue));
  };
  const withdrawMoney = () => {
    dispatch(withdrawMoneyAction(withdrawValue));
  };

  const handleChange = (e, type) => {
    if (type === "deposit") {
      setDepositValue(e.target.value);
    }
    if (type === "withdraw") {
      setWithdrawValue(e.target.value);
    }
  };

  return (
    <div className="AppContent">
      <h1>Наш банк: {money}</h1>
      <div className="wrapper">
        <div>
          <div>
            <h3>Сколько денег положить?</h3>
            <input
              type="number"
              value={depositValue}
              onChange={(e) => handleChange(e, "deposit")}
            />
          </div>
          <button onClick={depositMoney} className="typicalBtn">
            Положить деньги
          </button>
        </div>
        <div>
          <div>
            <h3>Сколько денег снять?</h3>
            <input
              type="number"
              value={withdrawValue}
              onChange={(e) => handleChange(e, "withdraw")}
            />
          </div>
          <button onClick={withdrawMoney} className="typicalBtn">
            Снять деньги
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppContent;
