import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { incrementAction, decrementAction } from "../../store/counter/actions";

import { selectValue } from "../../store/counter/selectors";

import "./styles.css";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectValue);

  const incrementHandle = () => {
    dispatch(incrementAction());
  };
  const decrementHandle = () => {
    dispatch(decrementAction());
  };

  return (
    <div>
      <h1>Текущий счет: {value}</h1>
      <button onClick={incrementHandle} className="typicalBtn">
        Увеличить счетчик
      </button>
      <button onClick={decrementHandle} className="typicalBtn">
        Уменьшить счетчик
      </button>
    </div>
  );
};

export default Counter;
