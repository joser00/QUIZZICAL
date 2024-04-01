import React from "react";

export default function Answer(props) {

  return (
    <label >
      <input onChange={props.handleFunction} type="radio" id = {props.id} name = {props.name} value = {props.value}/>
      <span>{props.answer}</span>
    </label>
  );
}
