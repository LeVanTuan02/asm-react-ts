import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyCartPage = () => {
    return (
        <>
            <form action="" className="flex" id="cart__form-search">
                <input type="text" id="cart__form-search-key" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] flex-1 border px-2 h-10 text-sm outline-none" placeholder="Nhập mã đơn hàng hoặc tên khách hàng" />
                <select id="cart__form-search-stt" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] border px-2 h-10 text-sm outline-none">
                    <option value="">-- Trạng thái --</option>
                    <option value={0}>Chờ xác nhận </option>
                    <option value={1}>Đã xác nhận</option>
                    <option value={2}>Đang giao hàng</option>
                    <option value={3}>Đã giao hoàng</option>
                    <option value={4}>Đã hủy</option>
                </select>
            </form>
            <table className="mt-3 text-gray-600 w-full text-left">
                <thead>
                    <tr>
                        <th className="pb-1 border-b-2 uppercase text-sm">Mã ĐH</th>
                        <th className="pb-1 border-b-2 uppercase text-sm">Tên người nhận</th>
                        <th className="pb-1 border-b-2 uppercase text-sm">Ngày đặt</th>
                        <th className="pb-1 border-b-2 uppercase text-sm">Tổng giá trị</th>
                        <th className="pb-1 border-b-2 uppercase text-sm">Trạng thái</th>
                        <th className="pb-1 border-b-2 uppercase text-sm text-right">Hành động</th>
                    </tr>
                </thead>
                <tbody id="cart__list">
                    <tr className="border-b">
                        <td>#102</td>
                        <td className="py-2">Lê Văn Tuân</td>
                        <td className="py-2">20/2/2022 19:54:06</td>
                        <td className="py-2">244.000 VND</td>
                        <td className="py-2">
                            <label className="px-1 py-0.5 text-sm rounded-[4px] font-medium bg-[#FFE2E5] text-[#F64E60]">Đã hủy</label>
                        </td>
                        <td className="py-2 text-right">
                            <a href="/#/my-account/cart/${item.id}/detail">
                                <button className="px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">View</button>
                            </a>
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td>#102</td>
                        <td className="py-2">Lê Văn Tuân</td>
                        <td className="py-2">20/2/2022 19:54:06</td>
                        <td className="py-2">244.000 VND</td>
                        <td className="py-2">
                            <label className="px-1 py-0.5 text-sm rounded-[4px] font-medium bg-[#E1F0FF] text-[#3699FF]">Đã xác nhận</label>
                        </td>
                        <td className="py-2 text-right">
                            <a href="/#/my-account/cart/${item.id}/detail">
                                <button className="px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">View</button>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <ul className="flex justify-center mt-5" id="cart__list-pagination">
                <li>
                    <a href="/#/my-account/cart/page/${currentPage - 1}" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                        <button>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                    </a>
                </li>
                <li>
                    <a href="/#/my-account/cart/page/${i}" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white border-[#d9a953] bg-[#d9a953] text-white">1</a>
                </li>
                <li>
                    <a href="/#/my-account/cart/page/${i}" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white border-gray-500 text-gray-500">2</a>
                </li>
                <li>
                    <a href="/#/my-account/cart/page/${+currentPage + 1}" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                        <button>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default MyCartPage;