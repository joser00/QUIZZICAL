import React from "react";

export default function Answer(props) {
  return (
    <div className="btn">
      <label>{props.answer}</label>
      <input type="radio" id = {props.id} name = {props.name} value = {props.value}/>
    </div>
  );
}
