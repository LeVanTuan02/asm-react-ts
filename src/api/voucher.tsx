import { VoucherType } from "../types/voucher";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";

const DB_NAME = "voucher";

export const getAll = (start = 0, limit = 0) => {
    let url = `/${DB_NAME}/?_sort=createdAt&_order=desc`;
    if (limit) url += `&_start=${start}&_limit=${limit}`;
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

export const getByCode = (code: string) => {
    const url = `/${DB_NAME}/?code=${code}`;
    return instance.get(url);
}

export const checkValidVoucher = async (voucherCode: string, userId: string) => {
    let success = false;

    const { data } = await getByCode(voucherCode.trim());
    if (!data.length) {
        return {
            success,
            message: "Voucher không tồn tại"
        }
    } else {
        const [voucherData] = data;
        const now = new Date();
        const timeStart = new Date(voucherData.timeStart);
        const timeEnd = new Date(voucherData.timeEnd);

        if (timeStart > now) return { success, message: "Voucher chưa đến thời gian sử dụng" };
        if (timeEnd < now) return { success, message: "Voucher đã quá hạn sử dụng" };
        if (!voucherData.quantity) return { success, message: "Voucher đã hết lượt sử dụng" };
        if (!voucherData.status) return { success, message: "Voucher đã bị khóa" };
        
        // check user đã sử dụng voucher chưa
        const listIdUsed = voucherData.user_ids;

        const isUsed = listIdUsed.some((id: any) => id === userId);
        
        if (isUsed) return { success, message: "Bạn đã sử dụng Voucher này trước đó" };

        return {
            success: true,
            voucherData,
            message: "Hợp lệ"
        }
    }
    
}