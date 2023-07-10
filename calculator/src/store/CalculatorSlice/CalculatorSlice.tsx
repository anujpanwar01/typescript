import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Slice } from "@reduxjs/toolkit";

const initialState: StateType = {
  total: 0,
  current: 0,
};

export const calculatorSlice: Slice<StateType> = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addition: (state: StateType, action: PayloadAction<number>) => {
      state.total += action.payload;
    },
    subtraction: (state: StateType, action: PayloadAction<number>) => {
      state.total -= action.payload;
    },
    multiplication: (state: StateType, action: PayloadAction<number>) => {
      state.total *= action.payload;
    },
    division: (state: StateType, action: PayloadAction<number>) => {
      state.total = state.total / action.payload;
    },
    currentNumber: (state: StateType, { payload }: PayloadAction<string>) => {
      const number =
        state.current !== 0 ? String(state.current) + payload : payload;
      state.current = +number;
    },
    clearAll: (state: StateType) => {
      state = initialState;
    },
  },
});

export const {
  addition,
  subtraction,
  multiplication,
  division,
  currentNumber,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;

type StateType = {
  total: number;
  current: number;
};
