import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import amountsReducer from './slices/amountsSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        amounts: amountsReducer,
    },
});

export default store;
