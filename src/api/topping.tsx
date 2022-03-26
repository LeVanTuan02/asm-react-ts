import { ToppingType } from "../types/topping";
import instance from "./instance";

const DB_NAME = "toppings";

export const getAll = () => {
    const url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    return instance.get(url);
};

export const get = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.get(url);
}

export const add = (topping: ToppingType) => {
    const url = `/${DB_NAME}`;
    return instance.post(url, topping);
};

export const remove = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.delete(url);
}

export const update = (topping: ToppingType) => {
    const url = `/${DB_NAME}/${topping._id}`;
    return instance.put(url, topping);
}