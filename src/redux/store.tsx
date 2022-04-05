import { configureStore } from "@reduxjs/toolkit";
import sizeReducer from "./sizeSlice";
import cateProductReducer from "./categoryProductSlice";

const store = configureStore({
    reducer: {
        size: sizeReducer,
        cateProduct: cateProductReducer
    }
})

export default store;