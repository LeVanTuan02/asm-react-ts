export type VoucherType = {
    _id?: string,
    code: string,
    quantity: number,
    condition: number,
    conditionNumber: number,
    status: number,
    timeStart: Date,
    timeEnd: Date,
    user_ids?: number[]
}