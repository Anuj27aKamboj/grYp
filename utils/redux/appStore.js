import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer:{ //we provide the different reducers
        cart: cartReducer,
    },
})

export default appStore;
