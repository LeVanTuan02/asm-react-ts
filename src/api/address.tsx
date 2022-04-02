import { AddressType } from "../types/address";
import instance from "./instance";

const DB_NAME = "address";

export const getAll = () => {
    const url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    return instance.get(url);
};

export const getByUserId = (userId: string) => {
    let url = `/${DB_NAME}/?userId=${userId}&_sort=createdAt&_order=desc`;
    return instance.get(url);
};

export const get = (id: string | undefined) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.get(url);
}

export const add = (address: AddressType) => {
    const url = `/${DB_NAME}`;
    return instance.post(url, address);
};

export const remove = (id: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.delete(url);
}

export const update = (address: AddressType) => {
    const url = `/${DB_NAME}/${address._id}`;
    return instance.put(url, address);
}

// check địa chỉ tồn tại chưa
export const checkAddExits = async (data: AddressType) => {
    const { data: listAdd } = await getAll();

    const isExits = listAdd.some((item: AddressType) => item.userId === data.userId && item.fullName === data.fullName && item.phone === data.phone && item.address === data.address && item.email === data.email && item.wardsCode === data.wardsCode && item.districtCode === data.districtCode && item.provinceCode === data.provinceCode);

    return isExits;
};