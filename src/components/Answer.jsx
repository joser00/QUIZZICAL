import React from "react";

export default function Answer(props) {
  const backgroundFalse = {border:'2px solid red', color:'red',fontWeight:"bolder"}
  const backgroundTrue =  {border:'2px solid green', color:'green',fontWeight:"bolder"} 
  return (
    <label style= {props.isSubmit ? props.isTrue ? backgroundTrue : backgroundFalse : console.log('NO CHANGES') }>
      <input onChange={props.handleFunction} type="radio" id = {props.id} name = {props.name} value = {props.value}/>
      <span>{props.answer}</span>
    </label>
  );
}
