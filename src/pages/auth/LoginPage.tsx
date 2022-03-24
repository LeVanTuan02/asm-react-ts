import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <section className="container max-w-6xl mx-auto px-3">
            <h1 className="uppercase mt-8 font-semibold text-2xl text-gray-600">Đăng nhập</h1>

            <form action="" className="mb-14" method="POST" id="form__login">
                <div className="mt-3">
                    <label htmlFor="form__login-user" className="font-semibold block mb-1">Địa chỉ email *</label>
                    <input type="text" id="form__login-user" name="form__login-user" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Nhập địa chỉ email" />
                    <div className="form__reg-message text-sm text-red-500 mt-0.5"></div>
                </div>

                <div className="mt-3">
                    <label htmlFor="form__login-password" className="font-semibold block mb-1">Mật khẩu *</label>
                    <input type="password" id="form__login-password" name="form__login-password" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-10 text-sm outline-none" placeholder="Mật khẩu" />
                    <div className="form__reg-message text-sm text-red-500 mt-0.5"></div>
                </div>

                <div className="flex mt-3 items-center">
                    <input type="checkbox" name="" id="login_remember" />
                    <label htmlFor="login_remember" className="ml-2 font-semibold select-none">Ghi nhớ mật khẩu</label>
                </div>

                <button className="select-none mt-4 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Đăng nhập</button>

                <Link to="/forgot" className="block mt-1">Quên mật khẩu?</Link>
            </form>
        </section>
    )
}

export default LoginPage;