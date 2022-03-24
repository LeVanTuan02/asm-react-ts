import { faChevronRight, faLongArrowAltLeft, faTag, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartPage = () => {
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
            <section className="container max-w-6xl mx-auto px-3 mt-10 grid grid-cols-12 mb-9">
                <form action="" method="POST" id="cart__detail-form" className="col-span-12 lg:col-span-8 lg:pr-6">
                    <table className="table-auto w-full text-left border-collapse" id="cart__detail">
                        <thead>
                            <tr className="uppercase border-b-2">
                                <th className="pb-1 uppercase text-sm text-gray-500" colSpan={3}>Sản phẩm</th>
                                <th className="pb-1 uppercase text-sm text-gray-500">Giá</th>
                                <th className="pb-1 uppercase text-sm text-gray-500">Số lượng</th>
                                <th className="pb-1 uppercase text-sm text-gray-500 text-right">Tạm tính</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b cart__detail-item" data-id="${item.id}">
                                <td>
                                    <button type="button" data-id="${item.id}" className="cart__detail-btn-remove p-2 text-gray-400 text-xl transition ease-linear duration-200 hover:text-black ">
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </td>
                                <td className="p-2">
                                    <a href="/#/product/${item.productId}">
                                        <img className="block w-16 object-cover" src="https://res.cloudinary.com/levantuan/image/upload/v1645173932/assignment-js/ij3btyfk7fwekvmmwbe6.png" alt="" />
                                    </a>
                                </td>
                                <td className="p-2">
                                    <a href="/#/product/${item.productId}" className="font-semibold">Trà sữa trân châu đường đen</a>
                                    <div className="text-sm">
                                        <p>Đá: 10%</p>
                                        <p>Đường: 10%</p>
                                        <p>Size: S</p>
                                        <p>Topping: Không chọn Topping</p>
                                    </div>
                                </td>
                                <td className="font-bold">25.000 VND</td>
                                <td className="p-2">
                                    <div className="flex items-center h-9" id="cart__detail-qnt-wrap">
                                        <button type="button" className="cart__detail-qnt-btn btn-decrease cart__detail-btn-decrease px-2 bg-gray-100 border-gray-200 h-full border-l border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">-</button>
                                        <input type="text" className="cart__detail-qnt border border-gray-200 h-full w-10 text-center outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc]" defaultValue={1} />
                                        <button type="button" className="cart__detail-qnt-btn btn-increase cart__detail-btn-increase px-2 bg-gray-100 border-gray-200 h-full border-r border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">+</button>
                                    </div>
                                </td>
                                <td className="font-bold text-right">25.000 VND</td>
                            </tr>
                        </tbody>
                    </table>
                    <ul className="flex mt-6 items-center">
                        <li>
                            <a href="/#/products">
                                <button type="button" className="select-none uppercase h-8 text-[#D9A953] font-semibold text-sm border-[#D9A953] border-2 px-3 transition ease-linear duration-300 hover:bg-[#D9A953] hover:text-white">
                                    <FontAwesomeIcon icon={faLongArrowAltLeft} />
                                    <span> Tiếp tục xem sản phẩm</span>
                                </button>
                            </a>
                        </li>
                        <li className="ml-2">
                            <button id="btn-cart-update" disabled className="cursor-pointer select-none uppercase bg-[#D9A953] px-3 h-8 font-semibold text-sm text-white transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Cập nhật giỏ hàng</button>
                        </li>
                    </ul>
                </form>
                <div className="mt-8 lg:mt-0 col-span-12 lg:col-span-4 lg:border-l lg:pl-6">
                    <table className="table-fixed w-full text-left">
                        <thead>
                            <tr className="uppercase border-b-2">
                                <th className="pb-1 text-sm text-gray-500" colSpan={2}>Cộng giỏ hàng</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td>Tạm tính</td>
                                <td className="py-2 text-right font-semibold">25.000 VND</td>
                            </tr>
                            <tr className="border-b">
                                <td> Voucher <strong className="ml-1 mr-2">COVID</strong>
                                    <button className="btn-remove-voucher" data-id="${item.id}">
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </td>
                                <td className="py-2 text-right font-semibold">- 30%</td>
                            </tr>
                            <tr className="border-b">
                                <td>Tổng</td>
                                <td className="py-2 text-right font-semibold">25.000 VND</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="/#/cart-checkout">
                        <button className="mt-4 w-full px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Tiến hành thanh toán</button>
                    </a>
                    <form action="" className="mt-7" id="form__voucher-add">
                        <div className="flex items-center pb-2 font-semibold border-b-2 text-gray-500">
                            <div className="mr-2">
                                <FontAwesomeIcon icon={faTag} />
                            </div> Mã giảm giá
                        </div>
                        <input type="text" id="form__voucher-add-control" placeholder="Mã giảm giá" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] my-4 w-full border px-2 h-10 text-sm outline-none" />
                        <button className="w-full px-3 py-2 bg-gray-100 border border-gray-300 text-black text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Áp dụng</button>
                    </form>
                </div>
                {/* <section className="text-center col-span-12 py-12">
                    <p>Chưa có sản phẩm nào trong giỏ hàng</p>
                    <a href="/#/products" className="block mt-4">
                        <button className="uppercase h-8 text-[#D9A953] font-semibold text-sm border-[#D9A953] border-2 px-3 transition ease-linear duration-300 hover:bg-[#D9A953] hover:text-white">
                            <FontAwesomeIcon icon={faLongArrowAltLeft} />
                            <span> Tiếp tục mua hàng</span>
                        </button>
                    </a>
                </section> */}
            </section>
        </>
    )
}

export default CartPage;