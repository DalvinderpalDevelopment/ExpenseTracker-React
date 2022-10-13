import logo from "../../assets/images/expensetracker-logo.svg";
import React from "react";

import "../../assets/css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="Expense Tracker Logo" />
      </div>
    </div>
  );
};

export default Header;
