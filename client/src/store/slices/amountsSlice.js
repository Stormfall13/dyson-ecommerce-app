import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const amountsSlice = createSlice({
  name: 'amounts',
  initialState,
  reducers: {
    setAmount(state, action) {
      const { id, value } = action.payload;
      state[id] = value < 1 ? 1 : value;
    },
    increment(state, action) {
      const id = action.payload;
      state[id] = (state[id] || 1) + 1;
    },
    decrement(state, action) {
      const id = action.payload;
      state[id] = Math.max((state[id] || 1) - 1, 1);
    }
  }
});

export const { setAmount, increment, decrement } = amountsSlice.actions;
export default amountsSlice.reducer;