import React, {useState, useEffect, useMemo} from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Progress() {
    const numOfQuestions = useSelector((state) => state.numOfQuestions.value)
    const currentNum = useSelector((state) => state.currentNum.value)
    const [progress, setProgress] = React.useState(0);

    useEffect(() => {
        setProgress((currentNum*100)/numOfQuestions)
    })
    
    return (
        <progress  id='progressBar' className="progress-bar" style={{width:`${progress}%`}}></progress>
    )
}

export default Progress