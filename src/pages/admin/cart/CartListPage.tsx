import OrderList from "../../../components/admin/OrderList";

const CartListPage = () => {
    return (
        <>
            <header className="z-10 fixed top-14 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                    <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
                    Cart
                    </h5>
                    <span>DS đơn hàng</span>
                </div>
                <button type="button" className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    DS đơn hàng
                </button>
            </header>

            <div className="p-6 mt-24 overflow-hidden">
                <form action="" className="flex rounded-md shadow-sm mb-5" method="POST" id="cart__form-search">
                    <input type="text" name="company-website" id="cart__form-search-keyword" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300 px-4 py-2 border outline-none" placeholder="Nhập tên khách hàng hoặc số điện thoại" />
                    <select className="border-gray-300 border outline-none px-2 text-sm" id="cart__form-search-stt">
                        <option value="">-- Trạng thái --</option>
                        <option value={0}>Đơn hàng mới</option>
                        <option value={1}>Đã xác nhận</option>
                        <option value={2}>Đang giao hàng</option>
                        <option value={3}>Đã giao hoàng</option>
                        <option value={4}>Đã hủy</option>
                    </select>
                    <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer hover:bg-gray-200">
                        <i className="fas fa-search" />
                    </span>
                </form>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <OrderList />

                                <div className="border-t px-5 bg-white py-3 flex flex-col xs:flex-row items-center xs:justify-between" id="pagination">
                                    <div className="flex items-center">
                                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                            <a href="/#/admin/${url}/page/${currentPage - 1}" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                <span className="sr-only">Previous</span>
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                            <a href="/#/admin/${url}/page/${i}" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">1</a>
                                            <a href="/#/admin/${url}/page/${i}" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">2</a>
                                            <a href="/#/admin/${url}/page/${currentPage + 1}" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                                <span className="sr-only">Next</span>
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartListPage;