import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

const roundNumber = (num: number) => {
  return Math.round(num * 10) / 10
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value = roundNumber(state.value + action.payload)
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value = roundNumber(state.value - action.payload)
    },
    multiplication: (state, action: PayloadAction<number>) => {
      state.value = roundNumber(state.value * action.payload)
    },
    division: (state, action: PayloadAction<number>) => {
      state.value = roundNumber(state.value / action.payload)
    },
    reset: (state) => {
      state.value = 0
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, multiplication, division, reset } =
  counterSlice.actions

export default counterSlice.reducer
