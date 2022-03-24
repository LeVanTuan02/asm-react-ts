import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CheckoutPage = () => {
    return (
        <>
            <section className="container max-w-6xl mx-auto px-3 mt-10">
                <ul className="flex justify-center items-center">
                    <li className="text-2xl px-2">
                        <a href="/#/cart" className="text-black uppercase transition ease-linear duration-200 hover:text-black">SHOPPING CART</a>
                    </li>
                    <li className="text-md text-gray-400 px-2 hidden md:block">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </li>
                    <li className="text-2xl px-2">
                        <a href="/#/cart-checkout" className="uppercase text-gray-400 transition ease-linear duration-200 hover:text-black">Checkout details</a>
                    </li>
                    <li className="text-md text-gray-400 px-2 hidden md:block">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </li>
                    <li className="text-2xl px-2">
                        <span className="uppercase text-gray-400 cursor-default">Order Complete</span>
                    </li>
                </ul>
            </section>
            <form action="" id="cart__checkout-form" method="POST" className="container max-w-6xl mx-auto px-3 mt-10 mb-9 grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-8 border-t-2 pt-3">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="uppercase text-gray-500 font-semibold text-lg">Thông tin thanh toán</h3>
                        <button type="button" id="btn-choose-address" className="px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Sử dụng địa chỉ khác</button>
                    </div>
                    <div className="grid grid-cols-12 gap-x-4">
                        <div className="col-span-6 mb-3">
                            <label htmlFor="cart__checkout-form-name" className="font-semibold mb-1 block">Họ và tên *</label>
                            <input type="text" id="cart__checkout-form-name" defaultValue="Lê Văn Tuân" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập họ tên" />
                            <div className="text-sm mt-0.5 text-red-500" />
                        </div>
                        <div className="col-span-6 mb-3">
                            <label htmlFor="cart__checkout-form-phone" className="font-semibold mb-1 block">Điện thoại *</label>
                            <input type="text" id="cart__checkout-form-phone" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Số điện thoại người nhận hàng" />
                            <div className="text-sm mt-0.5 text-red-500" />
                        </div>
                        <div className="col-span-12 mb-3">
                            <label htmlFor="cart__checkout-form-email" className="font-semibold mb-1 block">Email *</label>
                            <input type="email" id="cart__checkout-form-email" defaultValue="tuanlv@gmail.com" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Email người nhận hàng" />
                            <div className="text-sm mt-0.5 text-red-500" />
                        </div>
                        <div className="col-span-12 md:col-span-4 mb-3 relative">
                            <label htmlFor="cart__checkout-province" className="font-semibold mb-1 block">Tỉnh/Thành phố *</label>
                            <select id="cart__checkout-province" className="shadow-[inset_0_-1.4em_1em_0_rgba(0,0,0,0.02)] hover:shadow-none hover:cursor-default focus:shadow-none focus:cursor-text w-full border px-2 h-10 text-sm outline-none">
                                <option value="">-- Chọn Tỉnh/TP --</option>
                                <option value="${item.code}">Bắc Giang</option>
                            </select>
                            <div className="text-sm mt-0.5 text-red-500" />
                        </div>
                        <div className="col-span-12 md:col-span-4 mb-3 relative">
                            <label htmlFor="cart__checkout-district" className="font-semibold mb-1 block">Quận/Huyện *</label>
                            <select id="cart__checkout-district" className="shadow-[inset_0_-1.4em_1em_0_rgba(0,0,0,0.02)] hover:shadow-none hover:cursor-default focus:shadow-none focus:cursor-text w-full border px-2 h-10 text-sm outline-none">
                                <option value="">-- Chọn Quận/Huyện --</option>
                                <option value="${item.code}">Lạng Giang</option>
                            </select>
                            <div className="text-sm mt-0.5 text-red-500" />
                        </div>
                        <div className="col-span-12 md:col-span-4 mb-3 relative">
                            <label htmlFor="cart__checkout-ward" className="font-semibold mb-1 block">Xã/Phường *</label>
                            <select id="cart__checkout-ward" className="shadow-[inset_0_-1.4em_1em_0_rgba(0,0,0,0.02)] hover:shadow-none hover:cursor-default focus:shadow-none focus:cursor-text w-full border px-2 h-10 text-sm outline-none">
                                <option value="">-- Chọn Xã/Phường --</option>
                                <option value="${item.code}">Tân Thanh</option>
                            </select>
                            <div className="text-sm mt-0.5 text-red-500" />
                        </div>
                        <div className="col-span-12 mb-3">
                            <label htmlFor="cart__checkout-form-add" className="font-semibold mb-1 block">Địa chỉ cụ thể *</label>
                            <input type="text" id="cart__checkout-form-add" defaultValue="Abc" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="VD: Số xx, Ngõ xx, Phú Kiều" />
                            <div className="text-sm mt-0.5 text-red-500" />
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
                            <textarea name="cart__checkout-form-msg" id="cart__checkout-form-msg" cols={30} rows={5} className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border p-2 text-sm outline-none" placeholder="Ghi chú về đơn hàng" defaultValue={""} />
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
                            <tr className="border-b">
                                <td className="text-sm leading-5 py-3 text-gray-500 pr-1">
                                    <p className="text-base">
                                        <span>Trà sữa trân châu đường đen</span>
                                        <strong>x 1</strong>
                                    </p>
                                    <p className="uppercase">Đá: 10%</p>
                                    <p className="uppercase">Đường: 10%</p>
                                    <p className="uppercase">Size: 10</p>
                                    <p className="uppercase">Topping: Không chọn Topping</p>
                                </td>
                                <td className="py-3 font-semibold text-right pl-1">25.000 VND</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="border-b">
                                <td className="font-semibold text-sm py-2">Tạm tính</td>
                                <td className="font-semibold text-right">25.000 VND</td>
                            </tr>
                            <tr className="border-b">
                                <td className="font-semibold text-sm py-2"> Voucher <strong className="ml-1 mr-2">COVID</strong>
                                </td>
                                <td className="py-2 text-right font-semibold">- 25.000 VND</td>
                            </tr>
                            <tr className="border-b">
                                <td className="font-semibold text-sm py-2">Tổng</td>
                                <td className="font-semibold text-right">25.000 VND</td>
                            </tr>
                        </tfoot>
                    </table>
                    <button className="mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Đặt hàng</button>
                </div>
            </form>
        </>
    )
}

export default CheckoutPage;