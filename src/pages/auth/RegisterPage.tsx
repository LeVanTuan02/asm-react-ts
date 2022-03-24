import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <section className="container max-w-6xl mx-auto px-3">
            <h1 className="uppercase mt-8 font-semibold text-2xl text-gray-600">Đăng ký</h1>

            <form action="" className="mb-14" method="POST" id="form__reg">
                <div className="mt-3">
                    <label htmlFor="form__reg-username" className="font-semibold block mb-1">Tên tài khoản *</label>
                    <input type="text" id="form__reg-username" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="VD: demo..." />
                    <div className="form__reg-message text-sm text-red-500 mt-0.5"></div>
                </div>

                <div className="mt-3">
                    <label htmlFor="form__reg-fullname" className="font-semibold block mb-1">Họ và tên *</label>
                    <input type="text" id="form__reg-fullname" name="form__reg-fullname" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="VD: Lê Văn Tuân..." />
                    <div className="form__reg-message text-sm text-red-500 mt-0.5"></div>
                </div>

                <div className="mt-3">
                    <label htmlFor="form__reg-email" className="font-semibold block mb-1">Email *</label>
                    <input type="text" id="form__reg-email" name="form__reg-email" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="VD: user@gmail.com..." />
                    <div className="form__reg-message text-sm text-red-500 mt-0.5"></div>
                </div>

                <div className="mt-3">
                    <label htmlFor="form__reg-phone" className="font-semibold block mb-1">Số điện thoại *</label>
                    <input type="text" id="form__reg-phone" name="form__reg-phone" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="VD: 0347526xxx..." />
                    <div className="form__reg-message text-sm text-red-500 mt-0.5"></div>
                </div>

                <div className="mt-3">
                    <label htmlFor="form__reg-password" className="font-semibold block mb-1">Mật khẩu *</label>
                    <input type="password" id="form__reg-password" name="form__reg-password" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Mật khẩu" />
                    <div className="form__reg-message text-sm text-red-500 mt-0.5"></div>
                </div>

                <div className="mt-3">
                    <label htmlFor="form__reg-confirm" className="font-semibold block mb-1">Xác nhận mật khẩu *</label>
                    <input type="password" id="form__reg-confirm" name="form__reg-confirm" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập lại mật khẩu" />
                    <div className="form__reg-message text-sm text-red-500 mt-0.5"></div>
                </div>

                <button className="select-none mt-8 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Đăng ký</button>

                <p className="mt-1">
                    Đã có tài khoản?
                    <Link to="/login"> Đăng nhập ngay</Link>
                </p>
            </form>
        </section>
    )
}

export default RegisterPage;