import { NewsType } from "../types/news";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const DB_NAME = "news";

export const getAll = (start = 0, limit = 0) => {
    let url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
    return instance.get(url);
};

export const getNewsById = (start = 0, limit = 0, category?: string) => {
    let url = `/${DB_NAME}/?_sort=createdAt&_order=desc&category=${category}`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
    return instance.get(url);
}

export const get = (slug: string | undefined) => {
    const url = `/${DB_NAME}/${slug}/?_expand=category`;
    return instance.get(url);
}

export const add = (news: NewsType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${user._id}`;
    return instance.post(url, news, {
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

export const update = (news: NewsType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${news._id}/${user._id}`;
    return instance.put(url, news, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const relatedPost = (id: string | undefined, cateId: string | undefined, start = 0, limit = 0) => {
    let url = `/${DB_NAME}/?category=${cateId}&_id_ne=${id}&_sort=createdAt&_order=desc`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;  
    return instance.get(url);
}