import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddressPage = () => {
    return (
        <>
            <table className="mt-3 text-gray-600 w-full text-left">
                <thead>
                    <tr>
                        <th className="pb-1 border-b-2 uppercase text-sm">Stt</th>
                        <th className="pb-1 border-b-2 uppercase text-sm">Họ tên</th>
                        <th className="pb-1 border-b-2 uppercase text-sm">Số điện thoại</th>
                        <th className="pb-1 border-b-2 uppercase text-sm">Địa chỉ</th>
                        <th className="pb-1 border-b-2 uppercase text-sm text-right">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td>#1</td>
                        <td className="py-2">Lê Văn Tuân</td>
                        <td className="py-2">0347888888</td>
                        <td className="py-2">Tân Mỹ, Tân Thanh, Lạng Giang, Bắc Giang</td>
                        <td className="py-2 text-right">
                            <button data-id="${address.id}" className="btn-remove px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] mr-2">Delete</button>
                            <a href="/#/my-account/address/${address.id}/edit">
                                <button className="px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Edit</button>
                            </a>
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td>#1</td>
                        <td className="py-2">Lê Văn Tuân</td>
                        <td className="py-2">0347888888</td>
                        <td className="py-2">Tân Mỹ, Tân Thanh, Lạng Giang, Bắc Giang</td>
                        <td className="py-2 text-right">
                            <button data-id="${address.id}" className="btn-remove px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] mr-2">Delete</button>
                            <a href="/#/my-account/address/${address.id}/edit">
                                <button className="px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Edit</button>
                            </a>
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td>#1</td>
                        <td className="py-2">Lê Văn Tuân</td>
                        <td className="py-2">0347888888</td>
                        <td className="py-2">Tân Mỹ, Tân Thanh, Lạng Giang, Bắc Giang</td>
                        <td className="py-2 text-right">
                            <button data-id="${address.id}" className="btn-remove px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] mr-2">Delete</button>
                            <a href="/#/my-account/address/${address.id}/edit">
                                <button className="px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Edit</button>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <ul className="flex justify-center mt-5">
                <li>
                    <a href="/#/my-account/address/page/${currentPage - 1}" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
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
                    <a href="/#/my-account/address/page/${+currentPage + 1}" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                        <button>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default AddressPage;