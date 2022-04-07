import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, getAll, remove, update } from "../api/voucher";
import { VoucherType } from "../types/voucher";

type VoucherState = {
    value: VoucherType[],
    totalVoucher: number
}

const initialState: VoucherState = {
    value: [],
    totalVoucher: 0
}

export const getVouchers = createAsyncThunk(
    "voucher/getVouchers",
    async ({ start, limit }: { start: number, limit: number}) => {
        const { data } = await getAll();
        const totalVoucher = data.length;
        
        const { data: listVoucher } = await getAll(start, limit);

        return { totalVoucher, listVoucher };
    }
)

export const addVoucher = createAsyncThunk(
    "vouhcer/addVoucher",
    async (dataVoucher: VoucherType) => {
        const { data } = await add(dataVoucher);
        return data;
    }
)

export const updateVoucher = createAsyncThunk(
    "voucher/updateVoucher",
    async (dataVoucher: VoucherType) => {
        const { data } = await update(dataVoucher);
        return data;
    }
)

export const deleteVoucher = createAsyncThunk(
    "voucher/deleteVoucher",
    async (id?: string) => {
        return remove(id).then(() => id);
    }
)

const voucherSlice = createSlice({
    name: "voucher",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getVouchers.fulfilled, (state, { payload }) => {
            state.value = payload.listVoucher;
            state.totalVoucher = payload.totalVoucher;
        })

        builder.addCase(addVoucher.fulfilled, (state, { payload }) => {
            state.value = [...state.value, payload];
        })

        builder.addCase(updateVoucher.fulfilled, (state, { payload }) => {
            state.value = state.value.map(item => item._id === payload._id ? payload : item);
        })

        builder.addCase(deleteVoucher.fulfilled, (state, { payload }) => {
            state.value = state.value.filter(item => item._id !== payload);
        })
    }
})

export const selectVouchers = (state: any) => state.voucher.value;
export const selectTotalVoucher = (state: any) => state.voucher.totalVoucher;
export default voucherSlice.reducer;