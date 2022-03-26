import { StoreType } from "../types/store";
import instance from "./instance";

const DB_NAME = "store";

export const getAll = () => {
    const url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    return instance.get(url);
};

export const get = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.get(url);
}

export const add = (store: StoreType) => {
    const url = `/${DB_NAME}`;
    return instance.post(url, store);
};

export const remove = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.delete(url);
}

export const update = (store: StoreType) => {
    const url = `/${DB_NAME}/${store._id}`;
    return instance.put(url, store);
}