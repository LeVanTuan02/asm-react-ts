import { Link } from "react-router-dom";

const CartDetailPage = () => {
    return (
        <>
            <header className="z-10 fixed top-14 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                    <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
                    Cart
                    </h5>
                    <span>DS đơn hàng</span>
                </div>

                <div>
                    <button type="button" data-status="1" className="btn-update-stt btn-update-stt-confirm mr-2 inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Xác nhận ĐH
                    </button>
                    <Link to="/admin/cart">
                        <button type="button" className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            DS đơn hàng
                        </button>
                    </Link>
                </div>
            </header>

            <div className="p-6 mt-24 overflow-hidden">
                <div className="shadow sm:rounded-md bg-white p-5">
                    <div> Đơn hàng # <mark>32</mark> đặt lúc <mark>22/2/2022 22:40:07</mark> hiện tại <mark>Đã xác nhận lúc 22/2/2022 22:40:45</mark>
                    </div>
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
                                        <img src="http://res.cloudinary.com/levantuan/image/upload/v1645543326/assignment-js/ffs35rcdv2zbejpfjnlv.png" className="w-10 h-10 object-cover" alt="" />
                                        <div className="pl-3">
                                            <a href="/#/product/${item.productId}" className="text-blue-500">Trà sữa socola</a>
                                            <div className="text-sm">
                                                <p>Đá: 50%</p>
                                                <p>Đường: 34%</p>
                                                <p>Size: S</p>
                                                <p>Topping: Thạch nha đam</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-2">14.123 VND</td>
                                    <td className="py-2">2</td>
                                    <td className="py-2 text-right text-black font-medium">28.246 VND</td>
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
                                    <td className="py-1.5 text-right">163.246 VND</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-1.5 font-medium">Voucher đã sử dụng</td>
                                    <td className="py-1.5 text-right">BGMAIDINH10 (Giảm 9.999 VND)</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-1.5 font-medium">Tổng giảm:</td>
                                    <td className="py-1.5 text-right">9.999 VND</td>
                                </tr>
                                <tr>
                                    <td className="py-1.5 font-medium">Tổng tiền:</td>
                                    <td className="py-1.5 text-right">153.247 VND</td>
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
                                    <td className="py-1.5 text-right">Nguyễn Trần Khôi</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-1.5 font-medium">Địa chỉ:</td>
                                    <td className="py-1.5 text-right">Abc, Phường Quang Trung, Thành phố Hà Giang, Tỉnh Hà Giang</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-1.5 font-medium">Số điện thoại:</td>
                                    <td className="py-1.5 text-right">0347896888</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-1.5 font-medium">Email:</td>
                                    <td className="py-1.5 text-right">nguyentrankhoi@gmail.com</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-1.5 font-medium">Thời gian đặt:</td>
                                    <td className="py-1.5 text-right">22/2/2022 22:40:07</td>
                                </tr>
                                <tr>
                                    <td className="py-1.5 font-medium">Ghi chú:</td>
                                    <td className="py-1.5 text-right">Không có</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        </>
    )
}

export default CartDetailPage;