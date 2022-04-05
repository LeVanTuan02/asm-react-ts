import { configureStore } from "@reduxjs/toolkit";
import sizeReducer from "./sizeSlice";

const store = configureStore({
    reducer: {
        size: sizeReducer
    }
})

export default store;