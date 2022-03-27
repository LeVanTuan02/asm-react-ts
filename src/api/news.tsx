import { NewsType } from "../types/news";
import instance from "./instance";

const DB_NAME = "news";

export const getAll = () => {
    const url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    return instance.get(url);
};

export const get = (slug: string) => {
    const url = `/${DB_NAME}/${slug}`;
    return instance.get(url);
}

export const add = (news: NewsType) => {
    const url = `/${DB_NAME}`;
    return instance.post(url, news);
};

export const remove = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.delete(url);
}

export const update = (news: NewsType) => {
    const url = `/${DB_NAME}/${news._id}`;
    return instance.put(url, news);
}