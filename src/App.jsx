import React from "react";
import Answer from "./components/Answer";
import { nanoid } from "nanoid";
import { decode } from "html-entities";
import Question from './components/Question'

export default function App() {
  const [data, setData] = React.useState([]);
  const [quiz, setQuiz] = React.useState([]);
  
  //Iteramos sobre las propiedades del objeto extrayendo el valor de sus propiedades y salvandolas en data
  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=29&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((res) => {
        Object.keys(res).forEach((key) => {
          setData(res[key]);
        });
      });
  }, []);

  //Funcion para almacenar en un objeto tipo {question:'', answers:[]} los valores a extraer de data
  const answersArray = data.map((element) => {
    return {
      question: decode(element.question),
      answers: decode([...element.incorrect_answers, element.correct_answer]),
      correctAnswer: element.correct_answer,
    };
  });
  //Actualizamos el estado de quiz
  React.useEffect(() => {
    setQuiz(answersArray);
  }, []);
  //Render the quiz
  const render = quiz.map((element) => {
    return (
      <div className="btn-container">
        <Question question={element.question} />
        {element.answers.map(value => {
            return <Answer  answer = {value} id = {value} name = {element.question} value = {value}/>
        })}
        <hr/>
      </div>
    );
  });
  //JSX Code
  return (
    <div className="main-container">
      {render}
    </div>
  );
}
