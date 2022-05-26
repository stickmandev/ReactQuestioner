import React, {useState, useEffect} from 'react'
import './App.css'
import data from "./questions.json"  

function App () {
    // const [numOfQuestions, set] = React.useState([]);
    // const [numOfQuestions, set] = React.useState(0);
    const [numOfQuestions, setNumOfQuestions] = React.useState(0);
    const [currentNum, setCurrentNum] = React.useState(1);
    const [progress, setProgress] = React.useState(0);

    const nextQuestion =()=>{
        if(currentNum<numOfQuestions){
            setCurrentNum(currentNum+1)
        }
        
    }

    useEffect(() => {
        setNumOfQuestions(data.length)
        setProgress((currentNum*100)/numOfQuestions)

        console.log(currentNum)
    }, [currentNum, progress]);
    
    

    return (
        <div className='App'>
            <div id='progressBar' style={{width:`${progress}%`}}></div>

            <div>
                <h1></h1>

                <small></small>

                <div id='starOverlay'>
                    <span className='stars'></span>
                </div>

                <p className='question'></p>

                <div id='answers'>
                    
                </div>

                <h2 id='answerStatus'></h2>

                <button id='nextQuestion' onClick={nextQuestion}>next</button>

                <div id='score'></div>
            </div>
        </div>
    )
}

export default App
