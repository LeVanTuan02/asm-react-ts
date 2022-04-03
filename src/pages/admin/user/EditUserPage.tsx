import { SubmitHandler, useForm } from "react-hook-form";
import toastr from "toastr";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { get, update } from "../../../api/user";
import { useEffect, useState } from "react";
import { LocationType } from "../../../types/location";
import { getAllProvince, getDistrictByProvince, getWardByDistrict } from "../../../api/location";
import { uploadFile } from "../../../utils";

type InputsType = {
    email: string,
    password: string,
    username: string,
    fullName: string,
    phone: string,
    wardsCode: number,
    districtCode: number,
    provinceCode: number,
    address: string,
    avatar: any,
    role: number,
    active: number,
    confirm: string,
}

const schema = yup.object().shape({
    fullName: yup
        .string()
        .required("Vui lòng nhập họ tên"),
    username: yup
        .string()
        .required("Vui lòng nhập username"),
    email: yup
        .string()
        .required("Vui lòng nhập email")
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email không đúng định dạng"),
    password: yup
        .string()
        .required("Vui lòng nhập mật khẩu")
        .min(4, "Mật khẩu dài tối thiểu 4 ký tự"),
    confirm: yup
        .string()
        .required("Vui lòng xác nhận mật khẩu")
        .test("is_confirm", "Mật khẩu xác nhận không chính xác", function (value) {
            const { password } = this.parent;
            return password === value;
        }),
    provinceCode: yup
        .string()
        .required("Vui lòng chọn Tỉnh/Tp"),
    districtCode: yup
        .string()
        .required("Vui lòng chọn Quận/Huyện"),
    wardsCode: yup
        .string()
        .required("Vui lòng chọn Xã/Phường"),
    address: yup
        .string()
        .required("Vui lòng nhập địa chỉ chi tiết"),
    active: yup
        .string()
        .required("Vui lòng chọn trạng thái tài khoản"),
    role: yup
        .string()
        .required("Vui lòng chọn vai trò"),
    phone: yup
        .string()
        .required("Vui lòng nhập sdt")
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Số điện thoại không đúng định dạng"),
});

const EditUserPage = () => {
    const [preview, setPreview] = useState<string>("");
    const [provinces, setProvinces] = useState<LocationType[]>();
    const [districts, setDistricts] = useState<LocationType[]>();
    const [wards, setWards] = useState<LocationType[]>();
    const [password, setPassword] = useState<string>();
    
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
            if (typeof data.avatar === "object" && data.avatar.length) {
                data.avatar = await uploadFile(data.avatar[0]);
            }

            if (data.password === password) {
                delete data.password;
            }

            await update(data);
            toastr.success("Cập nhật user thành công");
            navigate("/admin/user");
        } catch (error: any) {
            toastr.error("Có lỗi xảy ra, vui lòng thử lại");
        }
    }

    useEffect(() => {
        const getProvinces = async () => {
            const { data } = await getAllProvince();
            setProvinces(data);
        };

        const getUser = async () => {
            const { data } = await get(id);

            // get district
            if (data.provinceCode) {
                const { data: { districts } } = await getDistrictByProvince(data.provinceCode);
                setDistricts(districts);
            }

            // get ward
            if (data.wardsCode) {
                const { data: { wards } } = await getWardByDistrict(data.districtCode);
                setWards(wards);
            }

            setPreview(data.avatar);
            setPassword(data.password);
            reset({
                ...data,
                provinceCode: data.provinceCode || "",
                districtCode: data.districtCode || "",
                wardsCode: data.wardsCode || "",
            });
        };

        (async () => {
            await getProvinces();
            await getUser();
        })();
    }, []);

    const handleChangeProvince = async (e: any) => {
        const { data: { districts } } = await getDistrictByProvince(e.target.value);
        setDistricts(districts);
    }

    const handleChangeDistrict = async (e: any) => {
        const { data: { wards } } = await getWardByDistrict(e.target.value);
        setWards(wards);
    }

    const handlePreview = (e: any) => {
        setPreview(URL.createObjectURL(e.target.files[0]));
    }
    
    return (
        <>
            <header className="z-10 fixed top-14 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                    <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
                    Users
                    </h5>
                    <span>Update User</span>
                </div>
                <Link to="/admin/user">
                    <button type="button" className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        DS User
                    </button>
                </Link>
            </header>

            <div className="p-6 mt-24 overflow-hidden">
                <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <span className="font-semibold mb-4 block text-xl">Thông tin chi tiết user:</span>
                            <div className="grid grid-cols-6 gap-3">
                                <div className="col-span-6">
                                    <label htmlFor="form__add-user-fullname" className="block text-sm font-medium text-gray-700">Họ và tên</label>
                                    <input
                                        type="text"
                                        {...register("fullName")}
                                        id="form__add-user-fullname"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Nhập tên đầy đủ"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.fullName?.message}</div>
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="form__add-user-username" className="block text-sm font-medium text-gray-700">Username</label>
                                    <input
                                        {...register("username")}
                                        type="text"
                                        id="form__add-user-username"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Nhập username"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.username?.message}</div>
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="form__add-user-phone" className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                                    <input
                                        type="text"
                                        {...register("phone")}
                                        id="form__add-user-phone"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Nhập sdt"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.phone?.message}</div>
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="form__add-user-role" className="block text-sm font-medium text-gray-700">Vai trò</label>
                                    <select
                                        id="form__add-user-role"
                                        {...register("role")}
                                        defaultValue={0}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="">-- Chọn vai trò --</option>
                                        <option value={0}>Khách hàng</option>
                                        <option value={1}>Admin</option>
                                    </select>
                                    <div className="text-sm mt-0.5 text-red-500">{errors.role?.message}</div>
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="form__add-user-stt" className="block text-sm font-medium text-gray-700">Trạng thái</label>
                                    <select
                                        id="form__add-user-stt"
                                        {...register("active")}
                                        defaultValue={0}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="">-- Chọn trạng thái tài khoản --</option>
                                        <option value={0}>Khóa</option>
                                        <option value={1}>Kích hoạt</option>
                                    </select>
                                    <div className="text-sm mt-0.5 text-red-500">{errors.active?.message}</div>
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="form__add-user-email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="text"
                                        {...register("email")}
                                        id="form__add-user-email"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Nhập email"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.email?.message}</div>
                                </div>
                                <div className="col-span-6 md:col-span-2">
                                    <label htmlFor="form__add-user-province" className="block text-sm font-medium text-gray-700">Tỉnh/TP</label>
                                    <select
                                        {...register("provinceCode")}
                                        id="form__add-user-province"
                                        onChange={e => handleChangeProvince(e)}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="">-- Chọn Tỉnh/TP --</option>
                                        {provinces?.map((item, index) => <option key={index} value={item.code}>{item.name}</option>)}
                                    </select>
                                    <div className="text-sm mt-0.5 text-red-500">{errors.provinceCode?.message}</div>
                                </div>
                                <div className="col-span-6 md:col-span-2">
                                    <label htmlFor="form__add-user-district" className="block text-sm font-medium text-gray-700">Quận/Huyện</label>
                                    <select
                                        {...register("districtCode")}
                                        onChange={e => handleChangeDistrict(e)}
                                        id="form__add-user-district"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="">-- Chọn Quận/Huyện --</option>
                                        {districts?.map((item, index) => <option key={index} value={item.code}>{item.name}</option>)}
                                    </select>
                                    <div className="text-sm mt-0.5 text-red-500">{errors.districtCode?.message}</div>
                                </div>
                                <div className="col-span-6 md:col-span-2">
                                    <label htmlFor="form__add-user-ward" className="block text-sm font-medium text-gray-700">Xã/Phường</label>
                                    <select
                                        {...register("wardsCode")}
                                        id="form__add-user-ward"
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="">-- Chọn Xã/Phường --</option>
                                        {wards?.map((item, index) => <option key={index} value={item.code}>{item.name}</option>)}
                                    </select>
                                    <div className="text-sm mt-0.5 text-red-500">{errors.wardsCode?.message}</div>
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="form__add-user-address" className="block text-sm font-medium text-gray-700">Địa chỉ hiện tại</label>
                                    <input
                                        type="text"
                                        {...register("address")}
                                        id="form__add-user-address"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Nhập thôn/xóm/TDP"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.address?.message}</div>
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="form__add-user-password" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                                    <input
                                        type="password"
                                        {...register("password")}
                                        id="form__add-user-password"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Nhập mật khẩu"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.password?.message}</div>
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="form__add-user-confirm" className="block text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
                                    <input
                                        type="password"
                                        defaultValue={password}
                                        {...register("confirm")}
                                        id="form__add-user-confirm"
                                        className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Xác nhận mật khẩu"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.confirm?.message}</div>
                                </div>
                                <div className="col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Xem trước ảnh</label>
                                    <div className="mt-1">
                                        <img
                                            src={ preview || "https://res.cloudinary.com/levantuan/image/upload/v1644302455/assignment-js/thumbnail-image-vector-graphic-vector-id1147544807_ochvyr.jpg"}
                                            alt="Preview Image"
                                            className="h-40 w-40 rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <label className="block text-sm font-medium text-gray-700">Ảnh đại diện</label>
                                    <div className="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label htmlFor="form__add-user-avatar" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span>Upload a file</span>
                                                    <input
                                                        {...register("avatar")}
                                                        onChange={e => handlePreview(e)}
                                                        id="form__add-user-avatar"
                                                        type="file"
                                                        className="sr-only"
                                                    />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                    <div className="text-sm mt-0.5 text-red-500">{errors.avatar?.message}</div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cập nhật tài khoản</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditUserPage;