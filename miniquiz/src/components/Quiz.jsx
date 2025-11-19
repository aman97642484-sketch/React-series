import React from 'react'
import { useState } from 'react'
import Questions from './Questions';

function Quiz() {
    const questions = [
        {
            question:"What is React",
            options:["framework", "Js Library", "Language","Testing Tool"],
            answer:"Js Library",
        },
        {
            question: "What is JSX in React?",
            options: ["A CSS framework", "A templating engine", "A JavaScript XML syntax", "A database"],
            answer: "A JavaScript XML syntax"
        },
        {
            question: "Which hook is used to manage state in React?",
            options: ["useMemo", "useEffect", "useState", "useRef"],
            answer: "useState"
        },
        {
            question: "Which hook runs after every render by default?",
            options: ["useEffect", "useCallback", "useContext", "useReducer"],
            answer: "useEffect"
        },
        {
            question: "What is the purpose of React Router?",
            options: ["State management", "Styling components", "Navigation between pages", "Testing"],
            answer: "Navigation between pages"
        },
        {
            question: "React follows which architecture?",
            options: ["MVC", "MVVM", "Component-based", "Monolithic"],
            answer: "Component-based"
        },
        {
            question: "Which method is used to update UI in React?",
            options: ["DOM.update()", "setState()", "refresh()", "setUI()"],
            answer: "setState()"
        },
        {
            question: "Virtual DOM improves performance by?",
            options: ["Direct DOM updates", "Batch updating the real DOM", "Slowing rendering", "Using SQL queries"],
            answer: "Batch updating the real DOM"
        },
        {
            question: "Which hook is used for side effects in React?",
            options: ["useEffect", "useState", "useRef", "useId"],
            answer: "useEffect"
        },
        {
            question: "Props are ___ in React.",
            options: ["mutable", "read-only", "functions", "hooks"],
            answer: "read-only"
        },
        {
            question: "Which command is used to create a new React app using Vite?",
            options: ["vite-react", "npm create vite@latest", "create-react-app", "npm init react"],
            answer: "npm create vite@latest"
        }

    ]

    const[currquestindx, setCurrquestindx] = useState(0);
    const[currAns, setCurrAns] = useState(null);
    const[score, setScore] = useState(0);
    const handleClick= (option) => {
        setCurrAns(option)
        if(option===questions[currquestindx].answer){
            setScore(score+1)
        }
    }
     const handleNextQues = () => {
        setCurrquestindx(currquestindx+1);
        setCurrAns(null);
    }
  return (
    <div>
        {currquestindx <questions.length ? <div className='App'>
        <Questions  question = {questions[currquestindx].question}
        options = {questions[currquestindx].options}  handleClick={handleClick}  currAns={currAns}
        />
        <button disabled={currAns===null} className={currAns===null ? "button-disable": "button"} onClick={handleNextQues}>Next Question</button>
         </div> : <div>Your Score is {score}</div>}
    </div>
  )
}

export default Quiz