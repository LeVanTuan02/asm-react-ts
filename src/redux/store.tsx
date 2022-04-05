import { configureStore } from "@reduxjs/toolkit";
import sizeReducer from "./sizeSlice";
import cateProductReducer from "./categoryProductSlice";
import newsReducer from "./newsSlice";
import cateNewsReducer from "./cateNewsSlice";

const store = configureStore({
    reducer: {
        size: sizeReducer,
        cateProduct: cateProductReducer,
        news: newsReducer,
        cateNews: cateNewsReducer
    }
})

export default store;