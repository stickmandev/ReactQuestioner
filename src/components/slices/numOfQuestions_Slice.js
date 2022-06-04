import data from "../../questions.json"  
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: data.length,
}

export const numOfQuestions_Slice = createSlice({
    name: 'numOfQuestions',
    initialState,
    reducers: {
        // 
    },
})

// Action creators are generated for each case reducer function

export default numOfQuestions_Slice.reducer