import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteTopping, getToppings, selectTopping } from "../../redux/toppingSlice";
import { ToppingType } from "../../types/topping";
import { formatCurrency } from "../../utils";

type ToppingListProps = {
    start: number,
    limit: number,
}

const ToppingList = ({ start, limit }: ToppingListProps) => {
    const dispatch = useDispatch();
    const toppings: ToppingType[] = useSelector(selectTopping);

    useEffect(() => {
        dispatch(getToppings({ start, limit }));
    }, [start]);

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
                dispatch(deleteTopping(id));
                Swal.fire(
                    'Thành công!',
                    'Đã xóa thành công.',
                    'success'
                )
            }
        })
    }

    return (
        <table className="min-w-full divide-y divide-gray-200" id="cate__list-table">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> STT </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> ID </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Name </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Giá </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"> Actions </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {toppings?.map((item, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{++index + start}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item._id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatCurrency(item.price)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link to={`/admin/topping/${item._id}/edit`} className="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit</Link>
                            <button
                                className="topping__list-btn-delete h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-3"
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

export default ToppingList;