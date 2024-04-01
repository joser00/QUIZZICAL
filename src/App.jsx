import React from "react";
import Answer from "./components/Answer";
import { nanoid } from "nanoid";
import { decode } from "html-entities";
import Question from './components/Question'

export default function App() {
  const [data, setData] = React.useState([]);
  const [quiz, setQuiz] = React.useState([]);
  const [answers, setAnswers] = React.useState([])
  //Iteramos sobre las propiedades del objeto extrayendo el valor de sus propiedades y salvandolas en data
  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=29&difficulty=medium&type=multiple")
      .then((res) => res.json())
      .then((res) => {
        Object.keys(res).forEach((key) => {
          setData(res[key]);
        });
      });
  },[]);

  //Funcion para almacenar en un objeto tipo {question:'', answers:[]} los valores a extraer de data
  const answersArray = data.map((element) => {
    return {
      question: decode(element.question),
      answers: decode([...element.incorrect_answers, element.correct_answer]),
      correctAnswer: element.correct_answer,
    };
  });
   // Retorna un número aleatorio entre -0.5 y 0.5
  function comparacionAleatoria() {
    return Math.random() - 0.5;
  }
  //Actualizamos el estado de quiz
  React.useEffect(() => {
    //Creamos un nuevo array modificando el array donde se encuentran las respuestas ordenandolos aleatoriamente con sort()
    const newArr = answersArray.map(element => {
      return  {
        ...element,
        answers:element.answers.sort(comparacionAleatoria)
      }
    })
    setQuiz(newArr);
  }, []);
  //handle function
  function handleFunction(event) {
  const {value} = event.target
  quiz.map(answer => {
    if(value === answer.correctAnswer){
      console.log('found')
    }else {
      console.log("not found")
    }
  })
  }
  ///Submit Form function
  function handleSubmit(event){
    event.preventDefault()

  }
  //Render the quiz
  const render = quiz.map((element) => {
    return (
      <div className="btn-container">
        <Question question={element.question} />
        {element.answers.map(value => {
            return <Answer handleFunction={handleFunction} answer = {value} id = {value} name = {element.question} value = {value} />
        })}
        <hr/>
      </div>
    );
  });
  //JSX Code
  return (
    <form className="main-container" onSubmit={handleSubmit}>
      {render}
    </form>
  );
}
