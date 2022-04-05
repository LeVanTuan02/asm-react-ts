import { SizeType } from "../types/size";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const DB_NAME = "size";

export const getAll = (sort = "createdAt", order = "desc") => {
    const url = `/${DB_NAME}/?_sort=${sort}&_order=${order}`;
    return instance.get(url);
};

export const get = (id?: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.get(url);
}

export const add = (size: SizeType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${user._id}`;
    return instance.post(url, size, {
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

export const update = (size: SizeType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${size._id}/${user._id}`;
    return instance.put(url, size, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}