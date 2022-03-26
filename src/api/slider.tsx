import { SliderType } from "../types/slider";
import instance from "./instance";

const DB_NAME = "slider";

export const getAll = () => {
    const url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    return instance.get(url);
};

export const get = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.get(url);
}

export const add = (slider: SliderType) => {
    const url = `/${DB_NAME}`;
    return instance.post(url, slider);
};

export const remove = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.delete(url);
}

export const update = (slider: SliderType) => {
    const url = `/${DB_NAME}/${slider._id}`;
    return instance.put(url, slider);
}