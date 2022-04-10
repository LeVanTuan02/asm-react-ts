import { CartType } from "../types/cart";
import { VoucherType } from "../types/voucher";

export const isAuthenticate = () => {
    return JSON.parse(JSON.parse(localStorage.getItem("persist:root") as string).auth).value;
}

const getCart = () => {
    return JSON.parse(localStorage.getItem("cart") as string) || [];
}


export const addToCart = (newProduct: CartType, next: () => void, cart = getCart()) => {

    const exitsProduct = cart.find(item => item.productId === newProduct.productId && item.sizeId === newProduct.sizeId && item.toppingId === newProduct.toppingId && item.ice === newProduct.ice && item.sugar === newProduct.sugar);

    if (!exitsProduct) {
        cart.push(newProduct);
    } else {
        exitsProduct.quantity += +newProduct.quantity;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};

export const updateQuantity = (listQuantity: { id: string, quantity: number }[] | undefined, next: () => void, cart = getCart()) => {
    listQuantity?.forEach((cartItem) => {
        if (!cartItem.quantity) {
            cart = cart.filter((item) => item.id !== cartItem.id);
        } else {
            const currentProduct = cart.find((item) => item.id === cartItem.id);
            currentProduct.quantity = cartItem.quantity;
        }
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    next();
}

export const removeItemCart = (cartId: string, next: () => void, cart = getCart()) => {
    cart = cart.filter(item => item.id !== cartId);
    localStorage.setItem("cart", JSON.stringify(cart));

    next();
}

export const finishOrder = (next: () => void) => {
    localStorage.removeItem("cart");
    localStorage.removeItem("voucher");

    next();
}

const getVoucher = () => {
    return JSON.parse(localStorage.getItem("voucher") as string) || [];
}

export const addVoucher = (voucherItem: VoucherType, next: () => void, voucher = getVoucher()) => {
    const exitsVoucher = voucher.some((item: any) => item._id === voucherItem._id);

    if (!exitsVoucher) {
        voucher.push(voucherItem);
        localStorage.setItem("voucher", JSON.stringify(voucher));
    }

    next();
}

export const removeVoucher = (id: string, next: () => void, voucher = getVoucher()) => {
    voucher = voucher.filter((item: any) => item._id !== id);
    localStorage.setItem("voucher", JSON.stringify(voucher));
    next();
}

export const getListIdVoucher = (voucher = getVoucher()) => {
    let listId = [];

    if (voucher.length) {
        listId = voucher.map((item: any) => item._id);
    }

    return listId;
}