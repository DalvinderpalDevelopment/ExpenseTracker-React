import React from "react";

import "../../assets/css/TextField.css";

const TextField = (props) => {
  return (
    <div className="form-input">
      <label for={props.name}>{props.label}</label>
      <input type={props.type} name={props.name} required />
    </div>
  );
};

export default TextField;
