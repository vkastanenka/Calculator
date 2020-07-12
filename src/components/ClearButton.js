import React from "react";

export const ClearButton = props => (
  <div className="button button--grey" onClick={props.handleClear}>
    {props.children}
  </div>
);

export default ClearButton;