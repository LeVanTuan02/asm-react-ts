import { faChevronRight, faLongArrowAltLeft, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ThankPage = () => {
    return (
        <div className="mb-32">
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
            <section className="container max-w-6xl mx-auto">
                <h1 className="text-center mt-4 font-semibold text-2xl uppercase">Đặt hàng thành công</h1>

                <p className="text-center mt-2">
                    Cảm ơn bạn đã đặt hàng của Tea House.
                    Nhân viên sẽ gọi điện từ số điện thoại bạn đã cung cấp
                    để Confirm (Xác nhận) lại với bạn trong thời gian sớm nhất để xác nhận đơn hàng.
                </p>

                <div className="flex items-center justify-center mt-2">
                    <Link to="/thuc-don">
                        <button className="uppercase h-8 text-[#D9A953] font-semibold text-sm border-[#D9A953] border-2 px-3 transition ease-linear duration-300 hover:bg-[#D9A953] hover:text-white">
                            <FontAwesomeIcon icon={faLongArrowAltLeft} />
                            <span> Tiếp tục mua hàng</span>
                        </button>
                    </Link>
                    <Link to={`/my-account/cart`} className="ml-2">
                        <button className="uppercase h-8 text-[#D9A953] font-semibold text-sm border-[#D9A953] border-2 px-3 transition ease-linear duration-300 hover:bg-[#D9A953] hover:text-white">
                            <span>Kiểm tra đơn hàng </span>
                            <FontAwesomeIcon icon={faLongArrowAltRight} />
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default ThankPage;