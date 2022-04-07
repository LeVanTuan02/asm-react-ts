export type ProductType = {
    _id?: string,
    name: string,
    image: string,
    price: number,
    description: string,
    status: number,
    view?: number,
    favorites?: number,
    categoryId: string,
    slug?: string,
    ratingNumber?: number,
    totalRating?: number,
}

export type FavoritesProductType = {
    userId: string,
    productId: string,
    createdAt?: Date
}