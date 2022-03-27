import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getAll, remove } from "../../api/voucher";
import { VoucherType } from "../../types/voucher";
import { formatCurrency, formatDate } from "../../utils";

const VoucherList = () => {
    const [vouchers, setVouchers] = useState<VoucherType[]>();

    useEffect(() => {
        // get data
        const getVouchers = async () => {
            const { data } = await getAll();
            setVouchers(data);
        }
        getVouchers();
    }, []);

    const handleRemove = async (id: string) => {
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
                    .then(() => setVouchers(vouchers?.filter(item => item._id !== id)));
            }
        })
    }

    return (
        <table className="min-w-full divide-y divide-gray-200" id="voucher__list-table">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> STT </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> ID </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Mã Voucher </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Số lượng </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Giảm theo </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Thời gian hiệu lực </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Thời gian hết hiệu lực </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Trạng thái </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"> Actions </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200" id="voucher__list">
                {vouchers?.map((item, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item._id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.code}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.quantity}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">-{item.condition ? formatCurrency(item.conditionNumber) : item.conditionNumber + "%"}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">{formatDate(item.timeStart)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">{formatDate(item.timeEnd)}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>{item.status ? "Kích hoạt" : "Khóa"}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link to={`/admin/voucher/${item._id}/edit`} className="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit</Link>
                            <button
                                className="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-3"
                                onClick={() => handleRemove(item._id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default VoucherList;