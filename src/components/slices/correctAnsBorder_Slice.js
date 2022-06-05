import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '1px solid black',
}

export const correctAnsBorder_Slice = createSlice({
  name: 'correctAnsBorder',
  initialState,
  reducers: {
    increase_correctAnsBorder: (state) => {
      state.value = '2px solid black'
    },
  },
})

// Action creators are generated for each case reducer function
export const { increase_correctAnsBorder } = correctAnsBorder_Slice.actions

export default correctAnsBorder_Slice.reducer