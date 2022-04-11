export type OrderType = {
    _id?: string,
    userId: string,
    customerName: string,
    address: string,
    phone: string,
    email: string,
    totalPrice: number,
    priceDecrease: number,
    message: string,
    status?: number,
    voucher?: string[],
    createdAt?: string,
    updatedAt?: string,
}

export type OrderDetailType = {
    _id?: string,
    orderId: string | any,
    productId: string | any,
    productPrice: number,
    sizeId: string | any,
    sizePrice: number,
    quantity: number,
    ice: number,
    sugar: number,
    toppingId: string | any,
    toppingPrice: number,
}