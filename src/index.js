import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App";

import { createStore } from "redux";
import { Provider } from "react-redux";

// state по умолчанию, значение м.б. разное
const initialState = {
  money: 150,
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "bank/depositMoney":
      return { ...state, money: state.money + action.payload };
    case "bank/withdrawMoney":
      return { ...state, money: state.money - action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

