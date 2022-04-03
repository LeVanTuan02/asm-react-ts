import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getByUserId, remove } from "../../../api/address";
import { getDistrictById, getProvinceById, getWardById } from "../../../api/location";
import { AddressType } from "../../../types/address";
import { isAuthenticate } from "../../../utils/localStorage";

const AddressPage = () => {
    const [address, setAddress] = useState<AddressType[]>();
    const { user } = isAuthenticate();

    const renderAddress = async (address: string, wardsCode: number, districtCode: number, provinceCode: number) => {
        const wardsData = await getWardById(wardsCode);
        const districtData = await getDistrictById(districtCode);
        const provinceData = await getProvinceById(provinceCode);
        return `${address}, ${wardsData.name}, ${districtData.name}, ${provinceData.name}`;
    }

    useEffect(() => {
        const getAddress = async () => {
            const { data } = await getByUserId(user._id);

            const listAddress = [];
            for await (const addItem of data) {
                listAddress.push({
                    ...addItem,
                    address: await renderAddress(addItem.address, addItem.wardsCode, addItem.districtCode, addItem.provinceCode)
                })
            }
            setAddress(listAddress);
        };
        getAddress();
    }, [])

    const handleRemoveAddress = async (id: string) => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa không?',
            text: "Bạn không thể hoàn tác sau khi xóa!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                remove(id)
                    .then(() => {
                        Swal.fire(
                            'Thành công!',
                            'Đã xóa thành công.',
                            'success'
                        )
                    })
                    .then(() => setAddress(address?.filter(item => item._id !== id)));
            }
        })
    }

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
                    {address?.map((item, index)=> (
                        <tr className="border-b" key={index}>
                            <td>#{++index}</td>
                            <td className="py-2">{item.fullName}</td>
                            <td className="py-2">{item.phone}</td>
                            <td className="py-2">{item.address}</td>
                            <td className="py-2 text-right">
                                <button
                                    onClick={() => handleRemoveAddress(item._id)}
                                    className="btn-remove px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] mr-2"
                                >Delete</button>
                                <Link to={`/my-account/address/${item._id}`}>
                                    <button className="px-3 py-1.5 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Edit</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
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