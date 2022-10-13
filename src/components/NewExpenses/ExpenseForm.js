import React, { useState } from "react";

import "../../assets/css/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const textChangeHandle = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expensesData = {
      date: new Date(enteredDate),
      title: enteredTitle,
      amount: enteredAmount,
    };

    props.onSaveExpenseData(expensesData);

    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
  };

  return (
    <div className="expense-form">
      <form onSubmit={submitHandler}>
        <div className="expense-form-input">
          <div className="form-input">
            <label for="date">Select Date:</label>
            <input
              type="date"
              name="date"
              value={enteredDate}
              onChange={dateChangeHandler}
              required
            />
          </div>
          <div className="form-input">
            <label for="item">Enter Item:</label>
            <input
              type="text"
              name="title"
              value={enteredTitle}
              onChange={textChangeHandle}
              required
            />
          </div>
          <div className="form-input">
            <label for="amount">Enter Amount:</label>
            <input
              type="number"
              name="amount"
              value={enteredAmount}
              onChange={amountChangeHandler}
              required
            />
          </div>
        </div>
        <div className="expense-form-buttons">
          <button className="button-cancel">Cancel</button>
          <button className="button-submit" type="submit">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
