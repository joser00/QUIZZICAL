import React from "react";
import Quiz from './Quiz'
import Intro from './components/Intro'
  
  export default function App() {
  const [gameOn, setGameOn] = React.useState(false)
  function setAcces() { 
    setGameOn(true)
  }
  return (
    gameOn ? <Quiz /> : <Intro setAcces = {setAcces}/>
  )
}