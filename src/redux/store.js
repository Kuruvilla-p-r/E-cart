import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
    reducer:{
        wishlistReducer:wishlistSlice,
        cartlistReducer:cartSlice
    }
})