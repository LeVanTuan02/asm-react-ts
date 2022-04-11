import { FavoritesProductType } from "../types/product";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const DB_NAME = "favoritesProduct";

export const add = (data: FavoritesProductType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${user._id}`;
    return instance.post(url, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const getAll = (userId: string) => {
    const url = `/${DB_NAME}/?userId=${userId}&_expand=userId&_expand=productId&_sort=createdAt&_order=desc`;
    return instance.get(url);
}

export const remove = (id: string, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${id}/${user._id}`;
    return instance.delete(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const checkUserHeart = (userId: string, productId?: string) => {
    const url = `/${DB_NAME}/?userId=${userId}&productId=${productId}`;
    return instance.get(url);
}