import React from "react";
import ExpensesItem from "./ExpensesItem";
import ExpenseForm from "../NewExpenses/ExpenseForm";
import "../../assets/css/Expenses.css";

const Expenses = () => {
  return (
    <>
      <ExpenseForm />
      <div className="expenses">
        <h2>Expenses List:</h2>
        <ExpensesItem date={"2022, 09, 12"} title={"Tyre"} amount={19} />
        <ExpensesItem date={"2022, 09, 10"} title={"Fridge"} amount={599} />
        <ExpensesItem date={"2022, 10, 01"} title={"Car"} amount={1999} />
        <ExpensesItem date={"2022, 10, 12"} title={"Milk"} amount={2} />
      </div>
    </>
  );
};

export default Expenses;
