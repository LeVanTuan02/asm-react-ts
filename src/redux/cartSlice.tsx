import { createSlice } from "@reduxjs/toolkit";
import { CartType } from "../types/cart";
import { VoucherType } from "../types/voucher";

type CartState = {
    cart: CartType[],
    voucher: VoucherType[],
    listIdVoucher: any
}

const initialState: CartState = {
    cart: [],
    voucher: [],
    listIdVoucher: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart({ cart }, { payload: newProduct }: { payload: CartType }) {
            const exitsProduct = cart.find(item => item.productId === newProduct.productId && item.sizeId === newProduct.sizeId && item.toppingId === newProduct.toppingId && item.ice === newProduct.ice && item.sugar === newProduct.sugar);

            if (!exitsProduct) {
                cart.push(newProduct);
            } else {
                exitsProduct.quantity += +newProduct.quantity;
            }
        },
        removeItemCart(state, { payload }) {
            state.cart = state.cart.filter(item => item.id !== payload);
        },
        updateQuantity(state, { payload: listQuantity }: { payload: { id: string, quantity: number }[]}) {
            listQuantity.forEach((cartItem) => {
                if (!cartItem.quantity) {
                    state.cart = state.cart.filter((item) => item.id !== cartItem.id);
                } else {
                    const currentProduct: any = state.cart.find((item) => item.id === cartItem.id);
                    currentProduct.quantity = cartItem.quantity;
                }
            });
        },
        addVoucher({ voucher }, { payload: voucherItem }) {
            const exitsVoucher = voucher.some((item) => item._id === voucherItem._id);

            if (!exitsVoucher) {
                voucher.push(voucherItem);
            }
        },
        removeVoucher(state, { payload: idVoucher }) {
            state.voucher = state.voucher.filter((item) => item._id !== idVoucher);
        },
        getListIdVoucher(state) {
            state.listIdVoucher = state.voucher.map((item) => item._id);
        },
        finishOrder(state) {
            state.cart = [];
            state.listIdVoucher = [];
            state.voucher = [];
        }
    }
})

export const selectCart = (state: any) => state.cart.cart;
export const selectVoucher = (state: any) => state.cart.voucher;
export const selectListIdVoucher = (state: any) => state.cart.listIdVoucher;
export const {
    addCart,
    removeItemCart,
    updateQuantity,
    addVoucher,
    removeVoucher,
    getListIdVoucher,
    finishOrder
} = cartSlice.actions;
export default cartSlice.reducer;