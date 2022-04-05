import { configureStore } from "@reduxjs/toolkit";
import sizeReducer from "./sizeSlice";
import cateProductReducer from "./categoryProductSlice";
import newsReducer from "./newsSlice";

const store = configureStore({
    reducer: {
        size: sizeReducer,
        cateProduct: cateProductReducer,
        news: newsReducer
    }
})

export default store;