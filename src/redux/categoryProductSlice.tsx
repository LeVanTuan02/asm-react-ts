import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, getAll, remove, update } from "../api/category";
import { CategoryType } from "../types/category";

type CateProductState = {
    value: CategoryType[]
}

const initialState: CateProductState = {
    value: []
}

export const getCates = createAsyncThunk(
    "categoryProduct/getCates",
    async () => {
        const { data } = await getAll();
        return data;
    }
)

export const deleteCate = createAsyncThunk(
    "categoryProduct/deleteCate",
    async (id?: string) => {
        return remove(id).then(() => id);
    }
)

export const addCate = createAsyncThunk(
    "categoryProduct/addCate",
    async (dataCate: CategoryType) => {
        const { data } = await add(dataCate);
        return data;
    }
)

export const updateCate = createAsyncThunk(
    "categoryProduct/updateCate",
    async (dataCate: CategoryType) => {
        const { data } = await update(dataCate);
        return data;
    }
)

const cateProductSlice = createSlice({
    name: "categoryProduct",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCates.fulfilled, (state, { payload }) => {
            state.value = payload;
        });

        builder.addCase(deleteCate.fulfilled, (state, { payload }) => {
            state.value = state.value.filter(item => item._id !== payload);
        });

        builder.addCase(addCate.fulfilled, (state, { payload }) => {
            state.value = [...state.value, payload];
        });

        builder.addCase(updateCate.fulfilled, (state, { payload }) => {
            state.value = state.value.map(item => item._id === payload._id ? payload : item);
        })
    }
})

export const selectCatesProduct = (state: any) => state.cateProduct.value;

export default cateProductSlice.reducer;