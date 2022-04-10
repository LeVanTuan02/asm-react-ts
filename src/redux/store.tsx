import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./rootReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "cart"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export default persistStore(store);