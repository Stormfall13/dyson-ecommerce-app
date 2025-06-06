import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import amountsReducer from './slices/amountsSlice';
import uiReducer from './slices/uiSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        amounts: amountsReducer,
        ui: uiReducer,
        cart: cartReducer,
    },
});

export default store;
