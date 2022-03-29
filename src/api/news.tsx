import { NewsType } from "../types/news";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const { token, user } = isAuthenticate();

const DB_NAME = "news";

export const getAll = () => {
    const url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    return instance.get(url);
};

export const get = (slug: string | undefined) => {
    const url = `/${DB_NAME}/${slug}/?_expand=category`;
    return instance.get(url);
}

export const add = (news: NewsType) => {
    const url = `/${DB_NAME}/${user._id}`;
    return instance.post(url, news, {
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

export const update = (news: NewsType) => {
    const url = `/${DB_NAME}/${news._id}/${user._id}`;
    return instance.put(url, news, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const relatedPost = (id: string | undefined, cateId: string | undefined) => {
    const url = `/${DB_NAME}/?category=${cateId}&_id_ne=${id}`;
    return instance.get(url);
}