import { UserType } from "../types/user";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const { token, user } = isAuthenticate();

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
    const url = `/${DB_NAME}/${user._id}`;
    return instance.post(url, user, {
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

export const update = (userData: UserType) => {
    const url = `/${DB_NAME}/${userData._id}/${user._id}`;
    return instance.put(url, userData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}