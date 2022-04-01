import { OrderDetailType } from "../types/order";
import instance from "./instance";

const DB_NAME = "orderDetail";

export const getAll = () => {
    const url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    return instance.get(url);
};

export const get = (orderId: string | undefined) => {
    const url = `/${DB_NAME}/?orderId=${orderId}&_expand=sizeId&_expand=productId&_expand=toppingId`;
    return instance.get(url);
}

export const add = (orderDetail: OrderDetailType) => {
    const url = `/${DB_NAME}`;
    return instance.post(url, orderDetail);
};

export const remove = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.delete(url);
}

export const update = (orderDetail: OrderDetailType) => {
    const url = `/${DB_NAME}/${orderDetail._id}`;
    return instance.put(url, orderDetail);
}