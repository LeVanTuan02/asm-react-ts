import { SizeType } from "../types/size";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const { token, user } = isAuthenticate();

const DB_NAME = "size";

export const getAll = () => {
    const url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    return instance.get(url);
};

export const get = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.get(url);
}

export const add = (size: SizeType) => {
    const url = `/${DB_NAME}/${user._id}`;
    return instance.post(url, size, {
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

export const update = (size: SizeType) => {
    const url = `/${DB_NAME}/${size._id}/${user._id}`;
    return instance.put(url, size, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}