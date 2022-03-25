import { Link } from "react-router-dom";

const AddSizePage = () => {
    return (
        <>
            <header className="z-10fixed top-14 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                    <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
                    Size
                    </h5>
                    <span>Thêm Size</span>
                </div>
                <Link to="/admin/size">
                    <button type="button" className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        DS Size
                    </button>
                </Link>
            </header>

            <div className="p-6 mt-24 overflow-hidden">
                <form action="" method="POST" id="form__add-size">
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <span className="font-semibold mb-4 block text-xl">Thông tin chi tiết size:</span>
                            <div className="grid grid-cols-6 gap-3">
                                <div className="col-span-6">
                                    <label htmlFor="form__add-size-name" className="block text-sm font-medium text-gray-700">Tên size</label>
                                    <input type="text" name="form__add-size-name" id="form__add-size-name" className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập tên size" />
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="form__add-size-price" className="block text-sm font-medium text-gray-700">Giá thêm</label>
                                    <input type="number" name="form__add-size-price" id="form__add-size-price" className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập giá thêm của size" />
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Thêm size </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddSizePage;