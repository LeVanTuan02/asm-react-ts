import { UserType } from "../types/user";
import instance from "./instance";

const DB_NAME = "users";

export const getAll = () => {
    const url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    return instance.get(url);
};

export const get = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.get(url);
}

export const add = (user: UserType) => {
    const url = `/${DB_NAME}`;
    return instance.post(url, user);
};

export const remove = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.delete(url);
}

export const update = (user: UserType) => {
    const url = `/${DB_NAME}/${user._id}`;
    return instance.put(url, user);
}