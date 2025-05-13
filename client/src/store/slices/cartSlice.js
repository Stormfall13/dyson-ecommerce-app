// store/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, amount, product } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem) {
        existingItem.amount += amount;
      } else {
        state.push({ ...product, amount });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const newState = state.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    },
    changeAmount: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.find(item => item.id === id);
      if (item) {
        item.amount = amount;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCart: () => {
      localStorage.removeItem('cart');
      return [];
    }
  }
});

export const { addToCart, removeFromCart, changeAmount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
