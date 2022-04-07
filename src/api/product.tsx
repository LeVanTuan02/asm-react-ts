import { ProductType } from "../types/product";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

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

export const getProductsRelated = (start = 0, limit = 0, id: string | undefined, cateId: string | undefined) => {
    let url = `/${DB_NAME}/?categoryId=${cateId}&_id_ne=${id}&status=1&_expand=categoryId&_sort=createdAt&_order=desc`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
    return instance.get(url);
}

export const search = (start = 0, limit = 0, sort = "createdAt", order = "desc", keyword: string | undefined) => {
    let url = `/${DB_NAME}/?_sort=${sort}&_order=${order}&q=${keyword}`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
    return instance.get(url);
}

export const get = (slug: string) => {
    const url = `/${DB_NAME}/${slug}/?_expand=categoryId`;
    return instance.get(url);
}

export const getById = (id: string) => {
    const url = `/${DB_NAME}/${id}/?_expand=categoryId`;
    return instance.get(url);
}

export const add = (product: ProductType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${user._id}`;
    return instance.post(url, product, {
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

export const update = (product: ProductType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${product._id}/${user._id}`;
    return instance.put(url, product, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const clientUpdate = (product: ProductType) => {
    const url = `/${DB_NAME}/userUpdate/${product._id}`;
    return instance.patch(url, product);
}

export const getFavorites = () => {
    const url = `/${DB_NAME}/?_sort=favorites&_order=desc&_limit=10`
    return instance.get(url);
}