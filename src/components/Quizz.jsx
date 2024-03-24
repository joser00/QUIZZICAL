import React from "react";
export default function Quizz (props){
    return (
        <div className="question--container">
            <h1 className="question">{props.question}</h1>
        </div>
    )
}