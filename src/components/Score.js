import React, {useState, useEffect, useMemo} from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Score() {
    const numOfQuestions = useSelector((state) => state.numOfQuestions.value)
    const answeredCorrect = useSelector((state) => state.answeredCorrect.value)
    const answeredFailed = useSelector((state) => state.answeredFailed.value)
    const [score, setScore] = React.useState(0);
    const [maxScore, setMaxScore] = React.useState(0);

    useEffect(
        () => {
            setScore(
                (answeredCorrect*100)/numOfQuestions
            )
    
            setMaxScore(
                100-((answeredFailed*100)/numOfQuestions)
            )
        }
    )

    return (
        <div id='scoreChat'>
            <span>{score}%</span> <span>{maxScore}%</span>
            <div id='scoreOverlay'>
                <div id='maxScore' style={{width:`${maxScore}%`}}>
                    <div id='score' style={{width:`${score}%`}}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Score