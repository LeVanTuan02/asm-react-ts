import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { CategoryType } from "../types/category";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const DB_NAME = "category";

export const getAll = (start = 0, limit = 0) => {
    let url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    if (limit) url += `&_start=${start}&_limit=${limit}` 
    return instance.get(url);
};

export const get = (slug: string | undefined) => {
    const url = `/${DB_NAME}/${slug}`;
    return instance.get(url);
}

export const add = (category: CategoryType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${user._id}`;
    return instance.post(url, category, {
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

export const update = (category: CategoryType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${category._id}/${user._id}`;
    return instance.put(url, category, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const cateProductApi = createApi({
    reducerPath: "cateProductApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://yotea-nodejs.herokuapp.com/api"
    }),
    tagTypes: ["CateProduct"],
    endpoints: (builder) => ({
        getCatesProduct: builder.query<any[], string>({
            query: () => `${DB_NAME}`,
            providesTags: ["CateProduct"]
        })
    })
})

export const {
    useGetCatesProductQuery
} = cateProductApi;