const UpdateInfoPage = () => {
    return (
        <>
            <h2 className="uppercase text-lg font-semibold text-gray-600 pb-1 border-b">Cập nhật thông tin tài khoản</h2>
            <form action="" className="mt-4" id="form__update-account">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 md:col-span-6">
                        <label htmlFor="form__update-account-fullname" className="mb-1 block font-semibold">Họ tên *</label>
                        <input type="text" id="form__update-account-fullname" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập họ tên" />
                        <div className="text-sm mt-0.5 text-red-500" />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <label htmlFor="form__update-account-phone" className="mb-1 block font-semibold">Số điện thoại *</label>
                        <input type="text" id="form__update-account-phone" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập họ tên" />
                        <div className="text-sm mt-0.5 text-red-500" />
                    </div>
                    <div className="col-span-12">
                        <label htmlFor="form__update-account-avatar" className="mb-1 block font-semibold">Ảnh đại diện *</label>
                        <input type="file" id="form__update-account-avatar" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 py-1 text-sm outline-none" />
                    </div>
                    <div className="col-span-12">
                        <label className="mb-1 block font-semibold">Xem trước ảnh đại diện</label>
                        <div>
                            <img src="https://res.cloudinary.com/levantuan/image/upload/v1645455652/assignment-js/rx7cgkojxqz9tqeidv7l.png" id="form__update-account-preview" className="w-40 h-40 object-cover rounded-md" alt="" />
                        </div>
                    </div>
                    <div className="col-span-12 mb-3">
                        <label htmlFor="form__update-account-email" className="font-semibold mb-1 block">Email *</label>
                        <input type="text" id="form__update-account-email" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập địa chỉ email" />
                        <div className="text-sm mt-0.5 text-red-500" />
                    </div>
                    <div className="col-span-12 md:col-span-4 mb-3 relative">
                        <label htmlFor="form__update-account-province" className="font-semibold mb-1 block">Tỉnh/Thành phố *</label>
                        <select id="form__update-account-province" className="shadow-[inset_0_-1.4em_1em_0_rgba(0,0,0,0.02)] hover:shadow-none hover:cursor-default focus:shadow-none focus:cursor-text w-full border px-2 h-10 text-sm outline-none">
                            <option value="">-- Chọn Tỉnh/TP --</option>
                            <option value="${item.code}">Bắc Giang</option>
                        </select>
                        <div className="text-sm mt-0.5 text-red-500" />
                    </div>
                    <div className="col-span-12 md:col-span-4 mb-3 relative">
                        <label htmlFor="form__update-account-district" className="font-semibold mb-1 block">Quận/Huyện *</label>
                        <select id="form__update-account-district" className="shadow-[inset_0_-1.4em_1em_0_rgba(0,0,0,0.02)] hover:shadow-none hover:cursor-default focus:shadow-none focus:cursor-text w-full border px-2 h-10 text-sm outline-none">
                            <option value="">-- Chọn Quận/Huyện --</option>
                            <option value="${item.code}">Lạng Giang</option>
                        </select>
                        <div className="text-sm mt-0.5 text-red-500" />
                    </div>
                    <div className="col-span-12 md:col-span-4 mb-3 relative">
                        <label htmlFor="form__update-account-ward" className="font-semibold mb-1 block">Xã/Phường *</label>
                        <select id="form__update-account-ward" className="shadow-[inset_0_-1.4em_1em_0_rgba(0,0,0,0.02)] hover:shadow-none hover:cursor-default focus:shadow-none focus:cursor-text w-full border px-2 h-10 text-sm outline-none">
                            <option value="">-- Chọn Xã/Phường --</option>
                            <option value="${item.code}">Tân Thanh</option>
                        </select>
                        <div className="text-sm mt-0.5 text-red-500" />
                    </div>
                    <div className="col-span-12 mb-3">
                        <label htmlFor="form__update-account-add" className="font-semibold mb-1 block">Địa chỉ cụ thể *</label>
                        <input type="text" id="form__update-account-add" defaultValue="abc" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập Thôn/Xóm/TDP" />
                        <div className="text-sm mt-0.5 text-red-500" />
                    </div>
                </div>
                <button className="mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Cập nhật</button>
            </form>
        </>
    )
}

export default UpdateInfoPage;