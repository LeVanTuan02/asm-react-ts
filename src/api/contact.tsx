import { ContactType } from "../types/contact";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const { token, user } = isAuthenticate();

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
    const url = `/${DB_NAME}/${id}/${user._id}`;
    return instance.delete(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const update = (contact: ContactType) => {
    const url = `/${DB_NAME}/${contact._id}/${user._id}`;
    return instance.put(url, contact, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}