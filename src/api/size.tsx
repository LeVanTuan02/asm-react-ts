import { SizeType } from "../types/size";
import instance from "./instance";

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
    const url = `/${DB_NAME}`;
    return instance.post(url, size);
};

export const remove = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.delete(url);
}

export const update = (size: SizeType) => {
    const url = `/${DB_NAME}/${size._id}`;
    return instance.put(url, size);
}