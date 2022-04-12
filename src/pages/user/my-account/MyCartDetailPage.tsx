import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { get, update } from "../../../api/order";
import { OrderDetailType, OrderType } from "../../../types/order";
import { formatCurrency, formatDate } from "../../../utils";
import { get as getOrderById } from "../../../api/orderDetail";
import { get as getVoucher } from "../../../api/voucher";
import Swal from "sweetalert2";
import OrderLogs from "../../../components/OrderLogs";
import { add } from "../../../api/orderLogs";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../redux/authSlice";

const MyCartDetailPage = () => {
    const [order, setOrder] = useState<any>({});
    const [orderDetail, setOrderDetail] = useState<OrderDetailType[]>();
    const [voucherText, setVoucherText] = useState<string>();
    const [showCartLog, setShowCartLog] = useState(false);
    const { user } = useSelector(selectAuth);

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

    useEffect(() => {
        const renderVoucher = async () => {
            let voucherStr: string = "";
            if (order?.voucher) {
                for await (const voucherItem of order.voucher) {
                    const { data: voucher } = await getVoucher(voucherItem);

                    voucherStr += `${voucher.code} (Giảm ${voucher.condition ? formatCurrency(voucher.conditionNumber) : `${voucher.conditionNumber}%`}), `;
                }
            }

            voucherStr = voucherStr.slice(0, -2);
            setVoucherText(voucherStr);
        };
        renderVoucher();
    }, [order]);

    const handleCancelOrder = () => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn hủy đơn hàng?',
            text: "Bạn không thể hoàn tác sau khi hủy!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await update({
                    ...order,
                    status: 4
                })

                // save logs
                await add({
                    userId: user._id,
                    status: 4,
                    orderId: id
                })

                Swal.fire(
                    'Thành công!',
                    'Đơn hàng đã bị hủy.',
                    'success'
                )
                setOrder(data);
            }
        })
    }
    
    return (
        <>
            <section className="flex justify-between items-center mb-2">
                <div className="flex-1">
                    Đơn hàng #<mark>{order._id}</mark> đặt lúc <mark>{formatDate(order.createdAt || "")}</mark> hiện tại <mark>{order.status === 0 ? "Đang chờ xác nhận" : order.status === 1 ? `Đã xác nhận lúc ${formatDate(order.updatedAt || "")}` : order.status === 2 ? `Đang giao hàng lúc ${formatDate(order.updatedAt || "")}` : order.status === 3 ? `Đã giao thành công lúc ${formatDate(order.updatedAt || "")}` : order.status === 4 ? `Đã bị hủy lúc ${formatDate(order.updatedAt || "")}` : ""}</mark>
                </div>
                <div className="flex">
                    {(order.status === 0 || order.status === 1) && (
                        <button
                            className="px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] mr-2"
                            onClick={handleCancelOrder}
                        >Hủy ĐH</button>
                    )}
                    <button onClick={() => setShowCartLog(prev => !prev)} className="px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Lịch sử ĐH</button>
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
                                    <img src={item.productId.image} className="w-10 h-10 object-cover" alt="" />
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
                            <td className="py-1.5 text-right">{formatCurrency(order?.totalPrice || 0)}</td>
                        </tr>
                        {voucherText && (
                            <tr className="border-b">
                                <td className="py-1.5 font-medium">Voucher đã sử dụng</td>
                                <td className="py-1.5 text-right">{voucherText}</td>
                            </tr>
                        )}
                        <tr className="border-b">
                            <td className="py-1.5 font-medium">Tổng giảm:</td>
                            <td className="py-1.5 text-right">{formatCurrency(order?.priceDecrease || 0)}</td>
                        </tr>
                        <tr>
                            <td className="py-1.5 font-medium">Tổng tiền:</td>
                            <td className="py-1.5 text-right">{formatCurrency((order?.totalPrice - order?.priceDecrease) > 0 ? order?.totalPrice - order?.priceDecrease : 0)}</td>
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

            <OrderLogs isShow={showCartLog} orderId={order._id} order={order} onHandleShow={setShowCartLog} />
        </>
    )
}

export default MyCartDetailPage;