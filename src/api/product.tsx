import { ProductType } from "../types/product";
import instance from "./instance";

const DB_NAME = "products";

export const getAll = () => {
    const url = `/${DB_NAME}/?_expand=categoryId&_sort=createdAt&_order=desc`;
    return instance.get(url);
};

export const get = (slug: string) => {
    const url = `/${DB_NAME}/${slug}`;
    return instance.get(url);
}

export const add = (product: ProductType) => {
    const url = `/${DB_NAME}`;
    return instance.post(url, product);
};

export const remove = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.delete(url);
}

export const update = (product: ProductType) => {
    const url = `/${DB_NAME}/${product._id}`;
    return instance.put(url, product);
}