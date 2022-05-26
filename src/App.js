import React, {useState, useEffect} from 'react'
import './App.css'
import data from "./questions.json"  
import star1 from "./star1.png"  
import star2 from "./star2.png"  

function App () {
    // const [numOfQuestions, set] = React.useState([]);
    // const [numOfQuestions, set] = React.useState(0);
    const [numOfQuestions, setNumOfQuestions] = React.useState(0);
    const [currentNum, setCurrentNum] = React.useState(1);
    const [progress, setProgress] = React.useState(0);
    const [dataId, setDataId] = React.useState(0);
    const [difficulty, setDifficulty] = React.useState([]);

    const nextQuestion =()=>{
        if(currentNum<numOfQuestions){
            setCurrentNum(currentNum+1)
            setDataId(dataId+1)
        }
        
    }

    useEffect(() => {
        setNumOfQuestions(data.length)
        setProgress((currentNum*100)/numOfQuestions)
        switch (data[dataId].difficulty) {
            case 'easy':
                setDifficulty(
                    <>
                    <img src={star1} alt="" />
                    <img src={star2} alt="" />
                    <img src={star2} alt="" />
                    </>
                )
                break;

                case 'medium':
                    setDifficulty(
                        <>
                        <img src={star1} alt="" />
                        <img src={star1} alt="" />
                        <img src={star2} alt="" />
                        </>
                    )
                    break;

                case 'hard':
                    setDifficulty(
                        <>
                        <img src={star1} alt="" />
                        <img src={star1} alt="" />
                        <img src={star1} alt="" />
                        </>
                    )
                    break;
        
            default:
                break;
        }
        // console.log(dataId);
    }, [currentNum, progress]);
    
    

    return (
        <div className='App'>
            <div id='progressBar' style={{width:`${progress}%`}}></div>

            <div>
                <h1> Question {currentNum} of {numOfQuestions} </h1>

                <small>{data[dataId].category.replace(/%3A%20|%20/g," ")}</small>

                <div id='starOverlay'>
                    <small className='stars'> {difficulty} </small>
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
