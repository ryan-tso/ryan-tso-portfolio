import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: ""
}

export const scrollLocationSlice = createSlice({
  name: 'scrollLocation',
  initialState,
  reducers: {
    setScrollLocation: (state, action) => {
      state.value = action.payload
    },
    resetScrollLocation: (state) => {
      state.value = ""
    },
  }
})

export const { setScrollLocation, resetScrollLocation } = scrollLocationSlice.actions
export default scrollLocationSlice.reducer