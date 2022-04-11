import { StoreType } from "../types/store";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const DB_NAME = "store";

export const getAll = (start = 0, limit = 0) => {
    let url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
    return instance.get(url);
};

export const search = (keyword: string) => {
    const url = `/${DB_NAME}/?name_like=${keyword}&_sort=createdAt&_order=desc`;
    return instance.get(url);
}

export const get = (id?: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.get(url);
}

export const add = (store: StoreType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${user._id}`;
    return instance.post(url, store, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const remove = (id?: string, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${id}/${user._id}`;
    return instance.delete(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const update = (store: StoreType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${store._id}/${user._id}`;
    return instance.put(url, store, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}