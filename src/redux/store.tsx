import { configureStore } from "@reduxjs/toolkit";
import sizeReducer from "./sizeSlice";
import cateProductReducer from "./categoryProductSlice";
import newsReducer from "./newsSlice";
import cateNewsReducer from "./cateNewsSlice";
import contactReducer from "./contactSlice";
import sliderReducer from "./sliderSlice";
import productReducer from "./productSlice";
import storeReducer from "./storeSlice";
import toppingReducer from "./toppingSlice";
import voucherReducer from "./voucherSlice";

const store = configureStore({
    reducer: {
        size: sizeReducer,
        cateProduct: cateProductReducer,
        news: newsReducer,
        cateNews: cateNewsReducer,
        contact: contactReducer,
        slider: sliderReducer,
        product: productReducer,
        store: storeReducer,
        topping: toppingReducer,
        voucher: voucherReducer
    }
})

export default store;