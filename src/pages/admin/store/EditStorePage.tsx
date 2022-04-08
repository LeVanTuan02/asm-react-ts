import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { uploadFile } from "../../../utils";
import { get } from "../../../api/store";
import { useDispatch } from "react-redux";
import { updateStore } from "../../../redux/storeSlice";
import { toast } from "react-toastify";

type InputsType = {
    name: string,
    address: string,
    phone: string,
    timeStart: string,
    timeEnd: string,
    map: string,
    image: string,
}

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Vui lòng nhập tên chi nhánh"),
    address: yup
        .string()
        .required("Vui lòng nhập địa chỉ chi nhánh"),
    map: yup
        .string()
        .required("Vui lòng nhập Iframe google map"),
    phone: yup
        .string()
        .required("Vui lòng nhập số điện thoại")
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại không đúng định dạng"),
    timeStart: yup
        .string()
        .required("Vui lòng chọn thời gian mở cửa"),
    timeEnd: yup
        .string()
        .required("Vui lòng chọn thời gian đóng cửa")
})

const EditStorePage = () => {
    const dispatch = useDispatch();

    const [preview, setPreview] = useState<string>();

    const { id } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<InputsType>({ resolver: yupResolver(schema) });

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<InputsType> = async data => {
        try {
            if (typeof data.image === "object" && data.image.length) {
                data.image = await uploadFile(data.image[0]);
            }

            dispatch(updateStore(data));

            toast.success("Cập nhật chi nhánh thành công");
            navigate("/admin/store");
        } catch (error: any) {
            toast.error("Có lỗi xảy ra, vui lòng thử lại");
        }
    }

    const handlePreview = (e: any) => {
        setPreview(URL.createObjectURL(e.target.files[0]));
    }

    useEffect(() => {
        // get data
        (async () => {
            const { data } = await get(id);
            setPreview(data.image);
            reset(data);
        })();
    }, []);

    return (
        <>
            <header className="z-10 fixed top-14 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                    <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
                    Store
                    </h5>
                    <span>Cập nhật chi nhánh</span>
                </div>
                <Link to="/admin/store">
                    <button type="button" className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        DS chi nhánh
                    </button>
                </Link>
            </header>

            <div className="p-6 mt-24 overflow-hidden">
                <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <span className="font-semibold mb-4 block text-xl">Thông tin chi tiết chi nhánh:</span>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="form__add-store-name" className="block text-sm font-medium text-gray-700">Tên chi nhánh</label>
                                    <input
                                        {...register("name")}
                                        type="text"
                                        id="form__add-store-name"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Nhập tên chi nhánh"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.name?.message}</div>
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="form__add-store-phone" className="block text-sm font-medium text-gray-700">Sdt</label>
                                    <input
                                        {...register("phone")}
                                        type="text"
                                        id="form__add-store-phone"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Nhập sdt chi nhánh"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.phone?.message}</div>
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="form__add-store-address" className="block text-sm font-medium text-gray-700">Địa chỉ</label>
                                    <input
                                        {...register("address")}
                                        type="text"
                                        id="form__add-store-address"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Nhập địa chỉ chi nhánh"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.address?.message}</div>
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="form__add-store-start" className="block text-sm font-medium text-gray-700">Giờ mở cửa</label>
                                    <input
                                        {...register("timeStart")}
                                        type="time"
                                        id="form__add-store-start"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.timeStart?.message}</div>
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="form__add-store-end" className="block text-sm font-medium text-gray-700">Giờ đóng cửa</label>
                                    <input
                                        {...register("timeEnd")}
                                        type="time"
                                        id="form__add-store-end"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.timeEnd?.message}</div>
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="form__add-store-map" className="block text-sm font-medium text-gray-700">Iframe Map</label>
                                    <textarea
                                        id="form__add-store-map"
                                        rows={5}
                                        {...register("map")}
                                        className="py-2 px-3 focus:outline-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        placeholder="Nhập iframe google map"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.map?.message}</div>
                                </div>
                                <div className="col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Xem trước ảnh</label>
                                    <div className="mt-1">
                                        <img
                                            src={ preview || "https://res.cloudinary.com/levantuan/image/upload/v1644302455/assignment-js/thumbnail-image-vector-graphic-vector-id1147544807_ochvyr.jpg" }
                                            alt="Preview Img"
                                            className="h-60 w-full object-cover rounded-md"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <label className="block text-sm font-medium text-gray-700">Ảnh cửa hàng</label>
                                    <div className="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label htmlFor="form__add-store-image" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span>Upload a file</span>
                                                    <input
                                                        {...register("image")}
                                                        onChange={e => handlePreview(e)}
                                                        id="form__add-store-image"
                                                        type="file"
                                                        className="sr-only"
                                                    />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                    <div className="text-sm mt-0.5 text-red-500">{errors.image?.message}</div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cập nhật chi nhánh</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditStorePage;