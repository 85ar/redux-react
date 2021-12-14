import React from "react";

import { useSelector } from "react-redux";
import { selectMoney } from "../../store/bank/selectors";

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
