import React from "react";

import { useSelector } from "react-redux";

// selector
const selectMoney = (state) => state.money;

const Header = () => {
  const money = useSelector(selectMoney);

  return (
    <header className="Header">
      ///////
      <h1>Ваш текущий счет, Артур {money}</h1>
      //////
    </header>
  );
};

export default Header;
