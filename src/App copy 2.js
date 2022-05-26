import React, {useState, useEffect} from 'react'
import './App.css'
import data from "./questions.json"  
import star1 from "./star1.png"  
import star2 from "./star2.png"  

function App () {
    const [numOfQuestions, setNumOfQuestions] = React.useState(0);
    const [currentNum, setCurrentNum] = React.useState(1);
    const [progress, setProgress] = React.useState(0);
    const [dataId, setDataId] = React.useState(0);
    const [difficulty, setDifficulty] = React.useState([]);
    const [answers, setAnswers] = React.useState([]);
    const [answerStatus, setAnswerStatus] = React.useState([]);
    const [nextBTN, setnextBTN] = React.useState(true);
    const [answeredCorrect, setAnsweredCorrect] = React.useState(0);
    const [answeredFailed, setAnsweredFailed] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [maxScore, setMaxScore] = React.useState(0);
    

    const nextQuestion =()=>{
        if(currentNum<numOfQuestions){
            setCurrentNum(currentNum+1)
            setDataId(dataId+1)
        }
        const answerClass = document.getElementsByClassName("answers")
        for(let i=0; i<answerClass.length; i++){
            answerClass[i].disabled = false
        }
        setnextBTN(true)
        setAnswerStatus("")
    }

    const validateAns =(e)=>{
        if(e.target.innerText===data[dataId].correct_answer.replace(/%3A%20|%20/g," ").replace(/%27|%3F|%22|%2C/g,"")){
            setAnswerStatus("Correct!")
            setAnsweredCorrect(answeredCorrect+1)
        }else{
            setAnswerStatus("Sorry!")
            setAnsweredFailed(answeredFailed+1)
        }
        const answerClass = document.getElementsByClassName("answers")
        for(let i=0; i<answerClass.length; i++){
            answerClass[i].disabled = true
        }
        setnextBTN(false)
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

        const answersArr = []
        data[dataId].incorrect_answers.map(
            (answers, pk, answersObj)=>{
                answersArr.push(
                    <button className='answers' onClick={validateAns}>{answers.replace(/%3A%20|%20/g," ").replace(/%27|%3F|%22|%2C|%24/g,"")}</button>
                )
            }
        )

        answersArr.push(
            <button className='answers' onClick={validateAns}>{data[dataId].correct_answer.replace(/%3A%20|%20/g," ").replace(/%27|%3F|%22|%2C|%24/g,"")}</button>
        )

        const shuffleArray = array => {
            for (let i = array.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
        }

        shuffleArray(answersArr)
        setAnswers(answersArr)

        setScore(
            (answeredCorrect*100)/numOfQuestions
        )

        setMaxScore(
            100-((answeredFailed*100)/numOfQuestions)
        )
    }, [ progress, nextBTN]);
    
    

    return (
        <div className='App'>
            <div id='progressBar' style={{width:`${progress}%`}}></div>

            <div id='bigOverlay'>
                <div>
                    <h1> Question {currentNum} of {numOfQuestions} </h1>

                    <h3>{data[dataId].category.replace(/%3A/g,":").replace(/%20/g," ")}</h3>

                    <div id='starOverlay'>
                        <small className='stars'> {difficulty} </small>
                    </div>
                </div>

                <p className='question'>{data[dataId].question.replace(/%3A%20|%20/g," ").replace(/%27|%3F|%22|%2C/g,"")}</p>

                <div id='answers'>
                    {answers}
                </div>

                <h2 id='answerStatus'>{answerStatus}</h2>

                <button id='nextQuestion' onClick={nextQuestion} disabled={nextBTN}>Next Question</button>

                <div id='scoreChat'>
                    <span>{score}%</span> <span>{maxScore}%</span>
                    <div id='scoreOverlay'>
                        <div id='maxScore' style={{width:`${maxScore}%`}}>
                            <div id='score' style={{width:`${score}%`}}>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
