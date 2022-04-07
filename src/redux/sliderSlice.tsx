import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, getAll, remove, update } from "../api/slider";
import { SliderType } from "../types/slider";

type SliderState = {
    value: SliderType[]
}

const initialState: SliderState = {
    value: []
}

export const getSliders = createAsyncThunk(
    "slider/getSliders",
    async () => {
        const { data } = await getAll();
        return data;
    }
)

export const addSlider = createAsyncThunk(
    "slider/addSlider",
    async (dataSlider: SliderType) => {
        const { data } = await add(dataSlider);
        return data;
    }
)

export const updateSlider = createAsyncThunk(
    "slider/updateSlider",
    async (dataSlider: SliderType) => {
        const { data } = await update(dataSlider);
        return data;
    }
)

export const deleteSlider = createAsyncThunk(
    "slider/deleteSlider",
    async (id?: string) => {
        return remove(id).then(() => id);
    }
)

const sliderSlice = createSlice({
    name: "slider",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSliders.fulfilled, (state, { payload }) => {
            state.value = payload;
        });

        builder.addCase(addSlider.fulfilled, (state, { payload }) => {
            state.value = [...state.value, payload];
        });

        builder.addCase(updateSlider.fulfilled, (state, { payload }) => {
            state.value = state.value.map(item => item._id === payload._id ? payload: item);
        });

        builder.addCase(deleteSlider.fulfilled, (state, { payload }) => {
            state.value = state.value.filter(item => item._id !== payload);
        });
    }
})

export const selectSlider = (state: any) => state.slider.value;
export default sliderSlice.reducer;