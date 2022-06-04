import React, {useState, useEffect, useMemo} from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Progress() {
    const numOfQuestions = useSelector((state) => state.numOfQuestions.value)
    const currentNum = useSelector((state) => state.currentNum.value)
    const [progress, setProgress] = React.useState(0);

    // console.log(numOfQuestions)
    // console.log(currentNum)
    useEffect(() => {
        console.log(numOfQuestions)
    console.log(currentNum)
        setProgress((currentNum*100)/numOfQuestions)
    })
    
    return (
        <div id='progressBar' style={{width:`${progress}%`}}></div>
    )
}

export default Progress