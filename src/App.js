import React, {useState, useEffect, useMemo} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './components/slices/numOfQuestions_Slice'
import './App.css'
import data from "./questions.json"  
import star1 from "./star1.png"  
import star2 from "./star2.png"  
import Questions from './components/Questions'
import Progress from './components/Progress'
import Answer from './components/Answer'
import Score from './components/Score'

function App () {
    const dispatch = useDispatch()

    // console.log(count)
    console.log("hdhj")

    
    


    return (
        <div className='App'>
            <Progress/>

            <div id='bigOverlay'>
                <Questions/>

                <Answer/>

                <Score />
            </div>
        </div>
    )
}

export default App
