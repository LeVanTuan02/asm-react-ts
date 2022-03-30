import { faFacebookF, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars, faChevronUp, faClock, faEnvelope, faHeart, faHome, faPhoneAlt, faSearch, faShoppingCart, faSortDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { isAuthenticate } from "../../utils/localStorage";

const WebsiteLayout = () => {
    const [visible, setVisible] = useState(false);
    const [headerFixed, setHeaderFixed] = useState<boolean>(false);

    const auth = isAuthenticate();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY;
            setVisible(scrollTop > 1000 ? true : false);
            setHeaderFixed(scrollTop > 1000 ? true : false);
        });
    }, []);

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <>
            <header>
                <div className="bg-[#D9A953] hidden md:block">
                    <div className="container max-w-6xl px-3 mx-auto flex justify-between items-center h-10">
                        <ul className="flex items-center">
                            <li className="relative after:content-[''] after:absolute after:w-[1px] after:h-3.5 after:bg-gray-50 after:right-3 after:top-1/2 after:-translate-y-1/2 text-sm uppercase pr-6 text-gray-50 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                                <a href="mailto:tuanlvph14271@fpt.edu.vn">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span className="pl-1">Contact</span>
                                </a>
                            </li>
                            <li className="relative after:content-[''] after:absolute after:w-[1px] after:h-3.5 after:bg-gray-50 after:right-3 after:top-1/2 after:-translate-y-1/2 text-sm uppercase pr-6 text-gray-50 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                                <FontAwesomeIcon icon={faClock} />
                                <span className="pl-1">08:00 - 17:00</span>
                            </li>
                            <li className="text-sm uppercase text-gray-50 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                                <a href="tel:0347247244">
                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                    <span className="pl-1">0347 247 244</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="flex items-center">
                            <li className="group relative uppercase text-sm pl-6 text-gray-50 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                                <button className="rounded-full border border-gray-50 w-7 h-7">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                                <div className="hidden min-w-[280px] z-20 group-hover:block absolute top-full -right-[100px] bg-white shadow p-3 opacity-100">
                                    <form action="" className="flex" id="form-search-product">
                                        <input type="text" id="form-search-control" className="text-black shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] flex-1 border px-2 h-8 text-sm outline-none" placeholder="Nhập tên sản phẩm" />
                                        <button className="px-3 bg-red-500 transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </form>
                                    <ul className="mt-3 grid grid-cols-1 divide-y max-h-[70vh] overflow-y-auto" id="search-product-result" />
                                </div>
                            </li>

                            {auth && (
                                <li className="relative after:content-[''] after:absolute after:w-[1px] after:h-3.5 after:bg-gray-50 after:left-3 after:top-1/2 after:-translate-y-1/2 uppercase text-sm pl-6 text-gray-50 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                                    <Link to={auth.user.role ? '/admin' : '/my-account'}>Hello, {auth.user.fullName}</Link>
                                </li>
                            )}

                            {!auth && (
                                <>
                                    <li className="relative after:content-[''] after:absolute after:w-[1px] after:h-3.5 after:bg-gray-50 after:left-3 after:top-1/2 after:-translate-y-1/2 uppercase text-sm pl-6 text-gray-50 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                                        <Link to="/login">Đăng nhập</Link>
                                    </li>
                                    <li className="relative after:content-[''] after:absolute after:w-[1px] after:h-3.5 after:bg-gray-50 after:left-3 after:top-1/2 after:-translate-y-1/2 uppercase text-sm pl-6 text-gray-50 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                                        <Link to="/register">Đăng ký</Link>
                                    </li>
                                </>
                            )}
                            <li className="header-icon-heart relative after:content-[''] after:absolute after:w-[1px] after:h-3.5 after:bg-gray-50 after:left-3 after:top-1/2 after:-translate-y-1/2 uppercase text-base cursor-pointer pl-6 text-gray-50 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                                <div className="relative">
                                    <label htmlFor="" id="header-wishlist-label" className="absolute w-4 h-4 bg-green-700 text-xs text-center rounded-full -right-3 -top-1">10</label>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </li>
                            <li id="header-cart-label" className="uppercase text-base pl-4 text-gray-50 font-light opacity-80 transition ease-linear duration-200 hover:text-white hover:opacity-100">
                                <Link to="/cart" className="relative">
                                    <label htmlFor="" className="absolute w-4 h-4 bg-green-700 text-xs text-center rounded-full -right-3 -top-1">10</label>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`md:h-24 h-[70px] bg-white ${headerFixed && "active"}`} id="header-bottom">
                    <div className="container max-w-6xl mx-auto px-3 h-full">
                        <div className="border-b flex items-center h-full">
                            <div className="flex-1 md:hidden">
                                <button className="btn-toggle-nav cursor-pointer pr-3 py-3 text-lg transition duration-200 ease-linear text-gray-400 hover:text-black">
                                    <FontAwesomeIcon icon={faBars} />
                                </button>
                            </div>
                            <ul className="flex-1 items-center hidden md:flex">
                                <li className="pr-4 font-semibold text-gray-500 transition ease-linear duration-200 hover:text-black">
                                    <Link to="/">Trang chủ</Link>
                                </li>
                                <li className="pr-4 font-semibold text-gray-500 transition ease-linear duration-200 hover:text-black">
                                    <Link to="/gioi-thieu">Giới thiệu</Link>
                                </li>
                                <li className="relative pr-4 font-semibold text-gray-500 transition ease-linear duration-200 hover:text-black group">
                                    <Link to="/thuc-don" className="flex items-center">
                                        Sản phẩm
                                        <div className="pl-1 -mt-1">
                                            <FontAwesomeIcon icon={faSortDown} />
                                        </div>
                                    </Link>
                                    <ul className="z-20 invisible group-hover:visible absolute top-full left-0 bg-white shadow min-w-[150px] grid grid-cols-1 divide-y px-2 rounded-sm">
                                        <li>
                                            <Link to="" className="block py-1.5 text-gray-500 transition ease-linear duration-200 hover:text-[#D9A953]">Trà sữa</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="h-full">
                                <Link to="/" className="block h-full py-2">
                                    <img className="block h-full" src="https://res.cloudinary.com/levantuan/image/upload/v1642588847/fpoly/asm-js/logo_oeo8uq.png" alt="" />
                                </Link>
                            </div>
                            <ul className="flex-1 justify-end hidden md:flex">
                                <li className="pl-4 font-semibold text-gray-500 transition ease-linear duration-200 hover:text-black">
                                    <Link to="/tin-tuc">Tin tức</Link>
                                </li>
                                <li className="pl-4 font-semibold text-gray-500 transition ease-linear duration-200 hover:text-black">
                                    <Link to="/lien-he">Liên hệ</Link>
                                </li>
                                <li className="pl-4 font-semibold text-gray-500 transition ease-linear duration-200 hover:text-black">
                                    <Link to="/cua-hang">Cửa hàng</Link>
                                </li>
                            </ul>
                            <ul className="flex flex-1 justify-end md:hidden">
                                <li className="uppercase text-base cursor-pointer pl-6 text-gray-600 font-light opacity-80 transition ease-linear duration-200 hover:text-black hover:opacity-100">
                                    <div className="relative">
                                        <label className="text-white absolute w-4 h-4 bg-green-700 text-xs text-center rounded-full -right-3 -top-1">10</label>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                </li>
                                <li className="uppercase text-base pl-4 text-gray-600 font-light opacity-80 transition ease-linear duration-200 hover:text-black hover:opacity-100">
                                    <Link to="/gio-hang" className="relative">
                                        <label className="text-white absolute w-4 h-4 bg-green-700 text-xs text-center rounded-full -right-3 -top-1">10</label>
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="nav__mobile invisible transition-all duration-500 ease-linear fixed top-0 right-0 bottom-0 left-0 z-20">
                    <div className="nav__mobile-overlay invisible transition-all duration-400 ease-linear relative w-screen h-screen bg-[rgba(0,0,0,0.6)]" />
                    <nav className="nav__mobile-content -translate-x-full transition duration-500 ease absolute top-0 left-0 bottom-0 min-w-[260px] bg-[rgba(255,255,255,0.95)] shadow py-10">
                        <form action="" className="flex px-3" id="nav__mobile-search">
                            <input type="text" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] min-w-[80px] border px-2 h-8 text-sm outline-none" placeholder="Nhập tên sản phẩm tìm kiếm" />
                            <button className="px-3 text-white bg-red-500 transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </form>
                        <ul className="grid grid-cols-1 divide-y mt-5">
                            <li>
                                <Link to="/" className="px-3 py-3.5 transition ease-linear duration-200 hover:bg-gray-200 text-sm font-semibold text-gray-500 hover:text-black uppercase block">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="/gioi-thieu" className="px-3 py-3.5 transition ease-linear duration-200 hover:bg-gray-200 text-sm font-semibold text-gray-500 hover:text-black uppercase block">Giới thiệu</Link>
                            </li>
                            <li>
                                <Link to="/thuc-don" className="px-3 py-3.5 transition ease-linear duration-200 hover:bg-gray-200 text-sm font-semibold text-gray-500 hover:text-black uppercase block">Sản phẩm</Link>
                            </li>
                            <li>
                                <Link to="/tin-tuc" className="px-3 py-3.5 transition ease-linear duration-200 hover:bg-gray-200 text-sm font-semibold text-gray-500 hover:text-black uppercase block">Tin tức</Link>
                            </li>
                            <li>
                                <Link to="/lien-he" className="px-3 py-3.5 transition ease-linear duration-200 hover:bg-gray-200 text-sm font-semibold text-gray-500 hover:text-black uppercase block">Liên hệ</Link>
                            </li>
                            <li>
                                <Link to="/cua-hang" className="px-3 py-3.5 transition ease-linear duration-200 hover:bg-gray-200 text-sm font-semibold text-gray-500 hover:text-black uppercase block">Cửa hàng</Link>
                            </li>
                        </ul>
                    </nav>
                    <button className="nav__mobile-close fixed top-3 right-3 text-3xl text-gray-300 transition duration-200 ease-linear hover:text-white">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </section>
                <section id="wishlist" className="wishlist" />
            </header>

            <main>
                <Outlet />
            </main>

            <footer style={{backgroundImage: 'url(https://res.cloudinary.com/levantuan/image/upload/v1642602939/fpoly/asm-js/bg_footer_r0omu5.jpg)'}} className="bg-cover bg-center bg-no-repeat py-14">
                <div className="container max-w-6xl mx-auto px-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                            <h3 className="text-white text-xl uppercase font-semibold mb-3">KẾT NỐI VỚI CHÚNG TÔI</h3>
                            <p className="text-gray-300 text-justify"> Chúng tôi mong muốn tạo nên hương vị thức uống tuyệt vời nhất. Là điểm đến đầu tiên dành cho bạn khi muốn thưởng thức trọn vẹn của tách Coffee </p>
                            <ul className="flex text-white">
                                <li className="mr-3 mt-3">
                                    <Link to="https://www.facebook.com/LeVanTuan.Info/" target="_blank">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </Link>
                                </li>
                                <li className="mr-3 mt-3">
                                    <Link to="https://www.youtube.com/c/L%C3%AAV%C4%83nTu%C3%A2n02/" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </Link>
                                </li>
                                <li className="mr-3 mt-3">
                                    <Link to="https://www.instagram.com/_tuan02/" target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </Link>
                                </li>
                                <li className="mr-3 mt-3">
                                    <Link to="https://www.tiktok.com/@tuandemo" target="_blank">
                                        <FontAwesomeIcon icon={faTiktok} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white text-xl uppercase font-semibold mb-3">Liên hệ</h3>
                            <ul className="text-white leading-relaxed">
                                <li className="flex">
                                    <div className="min-w-[25px]">
                                        <FontAwesomeIcon icon={faHome} />
                                    </div> Lạng Giang, Bắc Giang
                                </li>
                                <li className="flex">
                                    <div className="min-w-[25px]">
                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                    </div> Hotline: <Link to="tel:0347247244">&nbsp; 0347247244</Link>
                                </li>
                                <li className="flex">
                                    <div className="min-w-[25px]">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div> Email: <Link to="mailto:tuanlvph14271@fpt.edu.vn">&nbsp; tuanlvph14271@fpt.edu.vn</Link>
                                </li>
                                <li className="flex">
                                    <div className="min-w-[25px]">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </div> Facebook: <Link to="https://www.facebook.com/LeVanTuan.Info/" target="_blank">&nbsp; Lê Văn Tuân</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="overflow-hidden">
                            <h3 className="text-white text-xl uppercase font-semibold mb-3">Kết nối với chúng tôi</h3>

                            <div className="fb-page" data-href="https://www.facebook.com/fpt.poly" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                                <blockquote cite="https://www.facebook.com/fpt.poly" className="fb-xfbml-parse-ignore">
                                    <Link to="https://www.facebook.com/fpt.poly">Cao đẳng FPT Polytechnic</Link>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-gray-300 mt-9"> Copyright 2022 © <strong> Bản quyền thuộc về <Link to="https://www.facebook.com/LeVanTuan.Info/" target="_blank">TuanDemo</Link>
                        </strong>
                    </div>
                </div>

                <button
                    onClick={handleScrollTop}
                    className={`${visible && "active" } btn__scroll-top invisible w-9 h-9 rounded-full border-2 border-gray-400 text-gray-400 fixed right-5 bottom-3 transition-all ease-linear duration-400 hover:text-white hover:bg-[#D9A953] hover:border-[#D9A953]`}
                >
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
            </footer>
        </>
    )
}

export default WebsiteLayout;