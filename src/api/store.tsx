import { StoreType } from "../types/store";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const { token, user } = isAuthenticate();
const DB_NAME = "store";

export const getAll = () => {
    const url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    return instance.get(url);
};

export const search = (keyword: string) => {
    const url = `/${DB_NAME}/?name_like=${keyword}&_sort=createdAt&_order=desc`;
    return instance.get(url);
}

export const get = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.get(url);
}

export const add = (store: StoreType) => {
    const url = `/${DB_NAME}/${user._id}`;
    return instance.post(url, store, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const remove = (id: string) => {
    const url = `/${DB_NAME}/${id}/${user._id}`;
    return instance.delete(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const update = (store: StoreType) => {
    const url = `/${DB_NAME}/${store._id}/${user._id}`;
    return instance.put(url, store, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}