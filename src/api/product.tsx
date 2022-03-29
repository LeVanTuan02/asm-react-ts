import { ProductType } from "../types/product";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const { token, user } = isAuthenticate();

const DB_NAME = "products";

export const getAll = () => {
    const url = `/${DB_NAME}/?_expand=categoryId&_sort=createdAt&_order=desc`;
    return instance.get(url);
};

export const get = (slug: string) => {
    const url = `/${DB_NAME}/${slug}/?_expand=categoryId`;
    return instance.get(url);
}

export const add = (product: ProductType) => {
    const url = `/${DB_NAME}/${user._id}`;
    return instance.post(url, product, {
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

export const update = (product: ProductType) => {
    const url = `/${DB_NAME}/${product._id}/${user._id}`;
    return instance.put(url, product, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const getFavorites = () => {
    const url = `/${DB_NAME}/?_sort=favorites&_order=desc&_limit=10`
    return instance.get(url);
}