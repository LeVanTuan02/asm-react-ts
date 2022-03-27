import { ContactType } from "../types/contact";
import instance from "./instance";

const DB_NAME = "contact";

export const getAll = () => {
    const url = `/${DB_NAME}/?_sort=createdAt&_order=desc&_expand=store`;
    return instance.get(url);
};

export const get = (id: string) => {
    const url = `/${DB_NAME}/${id}/?_expand=store`;
    return instance.get(url);
}

export const add = (contact: ContactType) => {
    const url = `/${DB_NAME}`;
    return instance.post(url, contact);
};

export const remove = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.delete(url);
}

export const update = (contact: ContactType) => {
    const url = `/${DB_NAME}/${contact._id}`;
    return instance.put(url, contact);
}