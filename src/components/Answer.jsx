import React from "react";
export default function Answer(props) {
  return (
      <span className="all--answer" onClick={props.handleClick}>{props.answer}</span>
  );
}
