import { Link } from "react-router-dom";

const EditUserPage = () => {
    return (
        <>
            <header className="z-10 fixed top-14 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                    <h5 className="relative pr-5 after:content-[''] after:absolute after:w-[1px] after:h-4 after:top-1/2 after:-translate-y-1/2 after:right-2.5 after:bg-gray-300">
                    Users
                    </h5>
                    <span>Update User</span>
                </div>
                <Link to="/admin/user">
                    <button type="button" className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        DS User
                    </button>
                </Link>
            </header>

            <div className="p-6 mt-24 overflow-hidden">
                <form action="" method="POST" id="form__add-user">
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <span className="font-semibold mb-4 block text-xl">Thông tin chi tiết user:</span>
                            <div className="grid grid-cols-6 gap-3">
                                <div className="col-span-6">
                                    <label htmlFor="form__add-user-fullname" className="block text-sm font-medium text-gray-700">Họ và tên</label>
                                    <input type="text" name="form__add-user-fullname" id="form__add-user-fullname" className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập tên đầy đủ" />
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="form__add-user-username" className="block text-sm font-medium text-gray-700">Username</label>
                                    <input type="text" name="form__add-user-username" id="form__add-user-username" className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập username" />
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="form__add-user-phone" className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                                    <input type="text" name="form__add-user-phone" id="form__add-user-phone" className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập sdt" />
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="form__add-user-role" className="block text-sm font-medium text-gray-700">Vai trò</label>
                                    <select id="form__add-user-role" name="form__add-user-role" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option value="">-- Chọn vai trò --</option>
                                        <option value={0} selected>Khách hàng</option>
                                        <option value={1}>Admin</option>
                                    </select>
                                    <div className="form__add-cate-error-img text-sm mt-0.5 text-red-500" />
                                </div>
                                <div className="col-span-6 md:col-span-3">
                                    <label htmlFor="form__add-user-stt" className="block text-sm font-medium text-gray-700">Trạng thái</label>
                                    <select id="form__add-user-stt" name="form__add-user-stt" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option value="">-- Chọn trạng thái tài khoản --</option>
                                        <option value={0} selected>Khóa</option>
                                        <option value={1}>Kích hoạt</option>
                                    </select>
                                    <div className="form__add-cate-error-img text-sm mt-0.5 text-red-500" />
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="form__add-user-email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="text" name="form__add-user-email" id="form__add-user-email" className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập email" />
                                </div>
                                <div className="col-span-6 md:col-span-2">
                                    <label htmlFor="form__add-user-province" className="block text-sm font-medium text-gray-700">Tỉnh/TP</label>
                                    <select id="form__add-user-province" name="form__add-user-province" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option value="">-- Chọn Tỉnh/TP --</option> ${'{'}listProvince.map((item) =&gt; ` <option value="${item.code}">${'{'}item.name{'}'}</option>`).join(""){'}'}
                                    </select>
                                    <div className="form__add-cate-error-img text-sm mt-0.5 text-red-500" />
                                </div>
                                <div className="col-span-6 md:col-span-2">
                                    <label htmlFor="form__add-user-district" className="block text-sm font-medium text-gray-700">Quận/Huyện</label>
                                    <select id="form__add-user-district" name="form__add-user-district" disabled className="form-control mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option value="">-- Chọn Quận/Huyện --</option>
                                    </select>
                                    <div className="form__add-cate-error-img text-sm mt-0.5 text-red-500" />
                                </div>
                                <div className="col-span-6 md:col-span-2">
                                    <label htmlFor="form__add-user-ward" className="block text-sm font-medium text-gray-700">Xã/Phường</label>
                                    <select id="form__add-user-ward" name="form__add-user-ward" disabled className="form-control mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option value="">-- Chọn Xã/Phường --</option>
                                    </select>
                                    <div className="form__add-cate-error-img text-sm mt-0.5 text-red-500" />
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="form__add-user-address" className="block text-sm font-medium text-gray-700">Địa chỉ hiện tại</label>
                                    <input type="text" name="form__add-user-address" id="form__add-user-address" className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập thôn/xóm/TDP" />
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="form__add-user-password" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                                    <input type="password" name="form__add-user-password" id="form__add-user-password" className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Nhập mật khẩu" />
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="form__add-user-confirm" className="block text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
                                    <input type="password" name="form__add-user-confirm" id="form__add-user-confirm" className="py-2 px-3 mt-1 border focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Xác nhận mật khẩu" />
                                </div>
                                <div className="col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Xem trước ảnh</label>
                                    <div className="mt-1">
                                        <img src="https://res.cloudinary.com/levantuan/image/upload/v1644302455/assignment-js/thumbnail-image-vector-graphic-vector-id1147544807_ochvyr.jpg" alt="Preview Image" id="form__add-user-preview" className="h-40 w-40 rounded-full object-cover" />
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <label className="block text-sm font-medium text-gray-700">Ảnh đại diện</label>
                                    <div className="w-full mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label htmlFor="form__add-user-avatar" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span>Upload a file</span>
                                                    <input id="form__add-user-avatar" name="form__add-user-avatar" type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                    <div className="form__add-cate-error-img text-sm mt-0.5 text-red-500" />
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Thêm tài khoản </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditUserPage;