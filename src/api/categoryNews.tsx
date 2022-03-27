import { CategoryNewsType } from "../types/categoryNews";
import instance from "./instance";

const DB_NAME = "catenews";

export const getAll = () => {
    const url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    return instance.get(url);
};

export const get = (slug: string) => {
    const url = `/${DB_NAME}/${slug}`;
    return instance.get(url);
}

export const add = (category: CategoryNewsType) => {
    const url = `/${DB_NAME}`;
    return instance.post(url, category);
};

export const remove = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.delete(url);
}

export const update = (category: CategoryNewsType) => {
    const url = `/${DB_NAME}/${category._id}`;
    return instance.put(url, category);
}