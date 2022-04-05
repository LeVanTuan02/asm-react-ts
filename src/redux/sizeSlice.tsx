import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, getAll, remove } from "../api/size";
import { SizeType } from "../types/size";

type SizeState = {
    value: SizeType[]
}

const initialState: SizeState = {
    value: []
}

export const getSizes = createAsyncThunk(
    "size/getSizes",
    async () => {
        const { data } = await getAll();
        return data;
    }
)

export const deleteSize = createAsyncThunk(
    "size/deleteSize",
    async (id?: string) => {
        return remove(id).then(() => id);
    }
)

export const addSize = createAsyncThunk(
    "size/addSize",
    async (sizeData: SizeType) => {
        const { data } = await add(sizeData);
        return data;
    }
)

const sizeSlice = createSlice({
    name: "size",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getSizes.fulfilled, (state, action) => {
            state.value = action.payload;
        });

        builder.addCase(deleteSize.fulfilled, (state, action) => {
            state.value = state.value.filter((item: any) => item._id !== action.payload);
        });

        builder.addCase(addSize.fulfilled, (state, action) => {
            state.value = [...state.value, action.payload];
        });
    }
});

export const selectSize = (state: { size: { value: any; }; }) => state.size.value;

export default sizeSlice.reducer;