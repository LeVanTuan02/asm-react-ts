import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, getAll, remove } from "../api/favorites";
import { FavoritesProductType } from "../types/product";

type WishlistState = {
    value: FavoritesProductType[],
    showWishlist: boolean
}

const initialState: WishlistState = {
    value: [],
    showWishlist: false
}

export const getWishlist = createAsyncThunk(
    "wishlist/getWishlist",
    async (userId: string) => {
        const { data } = await getAll(userId);
        return data;
    }
)

export const addWishlist = createAsyncThunk(
    "wishlist/addWishlist",
    async ({ userId, productId}: { userId: string, productId: string }) => {
        return add({ userId, productId }).then(async () => {
            const { data } = await getAll(userId);
            return data;
        })
    }
)

export const deleteWishlist = createAsyncThunk(
    "wishlist/deleteWishlist",
    async (id: string) => {
        return remove(id).then(() => id);
    }
)

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        clearWishlist(state) {
            state.value = [];
        },
        showWishlist(state, { payload }) {
            state.showWishlist = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getWishlist.fulfilled, (state, { payload }) => {
            state.value = payload;
        })

        builder.addCase(addWishlist.fulfilled, (state, { payload }) => {
            state.value = payload;
            state.showWishlist = true;
        })

        builder.addCase(deleteWishlist.fulfilled, (state, { payload }) => {
            state.value = state.value.filter(item => item._id !== payload);
        })
    }
});

export const selectWishlist = (state: any) => state.wishlist.value;
export const selectShowWishlist = (state: any) => state.wishlist.showWishlist;
export const { clearWishlist, showWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;