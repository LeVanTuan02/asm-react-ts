import { CartType } from "../types/cart";

export const isAuthenticate = () => {
    const auth = JSON.parse(localStorage.getItem("auth") as string);

    if (!auth) return false;

    return auth;
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