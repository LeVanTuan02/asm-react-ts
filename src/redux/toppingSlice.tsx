import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, getAll, remove, update } from "../api/topping";
import { ToppingType } from "../types/topping";

type ToppingState = {
    value: ToppingType[],
    totalTopping: number,
}

const initialState: ToppingState = {
    value: [],
    totalTopping: 0
}

export const getToppings = createAsyncThunk(
    "topping/getToppings",
    async ({ start, limit }: { start: number, limit: number}) => {
        const { data } = await getAll();
        const totalTopping = data.length;

        const { data: toppingList } = await getAll(start, limit);

        return { totalTopping, toppingList };
    }
)

export const addTopping = createAsyncThunk(
    "topping/addTopping",
    async (dataTopping: ToppingType) => {
        const { data } = await add(dataTopping);
        return data;
    }
)

export const updateTopping = createAsyncThunk(
    "topping/updateTopping",
    async (dataTopping: ToppingType) => {
        const { data } = await update(dataTopping);
        return data;
    }
)

export const deleteTopping = createAsyncThunk(
    "topping/deleteTopping",
    async (id?: string) => {
        return remove(id).then(() => id);
    }
)

const toppingSlice = createSlice({
    name: "topping",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getToppings.fulfilled, (state, { payload }) => {
            state.value = payload.toppingList;
            state.totalTopping = payload.totalTopping;
        });

        builder.addCase(addTopping.fulfilled, (state, { payload }) => {
            state.value = [...state.value, payload];
        })

        builder.addCase(updateTopping.fulfilled, (state, { payload }) => {
            state.value = state.value.map(item => item._id === payload._id ? payload :item);
        })

        builder.addCase(deleteTopping.fulfilled, (state, { payload }) => {
            state.value = state.value.filter(item => item._id !== payload);
        })
    }
})

export const selectTopping = (state: any) => state.topping.value;
export const selectTotalTopping = (state: any) => state.topping.totalTopping;
export default toppingSlice.reducer;