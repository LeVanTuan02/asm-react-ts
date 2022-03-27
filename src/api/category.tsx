import { CategoryType } from "../types/category";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const { token, user } = isAuthenticate();

const DB_NAME = "category";

export const getAll = () => {
    const url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    return instance.get(url);
};

export const get = (slug: string) => {
    const url = `/${DB_NAME}/${slug}`;
    return instance.get(url);
}

export const add = (category: CategoryType) => {
    const url = `/${DB_NAME}/${user._id}`;
    return instance.post(url, category, {
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

export const update = (category: CategoryType) => {
    const url = `/${DB_NAME}/${category._id}/${user._id}`;
    return instance.put(url, category, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}