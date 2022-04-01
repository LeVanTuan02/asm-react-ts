import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { get } from "../../../api/order";
import { OrderDetailType, OrderType } from "../../../types/order";
import { formatCurrency, formatDate } from "../../../utils";
import { get as getOrderById } from "../../../api/orderDetail";

const MyCartDetailPage = () => {
    const [order, setOrder] = useState<OrderType>({});
    const [orderDetail, setOrderDetail] = useState<OrderDetailType[]>();

    const { id } = useParams();

    useEffect(() => {
        const getOrder = async () => {
            const { data } = await get(id);
            setOrder(data);
        };
        getOrder();

        const getOrderDetail = async () => {
            const { data } = await getOrderById(id);
            setOrderDetail(data);
        };
        getOrderDetail();
    }, []);
    
    return (
        <>
            <section className="flex justify-between items-center mb-2">
                <div className="flex-1">
                    Đơn hàng #<mark>{order._id}</mark> đặt lúc <mark>{formatDate(order.createdAt || "")}</mark> hiện tại <mark>{order.status === 0 ? "Đang chờ xác nhận" : order.status === 1 ? `Đã xác nhận lúc ${formatDate(order.updatedAt || "")}` : order.status === 2 ? `Đang giao hàng lúc ${formatDate(order.updatedAt || "")}` : order.status === 3 ? `Đã giao thành công lúc ${formatDate(order.updatedAt || "")}` : order.status === 4 ? `Đã bị hủy lúc ${formatDate(order.updatedAt || "")}` : ""}</mark>
                </div>
                <div className="flex">
                    <button id="btn-cancel" className="px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] mr-2">Hủy ĐH</button>
                    <button className="px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Lịch sử ĐH</button>
                </div>
            </section>
            <section>
                <h2 className="font-semibold text-gray-600 text-2xl">Chi tiết đơn hàng</h2>
                <table className="mt-3 text-gray-600 w-full text-left">
                    <thead>
                        <tr>
                            <th className="pb-1 border-b-2 uppercase text-sm">STT</th>
                            <th className="pb-1 border-b-2 uppercase text-sm">Sản phẩm</th>
                            <th className="pb-1 border-b-2 uppercase text-sm">Đơn giá</th>
                            <th className="pb-1 border-b-2 uppercase text-sm">Số lượng</th>
                            <th className="pb-1 border-b-2 uppercase text-sm text-right">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderDetail?.map((item, index) => (
                            <tr className="border-b" key={index}>
                                <td>{++index}</td>
                                <td className="py-2 flex items-center">
                                    <img src="http://res.cloudinary.com/levantuan/image/upload/v1645543326/assignment-js/ffs35rcdv2zbejpfjnlv.png" className="w-10 h-10 object-cover" alt="" />
                                    <div className="pl-3">
                                        <Link to={`/san-pham/${item.productId.slug}`} className="text-blue-500">{item.productId.name}</Link>
                                        <div className="text-sm">
                                            <p>Đá: {item.ice}%</p>
                                            <p>Đường: {item.sugar}%</p>
                                            <p>Size: {item.sizeId.name}</p>
                                            <p>Topping: {item.toppingId.name}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-2">{formatCurrency(item.productPrice + item.sizePrice + item.toppingPrice)}</td>
                                <td className="py-2">{item.quantity}</td>
                                <td className="py-2 text-right text-black font-medium">{formatCurrency((item.productPrice + item.sizePrice + item.toppingPrice) * item.quantity)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            <section className="mt-4">
                <h2 className="font-semibold text-gray-600 text-2xl">Tổng thanh toán</h2>
                <table className="mt-1 text-gray-600 w-full text-left">
                    <tbody>
                        <tr className="border-b">
                            <td className="py-1.5 font-medium">Tiền tạm tính:</td>
                            <td className="py-1.5 text-right">{formatCurrency(order?.totalPrice - order?.priceDecrease)}</td>
                        </tr>
                        {/* <tr className="border-b">
                            <td className="py-1.5 font-medium">Voucher đã sử dụng</td>
                            <td className="py-1.5 text-right">BGMAIDINH10 (Giảm 9.999 VND)</td>
                        </tr> */}
                        <tr className="border-b">
                            <td className="py-1.5 font-medium">Tổng giảm:</td>
                            <td className="py-1.5 text-right">{formatCurrency(order?.priceDecrease || 0)}</td>
                        </tr>
                        <tr>
                            <td className="py-1.5 font-medium">Tổng tiền:</td>
                            <td className="py-1.5 text-right">{formatCurrency(order?.totalPrice - order?.priceDecrease)}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mt-4">
                <h2 className="font-semibold text-gray-600 text-2xl">Thông tin vận chuyển</h2>
                <table className="mt-1 text-gray-600 w-full text-left">
                    <tbody>
                        <tr className="border-b">
                            <td className="py-1.5 font-medium">Họ và tên:</td>
                            <td className="py-1.5 text-right">{order?.customerName}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-1.5 font-medium">Địa chỉ:</td>
                            <td className="py-1.5 text-right">{order?.address}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-1.5 font-medium">Số điện thoại:</td>
                            <td className="py-1.5 text-right">{order?.phone}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-1.5 font-medium">Email:</td>
                            <td className="py-1.5 text-right">{order?.email}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-1.5 font-medium">Thời gian đặt:</td>
                            <td className="py-1.5 text-right">{formatDate(order?.createdAt || "")}</td>
                        </tr>
                        <tr>
                            <td className="py-1.5 font-medium">Ghi chú:</td>
                            <td className="py-1.5 text-right">{order?.message || "Không có"}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default MyCartDetailPage;