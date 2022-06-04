import React, {useState, useEffect, useMemo} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import data from "../questions.json"  
import star1 from "../star1.png"  
import star2 from "../star2.png"  

function Questions() {
    const numOfQuestions = useSelector((state) => state.numOfQuestions.value)
    const currentNum = useSelector((state) => state.currentNum.value)
    const data_Id = useSelector((state) => state.data_Id.value)
    const [difficulty, setDifficulty] = React.useState([]);
    
    useEffect(() => {
        switch (data[data_Id].difficulty) {
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
        console.log(data_Id)
    }, [data_Id])

    return (
        <>
            <div>
                <h1> Question {currentNum} of {numOfQuestions} </h1>

                <h3>{data[data_Id].category.replace(/%3A/g,":").replace(/%20/g," ")}</h3>

                <div id='starOverlay'>
                    <small className='stars'> {difficulty} </small>
                </div>
            </div>

            <p className='question'>{data[data_Id].question.replace(/%3A%20|%20/g," ").replace(/%27|%3F|%22|%2C/g,"")}</p>
        </>
    )
}

export default Questions