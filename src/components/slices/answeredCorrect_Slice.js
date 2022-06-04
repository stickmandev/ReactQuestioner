import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const answeredCorrect_Slice = createSlice({
  name: 'answeredCorrect',
  initialState,
  reducers: {
    increase_answeredCorrect: (state) => {
      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increase_answeredCorrect } = answeredCorrect_Slice.actions

export default answeredCorrect_Slice.reducer