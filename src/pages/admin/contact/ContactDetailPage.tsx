import { Link } from "react-router-dom";

const ContactDetailPage = () => {
    return (
        <>
            <header className="z-10 fixed top-14 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                    <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
                    Contact
                    </h5>
                    <span>Chi tiết liên hệ</span>
                </div>

                <Link to="/admin/contact">
                    <button type="button" className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        DS liên hệ
                    </button>
                </Link>
            </header>

            <div className="p-6 mt-24 overflow-hidden">
                <form action="" method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <span className="font-semibold mb-4 block text-xl">Thông tin chi tiết feedback:</span>
                            <div className="grid grid-cols-6 gap-3">
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="customer-name" className="block text-sm font-medium text-gray-700">Tên khách hàng</label>
                                    <input type="text" disabled name="customer-name" className="py-2 px-3 mt-1 border block w-full outline-none shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-50 text-gray-500 text-sm" defaultValue="${contactDetail.name}" />
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="customer-phone" className="block text-sm font-medium text-gray-700">Sdt khách hàng</label>
                                    <input type="text" disabled name="customer-phone" className="py-2 px-3 mt-1 border block w-full outline-none shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-50 text-gray-500 text-sm" defaultValue="${contactDetail.phone}" />
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="customer-phone" className="block text-sm font-medium text-gray-700">Email khách hàng</label>
                                    <input type="text" disabled name="customer-phone" className="py-2 px-3 mt-1 border block w-full outline-none shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-50 text-gray-500 text-sm" defaultValue="${contactDetail.email}" />
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="customer-name" className="block text-sm font-medium text-gray-700">Chi nhánh feedback</label>
                                    <input type="text" disabled name="customer-name" className="py-2 px-3 mt-1 border block w-full outline-none shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-50 text-gray-500 text-sm" defaultValue="${contactDetail.store.name}" />
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="customer-phone" className="block text-sm font-medium text-gray-700">Ngày gửi</label>
                                    <input type="text" disabled name="customer-phone" className="py-2 px-3 mt-1 border block w-full outline-none shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-50 text-gray-500 text-sm" defaultValue="${formatDate(contactDetail.createdAt)}" />
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="feedback-content" className="block text-sm font-medium text-gray-700">Nội dung</label>
                                    <textarea id="feedback-content" disabled name="feedback-content" rows={10} className="py-2 px-3 outline-none shadow-sm mt-1 block w-full sm:text-sm border border-gray-300 rounded-md bg-gray-50 text-gray-500 text-sm" defaultValue={"${contactDetail.content}"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactDetailPage;