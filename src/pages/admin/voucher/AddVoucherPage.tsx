import { yupResolver } from "@hookform/resolvers/yup";
import toastr from "toastr";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { add } from "../../../api/voucher";

type InputsType = {
    code: string,
    quantity: number,
    condition: number,
    conditionNumber: number,
    status: number,
    timeStart: Date,
    timeEnd: Date,
}

const schema = yup.object().shape({
    code: yup
        .string()
        .required("Vui lòng nhập mã Voucher"),
    quantity: yup
        .number()
        .min(0, "Vui lòng nhập số lượng lớn hơn 0")
        .required("Vui lòng nhập số lượng voucher"),
    condition: yup
        .string()
        .required("Vui lòng chọn loại giảm"),
    conditionNumber: yup
        .number()
        .min(0, "Vui lòng nhập số lượng lớn hơn 0")
        .required("Vui lòng nhập số lượng giảm"),
    status: yup
        .string()
        .required("Vui lòng chọn trạng thái Voucher"),
    timeStart: yup
        .string()
        .required("Vui lòng nhập thời gian hiệu lực Voucher"),
    timeEnd: yup
        .string()
        .required("Vui lòng nhập thời gian hết hiệu lực Voucher")

})

const AddVoucherPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<InputsType>({ resolver: yupResolver(schema) });

    const onSubmit: SubmitHandler<InputsType> = async data => {
        try {
            await add(data);
            toastr.success("Thêm Voucher thành công")
            reset();
        } catch (error: any) {
            toastr.error(error.response.data.error.message || error.response.data.message);
        }
    }

    return (
        <>
            <header className="z-10 fixed top-14 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                    <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
                    Voucher
                    </h5>
                    <span>Thêm Voucher</span>
                </div>
                <Link to="/admin/voucher">
                    <button type="button" className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        DS Voucher
                    </button>
                </Link>
            </header>

            <div className="p-6 mt-24 overflow-hidden">
                <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <span className="font-semibold mb-4 block text-xl">Thông tin chi tiết voucher:</span>
                            <div className="grid grid-cols-6 gap-3">
                                <div className="col-span-6">
                                    <label htmlFor="form__add-voucher-code" className="block text-sm font-medium text-gray-700">Mã voucher</label>
                                    <input
                                        {...register("code")}
                                        type="text"
                                        id="form__add-voucher-code"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Nhập mã voucher"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.code?.message}</div>
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="form__add-voucher-quantity" className="block text-sm font-medium text-gray-700">Số lượng voucher</label>
                                    <input
                                        {...register("quantity")}
                                        type="number"
                                        id="form__add-voucher-quantity"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Nhập số lượng voucher"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.quantity?.message}</div>
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="form__add-voucher-condition" className="block text-sm font-medium text-gray-700">Giảm theo</label>
                                    <select id="form__add-voucher-condition" {...register("condition")} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option value="">-- Chọn loại giảm --</option>
                                        <option value={0}>Phần trăm</option>
                                        <option value={1}>Tiền</option>
                                    </select>
                                    <div className="text-sm mt-0.5 text-red-500">{errors.condition?.message}</div>
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="form__add-voucher-stt" className="block text-sm font-medium text-gray-700">Trạng thái</label>
                                    <select id="form__add-voucher-stt" {...register("status")} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option value="">-- Chọn trạng thái voucher --</option>
                                        <option value={0}>Khóa</option>
                                        <option value={1}>Kích hoạt</option>
                                    </select>
                                    <div className="text-sm mt-0.5 text-red-500">{errors.status?.message}</div>
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="form__add-voucher-number" className="block text-sm font-medium text-gray-700">Số lượng giảm</label>
                                    <input
                                        {...register("conditionNumber")}
                                        type="number"
                                        id="form__add-voucher-number"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Nhập % giảm/tiền giảm"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.conditionNumber?.message}</div>
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="form__add-voucher-start" className="block text-sm font-medium text-gray-700">Bắt đầu lúc</label>
                                    <input
                                        {...register("timeStart")}
                                        type="datetime-local"
                                        id="form__add-voucher-start"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Nhập % giảm/tiền giảm"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.timeStart?.message}</div>
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="form__add-voucher-end" className="block text-sm font-medium text-gray-700">Kết thúc lúc</label>
                                    <input
                                        {...register("timeEnd")}
                                        type="datetime-local"
                                        id="form__add-voucher-end"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Nhập % giảm/tiền giảm"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.timeEnd?.message}</div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Thêm voucher </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddVoucherPage;