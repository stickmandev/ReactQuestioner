import React, {useState, useEffect, useMemo} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increase_CurrentNum} from './slices/currentNum_Slice'
import {increase_Data_Id} from './slices/data_Id_Slice'
import {increase_answeredCorrect} from './slices/answeredCorrect_Slice'
import {increase_answeredFailed} from './slices/answeredFailed_Slice'
import data from "../questions.json"  

function Answer() {
    const data_Id = useSelector((state) => state.data_Id.value)
    const numOfQuestions = useSelector((state) => state.numOfQuestions.value)
    const currentNum = useSelector((state) => state.currentNum.value)
    
    const [answers, setAnswers] = React.useState([]);
    const [answerStatus, setAnswerStatus] = React.useState([]);
    const [answersArr, setAnswersArr] = React.useState([]);
    const [nextBTN, setnextBTN] = React.useState(true);
    const [nextBTN_Disp, setNextBTN_Disp] = React.useState("hidden");

    const dispatch = useDispatch()
    
    const nextQuestion =()=>{
        if(currentNum<numOfQuestions){
            dispatch(increase_CurrentNum())
            dispatch(increase_Data_Id())
            setNextBTN_Disp("hidden")
        }
        const answerClass = document.getElementsByClassName("answers")
        for(let i=0; i<answerClass.length; i++){
            answerClass[i].disabled = false
        }
        setnextBTN(true)
        setAnswerStatus("")
        document.getElementById("correctAns").style.border="1px solid black"
    }

    const validateAns =(e)=>{
        if(e.target.innerText===decodeURIComponent(data[data_Id].correct_answer)){
            setAnswerStatus("Correct!")
            dispatch(increase_answeredCorrect())
            setNextBTN_Disp("visible")
        }else{
            setAnswerStatus("Sorry!")
            dispatch(increase_answeredFailed())
            setNextBTN_Disp("visible")
            document.getElementById("correctAns").style.border="2px solid black"
        }
        const answerClass = document.getElementsByClassName("answers")
        for(let i=0; i<answerClass.length; i++){
            answerClass[i].disabled = true
        }
        setnextBTN(false)
    }


    useMemo(
        () => {
            const answersConbinedArr = [
                <button className='answers' id='correctAns' onClick={validateAns} >
                    {decodeURIComponent(data[data_Id].correct_answer)}
                </button>
            ];
            
            data[data_Id].incorrect_answers.map(  
                (answers, pk, answersObj)=>{
                    answersConbinedArr.push(
                        <button className='answers' onClick={validateAns} >
                            {decodeURIComponent(answers)}
                        </button>
                    )
                }
            );

            const shuffleArray = array => {
                for (let i = array.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  const temp = array[i];
                  array[i] = array[j];
                  array[j] = temp;
                }
            };
    
            shuffleArray(answersConbinedArr);
            setAnswersArr(answersConbinedArr);
        }, [data_Id]
    );


    useEffect(
        ()=>{
            setAnswers(answersArr)  
        }, [answersArr]
    )


    return (
        <>
            <div id='answers'>
                {answers}
            </div>

            <h2 id='answerStatus' >{answerStatus}</h2>

            <button id='nextQuestion'  onClick={nextQuestion} disabled={nextBTN} style={{visibility:nextBTN_Disp}}>next</button>
        </>
    )
}

export default Answer