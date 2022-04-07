import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAll, remove } from "../api/contact";
import { ContactType } from "../types/contact";

type ContactState = {
    value: ContactType[],
    totalContact: number
}

const initialState: ContactState = {
    value: [],
    totalContact: 0
}

export const getContacts = createAsyncThunk(
    "contact/getContacts",
    async ({ start, limit }: { start: number, limit: number }) => {
        const { data } = await getAll();
        const totalContact = data.length;
        
        const { data: dataContact } = await getAll(start, limit);
        return { totalContact, dataContact };
    }
)

export const deleteContact = createAsyncThunk(
    "contact/deleteContact",
    async (id?: string) => {
        return remove(id).then(() => id);
    }
)

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getContacts.fulfilled, (state, { payload }) => {
            state.value = payload.dataContact;
            state.totalContact = payload.totalContact;
        });

        builder.addCase(deleteContact.fulfilled, (state, { payload }) => {
            state.value = state.value.filter(item => item._id !== payload);
        })
    }
})

export const selectContact = (state: any) => state.contact.value;
export const selectTotalContact = (state: any) => state.contact.totalContact;
export default contactSlice.reducer;