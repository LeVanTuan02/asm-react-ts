import { SizeType } from "../types/size";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DB_NAME = "size";

export const getAll = (sort = "createdAt", order = "desc") => {
    const url = `/${DB_NAME}/?_sort=${sort}&_order=${order}`;
    return instance.get(url);
};

export const get = (id?: string) => {
    const url = `/${DB_NAME}/${id}`;
    return instance.get(url);
}

export const add = (size: SizeType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${user._id}`;
    return instance.post(url, size, {
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

export const update = (size: SizeType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${size._id}/${user._id}`;
    return instance.put(url, size, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const sizeApi = createApi({
    reducerPath: "sizeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://asm-nodejs.vercel.app/api"
    }),
    tagTypes: ["Size"],
    endpoints: (builder) => ({
        getSizes: builder.query<SizeType[], { sort?: string, order?: string}>({
            query: ({sort = "createdAt", order = "desc"}) => `${DB_NAME}/?_sort=${sort}&_order=${order}`,
            providesTags: ["Size"]
        }),
        deleteSize: builder.mutation<SizeType, string | undefined>({
            query: (id, { token, user } = isAuthenticate()) => ({
                url: `${DB_NAME}/${id}/${user._id}`,
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }),
            invalidatesTags: ["Size"]
        }),
        addSize: builder.mutation<SizeType, SizeType>({
            query: (data, { token, user } = isAuthenticate()) => ({
                url: `${DB_NAME}/${user._id}`,
                method: 'POST',
                body: data,
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }),
            invalidatesTags: ["Size"]
        }),
        updateSize: builder.mutation<SizeType, SizeType>({
            query: (data, { token, user } = isAuthenticate()) => {

                return {
                    url: `${DB_NAME}/${data._id}/${user._id}`,
                    method: "PUT",
                    body: data,
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            },
            invalidatesTags: ["Size"]
        })
    })
})

export const {
    useGetSizesQuery,
    useDeleteSizeMutation,
    useAddSizeMutation,
    useUpdateSizeMutation
} = sizeApi;