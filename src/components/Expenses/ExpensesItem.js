import React from "react";

import "../../assets/css/ExpensesItem.css";

const ExpensesItem = (props) => {
  return (
    <div className="expense-item">
      <div className="expense-item-date">
        <p>{props.date}</p>
      </div>
      <div className="expense-item-name">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item-amount">
        <p>${props.amount}</p>
      </div>
    </div>
  );
};

export default ExpensesItem;
