import React from "react";
import TextField from "./TextField";

import "../../assets/css/Form.css";

const Form = (props) => {
  return (
    <div className="expense-form">
      <form>
        <div className="expense-form-input">
          <TextField type="date" name="date" label="Select Date:" />
          <TextField type="text" name="input" label="Enter Item:" />
          <TextField type="number" name="amount" label="Enter Amount:" />
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

export default Form;
