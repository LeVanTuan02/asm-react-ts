import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, update, updateMyInfo } from "../api/user";
import { UserType } from "../types/user";

type AuthState = {
    isLogged: boolean,
    value: {
        user?: {}
    }
}

const initialState: AuthState = {
    isLogged: false,
    value: {}
}

export const updateAuth = createAsyncThunk(
    "auth/updateAuth",
    async (dataAuth: UserType) => {
        return update(dataAuth)
            .then(async() => {
                const { data: { password, ...rest } } = await get(dataAuth._id);
                return rest;
            })
    }
)

export const updateMyAccount = createAsyncThunk(
    "auth/updateMyAccount",
    async (dataAuth: UserType) => {
        return updateMyInfo(dataAuth)
            .then(async() => {
                const { data: { password, ...rest } } = await get(dataAuth._id);
                return rest;
            })
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signin(state, { payload }) {
            state.isLogged = true;
            state.value = payload;
        },
        logout(state) {
            state.value = {};
            state.isLogged = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(updateAuth.fulfilled, (state, { payload }) => {
            state.value.user = payload;
        })

        builder.addCase(updateMyAccount.fulfilled, (state, { payload }) => {
            state.value.user = payload;
        })
    }
})

export const { signin, logout } = authSlice.actions;
export const selectStatusLoggin = (state: any) => state.auth.isLogged;
export const selectAuth = (state: any) => state.auth.value;
export default authSlice.reducer;