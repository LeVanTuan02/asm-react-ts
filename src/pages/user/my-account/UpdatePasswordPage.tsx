const UpdatePasswordPage = () => {
    return (
        <>
            <h2 className="uppercase text-lg font-semibold text-gray-600 pb-1 border-b">Đổi mật khẩu</h2>

            <form action="" className="mt-4" id="form__change-pass">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12">
                        <label htmlFor="form__change-pass-current-pass" className="mb-1 block font-semibold">Mật khẩu cũ *</label>
                        <input type="password" id="form__change-pass-current-pass" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập họ mật khẩu hiện tại" />
                        <div className="text-sm mt-0.5 text-red-500"></div>
                    </div>
                    <div className="col-span-12">
                        <label htmlFor="form__change-pass-new-pass" className="mb-1 block font-semibold">Mật khẩu mới *</label>
                        <input type="password" id="form__change-pass-new-pass" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập mật khẩu mới" />
                        <div className="text-sm mt-0.5 text-red-500"></div>
                    </div>
                    <div className="col-span-12">
                        <label htmlFor="form__change-pass-confirm" className="mb-1 block font-semibold">Xác nhận mật khẩu mới *</label>
                        <input type="password" id="form__change-pass-confirm" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Xác nhận mật khẩu mới" />
                        <div className="text-sm mt-0.5 text-red-500"></div>
                    </div>
                </div>

                <button className="mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Đổi mật khẩu</button>
            </form>
        </>
    )
}

export default UpdatePasswordPage;