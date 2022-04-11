export type NewsType = {
    _id?: string,
    title: string,
    slug?: string,
    thumbnail: string,
    description: string,
    content: string,
    category: string | any,
    status: number,
    createdAt?: string,
};