import React from "react";
import "./Input.css";

export const Input = (props) => (
  <div className="input">{props.input === "" ? "0" : props.input}</div>
);

export default Input;
