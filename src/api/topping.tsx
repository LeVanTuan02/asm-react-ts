import { ToppingType } from "../types/topping";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const { token, user } = isAuthenticate();

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
    const url = `/${DB_NAME}/${user._id}`;
    return instance.post(url, topping, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const remove = (id: string) => {
    const url = `/${DB_NAME}/${id}/${user._id}`;
    return instance.delete(url);
}

export const update = (topping: ToppingType) => {
    const url = `/${DB_NAME}/${topping._id}/${user._id}`;
    return instance.put(url, topping);
}