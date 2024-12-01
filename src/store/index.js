import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";
import favoriteSlice from "./slices/favoriteSlice";

export const store = configureStore({
    reducer:{
        user: userSlice,
        cart:cartSlice,
        favorite: favoriteSlice,
    }
});
