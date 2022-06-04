import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}

export const currentNum_Slice = createSlice({
  name: 'currentNum',
  initialState,
  reducers: {
    increase_CurrentNum: (state) => {
      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increase_CurrentNum } = currentNum_Slice.actions

export default currentNum_Slice.reducer