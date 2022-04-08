import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { get, update } from "../../../api/address";
import { getAllProvince, getDistrictByProvince, getWardByDistrict } from "../../../api/location";
import { LocationType } from "../../../types/location";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

type InputsType = {
    fullName: string,
    phone: string,
    email: string,
    wardsCode: number,
    districtCode: number,
    provinceCode: number,
    address: string,
}

const schema = yup.object().shape({
    fullName: yup
        .string()
        .required("Vui lòng nhập họ tên"),
    phone: yup
        .string()
        .required("Vui lòng nhập sdt")
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại không đúng định dạng"),
    email: yup
        .string()
        .required("Vui lòng nhập email")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email không đúng định dạng"),
    provinceCode: yup
        .string()
        .test("is_empty", "Vui lòng chọn Tỉnh/Tp", value => Number(value) !== 0),
    districtCode: yup
        .string()
        .test("is_empty", "Vui lòng chọn Quận/Huyện", value => Number(value) !== 0),
    wardsCode: yup
        .string()
        .test("is_empty", "Vui lòng chọn Xã/Phường", value => Number(value) !== 0),
    address: yup
        .string()
        .required("Vui lòng nhập địa chỉ chi tiết"),
})

const AddressDetailPage = () => {
    const [provinces, setProvinces] = useState<LocationType[]>();
    const [districts, setDistricts] = useState<LocationType[]>();
    const [wards, setWards] = useState<LocationType[]>();
    
    const { id } = useParams();

    useEffect(() => {
        const start = async () => {
            // address detail
            const { data: address } = await get(id);

            const { data: province } = await getAllProvince();
            setProvinces(province);
            
            const { data: { districts } } = await getDistrictByProvince(address.provinceCode);
            setDistricts(districts);

            const { data: { wards } } = await getWardByDistrict(address.districtCode);
            setWards(wards);

            reset(address);
        };
        start();
    }, []);

    const {
        register,
        reset,
        formState: { errors },
        handleSubmit
    } = useForm<InputsType>({ resolver: yupResolver(schema) });

    const navigate = useNavigate();
    const onSubmit: SubmitHandler<InputsType> = async (dataInput) => {
        try {
            update({ _id: id, ...dataInput })
                .then(() => toast.success("Cập nhật địa chỉ thành công"))
                .then(() => navigate("/my-account/address"));
        } catch (error) {
            toast.error("Có lỗi xảy ra, vui lòng thử lại");
        }
    }

    const handleChangeProvince = async (code: number) => {
        const { data: { districts } } = await getDistrictByProvince(code);
        reset({
            districtCode: 0,
            wardsCode: 0
        })
        setDistricts(districts);
    }

    const handleChangeDistrict = async (code: number) => {
        const { data: { wards } } = await getWardByDistrict(code);
        reset({
            wardsCode: 0
        })
        setWards(wards);
    }

    return (
        <>
            <h2 className="uppercase text-lg font-semibold text-gray-600 pb-1 border-b">Cập nhật thông tin thanh toán</h2>
            <form action="" className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-6">
                        <label htmlFor="form__update-address-fullname" className="mb-1 block font-semibold">Họ tên *</label>
                        <input
                            type="text"
                            id="form__update-address-fullname"
                            {...register("fullName")}
                            className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                            placeholder="Nhập họ tên"
                        />
                        <div className="text-sm mt-0.5 text-red-500">{errors.fullName?.message}</div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <label htmlFor="form__update-address-phone" className="mb-1 block font-semibold">Số điện thoại *</label>
                        <input
                            type="text"
                            {...register("phone")}
                            id="form__update-address-phone"
                            className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                            placeholder="Nhập họ tên"
                        />
                        <div className="text-sm mt-0.5 text-red-500">{errors.phone?.message}</div>
                    </div>
                    <div className="col-span-12 mb-3">
                        <label htmlFor="form__update-address-email" className="font-semibold mb-1 block">Email *</label>
                        <input
                            type="text"
                            {...register("email")}
                            id="form__update-address-email"
                            className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                            placeholder="Nhập địa chỉ email"
                        />
                        <div className="text-sm mt-0.5 text-red-500">{errors.email?.message}</div>
                    </div>
                    <div className="col-span-12 md:col-span-4 mb-3 relative">
                        <label htmlFor="form__update-account-province" className="font-semibold mb-1 block">Tỉnh/Thành phố *</label>
                        <select
                            id="form__update-account-province"
                            {...register("provinceCode")}
                            onChange={(e: any) => handleChangeProvince(e.target.value)}
                            className="shadow-[inset_0_-1.4em_1em_0_rgba(0,0,0,0.02)] hover:shadow-none hover:cursor-default focus:shadow-none focus:cursor-text w-full border px-2 h-10 text-sm outline-none"
                        >
                            <option value={0}>-- Chọn Tỉnh/TP --</option>
                            {provinces?.map((item, index) => <option value={item.code} key={index}>{item.name}</option>)}
                        </select>
                        <div className="text-sm mt-0.5 text-red-500">{errors.provinceCode?.message}</div>
                    </div>
                    <div className="col-span-12 md:col-span-4 mb-3 relative">
                        <label htmlFor="form__update-account-district" className="font-semibold mb-1 block">Quận/Huyện *</label>
                        <select
                            id="form__update-account-district"
                            {...register("districtCode")}
                            onChange={(e: any) => handleChangeDistrict(e.target.value)}
                            className="shadow-[inset_0_-1.4em_1em_0_rgba(0,0,0,0.02)] hover:shadow-none hover:cursor-default focus:shadow-none focus:cursor-text w-full border px-2 h-10 text-sm outline-none"
                        >
                            <option value={0}>-- Chọn Quận/Huyện --</option>
                            {districts?.map((item, index) => <option value={item.code} key={index}>{item.name}</option>)}
                        </select>
                        <div className="text-sm mt-0.5 text-red-500">{errors.districtCode?.message}</div>
                    </div>
                    <div className="col-span-12 md:col-span-4 mb-3 relative">
                        <label htmlFor="form__update-account-ward" className="font-semibold mb-1 block">Xã/Phường *</label>
                        <select
                            {...register("wardsCode")}
                            id="form__update-account-ward"
                            className="shadow-[inset_0_-1.4em_1em_0_rgba(0,0,0,0.02)] hover:shadow-none hover:cursor-default focus:shadow-none focus:cursor-text w-full border px-2 h-10 text-sm outline-none"
                        >
                            <option value={0}>-- Chọn Xã/Phường --</option>
                            {wards?.map((item, index) => <option value={item.code} key={index}>{item.name}</option>)}
                        </select>
                        <div className="text-sm mt-0.5 text-red-500">{errors.wardsCode?.message}</div>
                    </div>
                    <div className="col-span-12 mb-3">
                        <label htmlFor="form__update-account-add" className="font-semibold mb-1 block">Địa chỉ cụ thể *</label>
                        <input
                            type="text"
                            {...register("address")}
                            id="form__update-account-add"
                            className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                            placeholder="Nhập Thôn/Xóm/TDP"
                        />
                        <div className="text-sm mt-0.5 text-red-500">{errors.address?.message}</div>
                    </div>
                </div>
                <button className="mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Cập nhật</button>
            </form>
        </>
    )
}

export default AddressDetailPage;