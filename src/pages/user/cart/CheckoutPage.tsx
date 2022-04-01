import * as yup from "yup";
import toastr from "toastr";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CartType } from "../../../types/cart";
import { formatCurrency } from "../../../utils";
import { finishOrder, isAuthenticate } from "../../../utils/localStorage";
import { LocationType } from "../../../types/location";
import { getAllProvince, getDistrictById, getDistrictByProvince, getProvinceById, getWardByDistrict, getWardById } from "../../../api/location";
import { add as addOrder } from "../../../api/order";
import { add as addOrderDetail } from "../../../api/orderDetail";
import { useNavigate } from "react-router-dom";
import CartNav from "../../../components/user/CartNav";

type InputsType = {
    fullName: string,
    phone: string,
    email: string,
    provinceCode: number,
    districtCode: number,
    wardsCode: number,
    address: string,
    message: string
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
})

const CheckoutPage = () => {
    const { user } = isAuthenticate();
    const cart: CartType[] = JSON.parse(localStorage.getItem("cart") as string) || [];
    const [provinces, setProvinces] = useState<LocationType[]>();
    const [districts, setDistricts] = useState<LocationType[]>();
    const [wards, setWards] = useState<LocationType[]>();
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<InputsType>({ resolver: yupResolver(schema) });

    const getAddress = async (address: string, wardsCode: number, districtCode: number, provinceCode: number) => {
        const wardsData = await getWardById(wardsCode);
        const districtData = await getDistrictById(districtCode);
        const provinceData = await getProvinceById(provinceCode);
        return `${address}, ${wardsData.name}, ${districtData.name}, ${provinceData.name}`;
    }

    const navigate = useNavigate();
    const onSubmit: SubmitHandler<InputsType> = async dataInput => {
        const address = await getAddress(dataInput.address, dataInput.wardsCode, dataInput.districtCode, dataInput.provinceCode);
        // save order
        const orderData = {
            customerName: dataInput.fullName,
            address,
            phone: dataInput.phone,
            email: dataInput.email,
            totalPrice,
            priceDecrease: 0,
            message: dataInput.message
        }
        const { data: { _id: orderId } } = await addOrder(orderData);
        
        // save order detail
        cart.forEach(async ({ productId, productPrice, sizeId, sizePrice, quantity, ice, sugar, toppingId, toppingPrice}) => {
            await addOrderDetail({
                orderId,
                productId,
                productPrice,
                sizeId,
                sizePrice,
                quantity,
                ice,
                sugar,
                toppingId,
                toppingPrice,
            });
        })

        finishOrder(() => {
            toastr.success("Đặt hàng thành công");
            navigate("/thank-you");
        });

    }

    useEffect(() => {
        const callApiLocation = async () => {
            const { data: province } = await getAllProvince();
            setProvinces(province);

            if (user && user.districtCode) {
                const { data: { districts } } = await getDistrictByProvince(user.provinceCode);
                setDistricts(districts);
            }

            if (user && user.wardsCode) {
                const { data: { wards } } = await getWardByDistrict(user.districtCode);
                setWards(wards);
            }
        };

        const getTotalPrice = () => {
            setTotalPrice(() => {
                return cart.reduce((total, cart) => {
                    return total + (cart.productPrice + cart.sizePrice + cart.toppingPrice) * cart.quantity;
                }, 0);
            })
        };
        getTotalPrice();

        const start = async () => {
            await callApiLocation();
            reset({
                ...user,
                provinceCode: user && user.provinceCode || "",
                districtCode: user && user.districtCode || "",
                wardsCode: user && user.wardsCode || "",
            });
        };
        start();

    }, []);

    const handleChangeProvince = async (e: any) => {
        const { data: { districts } } = await getDistrictByProvince(e.target.value);
        reset({
            districtCode: 0,
            wardsCode: 0
        })
        setDistricts(districts);
    }

    const handleChangeDistrict = async (e: any) => {
        const { data: { wards } } = await getWardByDistrict(e.target.value);
        reset({
            wardsCode: 0
        })
        setWards(wards);
    }

    return (
        <>
            {cart.length ? (
                <>
                    <CartNav page="checkout" />

                    <form action="" onSubmit={handleSubmit(onSubmit)} method="POST" className="container max-w-6xl mx-auto px-3 mt-10 mb-9 grid grid-cols-12 gap-5">
                        <div className="col-span-12 lg:col-span-8 border-t-2 pt-3">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="uppercase text-gray-500 font-semibold text-lg">Thông tin thanh toán</h3>
                                <button type="button" id="btn-choose-address" className="px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Sử dụng địa chỉ khác</button>
                            </div>

                            <div className="grid grid-cols-12 gap-x-4">
                                <div className="col-span-6 mb-3">
                                    <label htmlFor="cart__checkout-form-name" className="font-semibold mb-1 block">Họ và tên *</label>
                                    <input
                                        type="text"
                                        id="cart__checkout-form-name"
                                        {...register("fullName")}
                                        className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                                        placeholder="Nhập họ tên"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.fullName?.message}</div>
                                </div>
                                <div className="col-span-6 mb-3">
                                    <label htmlFor="cart__checkout-form-phone" className="font-semibold mb-1 block">Điện thoại *</label>
                                    <input
                                        type="text"
                                        {...register("phone")}
                                        id="cart__checkout-form-phone"
                                        className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                                        placeholder="Số điện thoại người nhận hàng"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.phone?.message}</div>
                                </div>
                                <div className="col-span-12 mb-3">
                                    <label htmlFor="cart__checkout-form-email" className="font-semibold mb-1 block">Email *</label>
                                    <input
                                        type="email"
                                        id="cart__checkout-form-email"
                                        {...register("email")}
                                        className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                                        placeholder="Email người nhận hàng"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.email?.message}</div>
                                </div>
                                <div className="col-span-12 md:col-span-4 mb-3 relative">
                                    <label htmlFor="cart__checkout-province" className="font-semibold mb-1 block">Tỉnh/Thành phố *</label>
                                    <select
                                        id="cart__checkout-province"
                                        {...register("provinceCode")}
                                        onChange={e => handleChangeProvince(e)}
                                        className="shadow-[inset_0_-1.4em_1em_0_rgba(0,0,0,0.02)] hover:shadow-none hover:cursor-default focus:shadow-none focus:cursor-text w-full border px-2 h-10 text-sm outline-none"
                                    >
                                        <option value={0}>-- Chọn Tỉnh/TP --</option>
                                        {provinces?.map((item, index) => <option value={item.code} key={index}>{item.name}</option>)}
                                    </select>
                                    <div className="text-sm mt-0.5 text-red-500">{errors.provinceCode?.message}</div>
                                </div>
                                <div className="col-span-12 md:col-span-4 mb-3 relative">
                                    <label htmlFor="cart__checkout-district" className="font-semibold mb-1 block">Quận/Huyện *</label>
                                    <select
                                        id="cart__checkout-district"
                                        {...register("districtCode")}
                                        onChange={e => handleChangeDistrict(e)}
                                        className="shadow-[inset_0_-1.4em_1em_0_rgba(0,0,0,0.02)] hover:shadow-none hover:cursor-default focus:shadow-none focus:cursor-text w-full border px-2 h-10 text-sm outline-none"
                                    >
                                        <option value={0}>-- Chọn Quận/Huyện --</option>
                                        {districts?.map((item, index) => <option value={item.code} key={index}>{item.name}</option>)}
                                    </select>
                                    <div className="text-sm mt-0.5 text-red-500">{errors.districtCode?.message}</div>
                                </div>
                                <div className="col-span-12 md:col-span-4 mb-3 relative">
                                    <label htmlFor="cart__checkout-ward" className="font-semibold mb-1 block">Xã/Phường *</label>
                                    <select
                                        id="cart__checkout-ward"
                                        {...register("wardsCode")}
                                        className="shadow-[inset_0_-1.4em_1em_0_rgba(0,0,0,0.02)] hover:shadow-none hover:cursor-default focus:shadow-none focus:cursor-text w-full border px-2 h-10 text-sm outline-none"
                                    >
                                        <option value={0}>-- Chọn Xã/Phường --</option>
                                        {wards?.map((item, index) => <option value={item.code} key={index}>{item.name}</option>)}
                                    </select>
                                    <div className="text-sm mt-0.5 text-red-500">{errors.wardsCode?.message}</div>
                                </div>
                                <div className="col-span-12 mb-3">
                                    <label htmlFor="cart__checkout-form-add" className="font-semibold mb-1 block">Địa chỉ cụ thể *</label>
                                    <input
                                        type="text"
                                        {...register("address")}
                                        id="cart__checkout-form-add"
                                        className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none"
                                        placeholder="VD: Số xx, Ngõ xx, Phú Kiều"
                                    />
                                    <div className="text-sm mt-0.5 text-red-500">{errors.address?.message}</div>
                                </div>
                                <div className="col-span-12 mb-3 flex items-center">
                                    <input type="checkbox" id="cart__checkout-save-address" />
                                    <label htmlFor="cart__checkout-save-address" className="ml-1 block text-md">Lưu thông tin thanh toán?</label>
                                </div>
                            </div>
                            <h3 className="uppercase text-gray-500 font-semibold my-2 text-lg">Thông tin bổ sung</h3>
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 mb-3">
                                    <label htmlFor="cart__checkout-form-msg" className="font-semibold mb-1 block">Ghi chú đơn hàng (tuỳ chọn)</label>
                                    <textarea
                                        id="cart__checkout-form-msg"
                                        cols={30}
                                        rows={5}
                                        {...register("message")}
                                        className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border p-2 text-sm outline-none"
                                        placeholder="Ghi chú về đơn hàng"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4 border-l p-4 border-2 border-[#D9A953] min-h-40">
                            <h3 className="uppercase text-gray-500 font-semibold mb-3 text-lg">Đơn hàng của bạn</h3>
                            <table className="w-full text-left">
                                <thead>
                                    <tr>
                                        <th className="uppercase text-gray-500 text-sm pb-1.5 border-b-2">Sản phẩm</th>
                                        <th className="uppercase text-gray-500 text-sm pb-1.5 border-b-2 text-right">Tổng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart?.map((item, index) => (
                                        <tr className="border-b" key={index}>
                                            <td className="text-sm leading-5 py-3 text-gray-500 pr-1">
                                                <p className="text-base">
                                                    <span>{item.productName}</span>
                                                    <strong> x {item.quantity}</strong>
                                                </p>
                                                <p className="uppercase">Đá: {item.ice}%</p>
                                                <p className="uppercase">Đường: {item.sugar}%</p>
                                                <p className="uppercase">Size: {item.sizeName}</p>
                                                <p className="uppercase">Topping: {item.toppingName}</p>
                                            </td>
                                            <td className="py-3 font-semibold text-right pl-1">{formatCurrency(item.productPrice + item.sizePrice + item.toppingPrice)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr className="border-b">
                                        <td className="font-semibold text-sm py-2">Tạm tính</td>
                                        <td className="font-semibold text-right">{formatCurrency(totalPrice)}</td>
                                    </tr>
                                    {/* <tr className="border-b">
                                        <td className="font-semibold text-sm py-2"> Voucher <strong className="ml-1 mr-2">COVID</strong>
                                        </td>
                                        <td className="py-2 text-right font-semibold">- 25.000 VND</td>
                                    </tr> */}
                                    <tr className="border-b">
                                        <td className="font-semibold text-sm py-2">Tổng</td>
                                        <td className="font-semibold text-right">{formatCurrency(totalPrice)}</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <button className="mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Đặt hàng</button>
                        </div>
                    </form>
                </>
            ) : (
                navigate("/cart")
            )}
        </>
    )
}

export default CheckoutPage;