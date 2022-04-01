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

    next();
}