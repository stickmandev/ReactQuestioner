import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const data_Id_Slice = createSlice({
  name: 'data_Id',
  initialState,
  reducers: {
    increase_Data_Id: (state) => {
      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increase_Data_Id } = data_Id_Slice.actions

export default data_Id_Slice.reducer