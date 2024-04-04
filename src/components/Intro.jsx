import React from 'react'

export default function Intro (props) {
    return (
        <div className='intro'>
            <h1>Quizzical</h1>
            <h2>Test your football knowledge</h2>
            <button className='intro--btn' onClick={props.setAcces}>Start Quizz</button>
        </div>
    )
}