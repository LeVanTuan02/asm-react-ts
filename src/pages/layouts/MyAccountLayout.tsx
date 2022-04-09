import { useDispatch } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { clearWishlist } from "../../redux/wishlistSlice";
import { isAuthenticate } from "../../utils/localStorage";

type PropsType = {
    onLogout: () => void
}

const MyAccountLayout = ({ onLogout }: PropsType) => {
    const dispatch = useDispatch();
    const { user } = isAuthenticate();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("auth");
        dispatch(clearWishlist());
        navigate("/login");
        onLogout();
    }
    
    return (
        <>
            <section className="py-7 bg-gray-100 border-b">
                <div className="container max-w-6xl mx-auto px-3 text-gray-500">
                    <h1 className="uppercase font-semibold text-2xl">My account</h1>
                    <p className="text-sm mt-1">THÔNG TIN TÀI KHOẢN</p>
                </div>
            </section>
            <section className="container max-w-6xl mx-auto px-3 grid grid-cols-12 gap-5 my-8">
                <aside className="hidden lg:block lg:col-span-3 border-r">
                    <header className="flex items-center">
                        <img
                            src={user.avatar}
                            className="w-20 h-20 object-cover rounded-full"
                            alt=""
                        />
                        <div className="pl-3 text-gray-400 font-semibold leading-5">
                            <span className="block text-gray-600">{user.fullName}</span>
                            <span>{user.username}</span>
                        </div>
                    </header>
                    <ul className="mt-2 grid grid-cols-1 divide-y">
                        <li className="myAcc-nav__item">
                            <NavLink to="/my-account/" className="py-2 uppercase font-semibold text-sm text-gray-400 block transition ease-linear duration-200 hover:text-gray-700 relative hover:after:opacity-100 after:transition after:opacity-0 after:content-[''] after:absolute after:right-0 after:w-[3px] after:h-full after:bg-blue-500 after:top-1/2 after:-translate-y-1/2">Thông tin tài khoản</NavLink>
                        </li>
                        <li className="myAcc-nav__item">
                            <NavLink to="/my-account/update-password" className="py-2 uppercase font-semibold text-sm text-gray-400 block transition ease-linear duration-200 hover:text-gray-700 relative hover:after:opacity-100 after:transition after:opacity-0 after:content-[''] after:absolute after:right-0 after:w-[3px] after:h-full after:bg-blue-500 after:top-1/2 after:-translate-y-1/2">Đổi mật khẩu</NavLink>
                        </li>
                        <li className="myAcc-nav__item">
                            <NavLink to="/my-account/cart" className="py-2 uppercase font-semibold text-sm text-gray-400 block transition ease-linear duration-200 hover:text-gray-700 relative hover:after:opacity-100 after:transition after:opacity-0 after:content-[''] after:absolute after:right-0 after:w-[3px] after:h-full after:bg-blue-500 after:top-1/2 after:-translate-y-1/2">Đơn hàng</NavLink>
                        </li>
                        <li className="myAcc-nav__item">
                            <NavLink to="/my-account/address" className="py-2 uppercase font-semibold text-sm text-gray-400 block transition ease-linear duration-200 hover:text-gray-700 relative hover:after:opacity-100 after:transition after:opacity-0 after:content-[''] after:absolute after:right-0 after:w-[3px] after:h-full after:bg-blue-500 after:top-1/2 after:-translate-y-1/2">Thông tin thanh toán</NavLink>
                        </li>
                        <li className="myAcc-nav__item">
                            <div
                                className="cursor-pointer py-2 uppercase font-semibold text-sm text-gray-400 block transition ease-linear duration-200 hover:text-gray-700 relative hover:after:opacity-100 after:transition after:opacity-0 after:content-[''] after:absolute after:right-0 after:w-[3px] after:h-full after:bg-blue-500 after:top-1/2 after:-translate-y-1/2"
                                onClick={() => handleLogout()}
                            >
                                Đăng xuất
                            </div>
                        </li>
                    </ul>
                </aside>
                <div className="col-span-12 lg:col-span-9">
                    <Outlet />
                </div>
            </section>
        </>
    )
}

export default MyAccountLayout;