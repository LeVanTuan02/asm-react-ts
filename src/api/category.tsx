import { CategoryType } from "../types/category";
import instance from "./instance";

const DB_NAME = "category";

export const getAll = () => {
    const url = `/${DB_NAME}`;
    return instance.get(url);
};

export const get = (slug: string) => {
    const url = `/${DB_NAME}/${slug}`;
    return instance.get(url);
}

export const add = (category: CategoryType) => {
    const url = `/${DB_NAME}`;
    return instance.post(url, category);
};

export const remove = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.delete(url);
}

export const update = (category: CategoryType) => {
    const url = `/${DB_NAME}/${category._id}`;
    return instance.put(url, category);
}