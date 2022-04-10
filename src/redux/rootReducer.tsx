import { combineReducers } from "@reduxjs/toolkit";
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
import userReducer from "./userSlice";
import wishlistReducer from "./wishlistSlice";
import authReducer from "./authSlice";

const store = combineReducers({
    size: sizeReducer,
    cateProduct: cateProductReducer,
    news: newsReducer,
    cateNews: cateNewsReducer,
    contact: contactReducer,
    slider: sliderReducer,
    product: productReducer,
    store: storeReducer,
    topping: toppingReducer,
    voucher: voucherReducer,
    user: userReducer,
    wishlist: wishlistReducer,
    auth: authReducer
})

export default store;