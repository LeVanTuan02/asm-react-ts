import { VoucherType } from "../types/voucher";
import instance from "./instance";

const DB_NAME = "voucher";

export const getAll = () => {
    const url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    return instance.get(url);
};

export const get = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.get(url);
}

export const add = (voucher: VoucherType) => {
    const url = `/${DB_NAME}`;
    return instance.post(url, voucher);
};

export const remove = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.delete(url);
}

export const update = (voucher: VoucherType) => {
    const url = `/${DB_NAME}/${voucher._id}`;
    return instance.put(url, voucher);
}