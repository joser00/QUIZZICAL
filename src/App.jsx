import React from "react";
import { nanoid } from "nanoid";
import Quizz from './components/Quizz'
import Answer from './components/Answer'
import { decode } from "html-entities";

  export default function App () {
  const [allQuestions, setAllQuestions] = React.useState([{question:'',answers:[],correctAnswer:''}])

  React.useEffect(()=> {
    fetch('https://opentdb.com/api.php?amount=3')
    .then(data => data.json())
    .then(data => {
        let unifiedData = data.results.map(property => {
          let answersArray = property.incorrect_answers.map(element => {
            return {answer:element,correct:false}
          })
          answersArray.push({answer:property.correct_answer,correct:false})
        return {
          question:decode(property.question),
          answers:[...answersArray],
          correctAnswer:property.correct_answer
        }
      })//Fin unifiedData
      setAllQuestions(unifiedData)
    })//Fin then
    .catch(err => {
      console.log("ERROR: "+err)
    })//Fin Catch
  },[])//Fin useEffect

  function handleClick(text){
    allQuestions.map(correctAnswer =>{
      correctAnswer.answers.map(element => {
        if(text === element.answer){
         console.log("ok")
        }
      })
    })
  }
  const render = allQuestions.map(element => {
    return (
      <div key = {nanoid()}>
        <Quizz question= {element.question} key = {nanoid()}/>
        {element.answers.map(element => {
          return (
            <Answer answer = {element.answer} key = {nanoid()} handleClick = {()=>handleClick(element.answer)}/>
          )
        })}
      </div>
    )
  })

  return <div>{render}</div>
}
