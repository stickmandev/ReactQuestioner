import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const answeredFailed_Slice = createSlice({
  name: 'answeredFailed',
  initialState,
  reducers: {
    increase_answeredFailed: (state) => {
      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increase_answeredFailed } = answeredFailed_Slice.actions

export default answeredFailed_Slice.reducer