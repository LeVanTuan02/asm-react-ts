import { VoucherType } from "../types/voucher";
import { isAuthenticate } from "../utils/localStorage";
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

export const add = (voucher: VoucherType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${user._id}`;
    return instance.post(url, voucher, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const remove = (id: string, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${id}/${user._id}`;
    return instance.delete(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const update = (voucher: VoucherType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${voucher._id}/${user._id}`;
    return instance.put(url, voucher, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}