const MyCartDetailPage = () => {
    return (
        <>
            <section className="flex justify-between items-center">
                <div> Đơn hàng # <mark>111</mark> đặt lúc <mark>20/2/2022 19:54:06</mark> hiện tại <mark>Đang chờ xác nhận</mark>
                </div>
                <div>
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
                        <tr className="border-b">
                            <td>1</td>
                            <td className="py-2 flex items-center">
                                <img src="https://res.cloudinary.com/levantuan/image/upload/v1645173932/assignment-js/ij3btyfk7fwekvmmwbe6.png" className="w-10 h-10 object-cover" alt="" />
                                <div className="pl-3">
                                    <a href="/#/product/${item.productId}" className="text-blue-500">Trà sữa dâu nữ hoàng</a>
                                    <div className="text-sm">
                                        <p>Đá: 10%</p>
                                        <p>Đường: 20%</p>
                                        <p>Size: S</p>
                                        <p>Topping: Không chọn Topping</p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-2">42.000 VND</td>
                            <td className="py-2">4</td>
                            <td className="py-2 text-right text-black font-medium">42.000 VND</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mt-4">
                <h2 className="font-semibold text-gray-600 text-2xl">Tổng thanh toán</h2>
                <table className="mt-1 text-gray-600 w-full text-left">
                    <tbody>
                        <tr className="border-b">
                            <td className="py-1.5 font-medium">Tiền tạm tính:</td>
                            <td className="py-1.5 text-right">42.000 VND</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-1.5 font-medium">Voucher đã sử dụng</td>
                            <td className="py-1.5 text-right">BGMAIDINH (Giảm 10.000 VND){'}'}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-1.5 font-medium">Tổng giảm:</td>
                            <td className="py-1.5 text-right">149.000 VND</td>
                        </tr>
                        <tr>
                            <td className="py-1.5 font-medium">Tổng tiền:</td>
                            <td className="py-1.5 text-right">149.000 VND</td>
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
                            <td className="py-1.5 text-right">Lê Văn Tuân</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-1.5 font-medium">Địa chỉ:</td>
                            <td className="py-1.5 text-right">Tân Mỹ, Xã Tân Thanh, Huyện Lạng Giang, Tỉnh Bắc Giang</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-1.5 font-medium">Số điện thoại:</td>
                            <td className="py-1.5 text-right">0345263256</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-1.5 font-medium">Email:</td>
                            <td className="py-1.5 text-right">admin@gmail.com</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-1.5 font-medium">Thời gian đặt:</td>
                            <td className="py-1.5 text-right">20/2/2022 14:46:10</td>
                        </tr>
                        <tr>
                            <td className="py-1.5 font-medium">Ghi chú:</td>
                            <td className="py-1.5 text-right">Không có</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default MyCartDetailPage;