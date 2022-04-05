import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, getAll, remove, update } from "../api/store";
import { StoreType } from "../types/store";

type StoreState = {
    value: StoreType[],
    totalStore: number
}

const initialState: StoreState = {
    value: [],
    totalStore: 0
}

export const getStores = createAsyncThunk(
    "store/getStores",
    async ({ start, limit }: { start: number, limit: number}) => {
        const { data } = await getAll();
        const totalStore = data.length;
        
        const { data: storeList } = await getAll(start, limit);

        return { totalStore, storeList };
    }
)

export const addStore = createAsyncThunk(
    "store/addStore",
    async (dataStore: StoreType) => {
        const { data } = await add(dataStore);
        return data;
    }
)

export const updateStore = createAsyncThunk(
    "store/updateStore",
    async (dataStore: StoreType) => {
        const { data } = await update(dataStore);
        return data;
    }
)

export const deleteStore = createAsyncThunk(
    "store/deleteStore",
    async (id?: string) => {
        return remove(id).then(() => id);
    }
)

const storeSlice = createSlice({
    name: "store",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStores.fulfilled, (state, { payload }) => {
            state.value = payload.storeList;
            state.totalStore = payload.totalStore;
        });

        builder.addCase(addStore.fulfilled, (state, { payload }) => {
            state.value = [...state.value, payload];
        });

        builder.addCase(updateStore.fulfilled, (state, { payload }) => {
            state.value = state.value.map(item => item._id === payload._id ? payload : item);
        });

        builder.addCase(deleteStore.fulfilled, (state, { payload }) => {
            state.value = state.value.filter(item => item._id !== payload);
        })
    }
})

export const selectStores = (state: any) => state.store.value;
export const selectTotalStore = (state: any) => state.store.totalStore;
export default storeSlice.reducer;