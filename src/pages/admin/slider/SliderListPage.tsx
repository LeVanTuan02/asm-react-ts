import { Link } from "react-router-dom";

const SliderListPage = () => {
    return (
        <>
            <header className="z-10 fixed top-14 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                    <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
                    Slider
                    </h5>
                    <span>DS Slide</span>
                </div>
                <Link to="/admin/slider/add">
                    <button type="button" className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Thêm Slide
                    </button>
                </Link>
            </header>

            <div className="p-6 mt-24 overflow-hidden">
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200" id="cate__list-table">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> ID </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Title </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Image </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> Trạng thái </th>
                                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"> Actions </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> 1 </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                <a href="" className="hover:underline">Slider 3</a>
                                            </td>
                                            <td className="px-6 py-4">
                                                <img src="https://res.cloudinary.com/levantuan/image/upload/v1644757540/assignment-js/bcrpldnvh7gqp8bsmpp4.jpg" className="w-64 h-20 object-cover rounded-md" alt="" />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Hiển thị </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="/#/admin/slider/${item.id}/edit" className="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit</a>
                                                <button data-id="${item.id}" className="slider__list-btn-delete h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-3">Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> 1 </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                <a href="" className="hover:underline">Slider 3</a>
                                            </td>
                                            <td className="px-6 py-4">
                                                <img src="https://res.cloudinary.com/levantuan/image/upload/v1644757540/assignment-js/bcrpldnvh7gqp8bsmpp4.jpg" className="w-64 h-20 object-cover rounded-md" alt="" />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"> Ẩn </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="/#/admin/slider/${item.id}/edit" className="h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Edit</a>
                                                <button data-id="${item.id}" className="slider__list-btn-delete h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-3">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SliderListPage;