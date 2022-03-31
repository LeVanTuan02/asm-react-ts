import { ProductType } from "../types/product";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const { token, user } = isAuthenticate();

const DB_NAME = "products";

export const getAll = (start = 0, limit = 0, sort = "createdAt", order = "desc") => {
    let url = `/${DB_NAME}/?_expand=categoryId&_sort=${sort}&_order=${order}`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
    return instance.get(url);
};

export const getProductByCate = (start = 0, limit = 0, sort = "createdAt", order = "desc", cateId: string | undefined) => {
    let url = `/${DB_NAME}/?categoryId=${cateId}&_sort=${sort}&_order=${order}&_expand=categoryId`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
    return instance.get(url);
}

export const search = (start = 0, limit = 0, sort = "createdAt", order = "desc", keyword: string | undefined) => {
    let url = `/${DB_NAME}/?_sort=${sort}&_order=${order}&name_like=${keyword}`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
    return instance.get(url);
}

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