import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, getAll, remove, update } from "../api/user";
import { UserType } from "../types/user";

type UserState = {
    value: UserType[],
    totalUser: number
}

const initialState: UserState = {
    value: [],
    totalUser: 0
}

export const getUsers = createAsyncThunk(
    "user/getUsers",
    async ({ start, limit }: { start: number, limit: number }) => {
        const { data } = await getAll();
        const totalUser = data.length;
        
        const { data: dataUser } = await getAll(start, limit);

        return { totalUser, dataUser };
    }
)

export const addUser = createAsyncThunk(
    "user/addUser",
    async (dataUser: UserType) => {
        const { data } = await add(dataUser);
        return data;
    }
)

export const updateUser = createAsyncThunk(
    "user/updateUser",
    async (dataUser: UserType) => {
        const { data } = await update(dataUser);
        return data;
    }
)

export const deleteUser = createAsyncThunk(
    "user/deleteUser",
    async (id?: string) => {
        return remove(id).then(() => id);
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, { payload }) => {
            state.value = payload.dataUser;
            state.totalUser = payload.totalUser;
        })

        builder.addCase(addUser.fulfilled, (state, { payload }) => {
            state.value = [...state.value, payload];
        })

        builder.addCase(updateUser.fulfilled, (state, { payload }) => {
            state.value = state.value.map(item => item._id === payload._id ? payload : item);
        })

        builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
            state.value = state.value.filter(item => item._id !== payload);
        })
    }
})

export const selectUsers = (state: any) => state.user.value;
export const selectTotalUser = (state: any) => state.user.totalUser;
export default userSlice.reducer;