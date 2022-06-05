import React, {useState, useEffect, useMemo} from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Score() {
    const numOfQuestions = useSelector((state) => state.numOfQuestions.value)
    const answeredCorrect = useSelector((state) => state.answeredCorrect.value)
    const answeredFailed = useSelector((state) => state.answeredFailed.value)
    const [score, setScore] = React.useState(0);
    const [maxScore, setMaxScore] = React.useState(100);
    const [minScore, setMinScore] = React.useState(0);

    useEffect(
        () => {
            setScore(
                (answeredCorrect*100)/numOfQuestions
            )
    
            setMaxScore(
                100-((answeredFailed*100)/numOfQuestions)
            )

            setMinScore(
                100-maxScore
            )
        },[answeredCorrect, answeredFailed]
    )

    useEffect(
        () => {
            setMinScore(
                100-maxScore
            )
        },[maxScore]
    )

    return (
        <div id='scoreChat'>
            <div id='scoreDsp'>
                <span>{score}%</span> 
                <span>{maxScore}%</span>
            </div>
            <div id='scoreOverlay' className="progress-bar" >
                <div id='score' className="progress-bar" style={{width:`${score}%`}}></div>
                <div id='minScore' className="progress-bar" style={{width:`${minScore}%`}}></div>
                <div id='maxScore' className="progress-bar" style={{width:`${maxScore}%`}}></div>
            </div>
        </div>
    )
}

export default Score