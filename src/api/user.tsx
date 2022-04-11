import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { UserType } from "../types/user";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const DB_NAME = "users";

export const getAll = (start = 0, limit = 0) => {
    let url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
    return instance.get(url);
};

export const get = (id?: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.get(url);
}

export const add = (userData: UserType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${user._id}`;
    return instance.post(url, userData, {
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

export const update = (userData: UserType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${userData._id}/${user._id}`;
    return instance.put(url, userData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const updateMyInfo = (userData: UserType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/updateInfo/${userData._id}/${user._id}`;
    return instance.put(url, userData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://asm-nodejs.vercel.app/api"
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<UserType[], string>({
            query: () => `${DB_NAME}`
        })
    })
})

export const {
    useGetUsersQuery
} = userApi;