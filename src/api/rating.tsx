import { RatingType } from "../types/rating";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const DB_NAME = "ratings";

export const checkUserRating = (userId: string, productId?: string) => {
    const url = `/${DB_NAME}/?userId=${userId}&productId=${productId}`;
    return instance.get(url);
}

export const add = (rating: RatingType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${user._id}`;
    return instance.post(url, rating, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const update = (rating: RatingType, { token, user } = isAuthenticate()) => {
    const url = `/${DB_NAME}/${rating._id}/${user._id}`;
    return instance.put(url, rating, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const get = (productId?: string) => {
    const url = `/${DB_NAME}/?productId=${productId}&_sort=createdAt&_order=desc`;
    return instance.get(url);
}