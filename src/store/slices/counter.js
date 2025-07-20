import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterVal: 0,
    maxValue: 100,
  },
  reducers: {
    increaseCounterByOne: (state) => {
      state.counterVal += 1;
    },
    decreaseCounterByOne: (state) => {
      state.counterVal -= 1;
    },
    increaseCounterByValue: (state, action) => {
      state.counterVal += action.payload;
    },
    resetCounter: (state) => {
      state.counterVal = 0;
    },
  },
});

export const {
  increaseCounterByOne,
  decreaseCounterByOne,
  increaseCounterByValue,
  resetCounter,
} = counterSlice.actions;
export default counterSlice.reducer;
