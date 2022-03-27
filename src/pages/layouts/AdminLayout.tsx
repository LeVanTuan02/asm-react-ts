import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import { faCode, faComment, faNewspaper, faSearch, faShoppingCart, faSlidersH, faStore, faThList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { isAuthenticate } from "../../utils/localStorage";

const AdminLayout = () => {
    const { user } = isAuthenticate();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("auth");
        navigate("/login");
    }

    return (
        <>
            <section className="min-h-[calc(100vh-98px)] bg-gray-50 dashboard">
                <nav className="dashboard__sidebar fixed top-0 left-0 z-20 h-full pb-10 overflow-x-hidden overflow-y-auto transition origin-left transform bg-gray-900 w-60 md:translate-x-0 -translate-x-full">
                    <Link to="/" className="flex items-center p-4 text-white font-bold text-3xl">Yotea</Link>
                    <nav className="text-sm font-medium text-gray-500" aria-label="Main Navigation">
                        <Link to="/admin" className="text-gray-200 bg-gray-800 flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                            <svg className="shrink-0 w-5 h-5 mr-2 text-gray-400 transition group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                <path d="M10.707 2.293a1 1 0 00-1.414.0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            <span>Dashboard</span>
                        </Link>
                        <Link to="/admin/cart" className="flex items-center px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                            <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </div>
                            <span>Cart</span>
                        </Link>
                        <div>
                            <div className="sidebar__item flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                                <div className="flex items-center">
                                    <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                        <FontAwesomeIcon icon={faNewspaper} />
                                    </div>
                                    <Link to="/admin/user">Users</Link>
                                </div>
                                <svg className="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                                <svg className="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="mb-4 hidden sidebar__submenu">
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/news">Danh sách</Link>
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/news/add">Thêm mới</Link>
                            </div>
                        </div>
                        <div>
                            <div className="sidebar__item flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                                <div className="flex items-center">
                                    <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                        <FontAwesomeIcon icon={faNewspaper} />
                                    </div>
                                    <Link to="/admin/news">News</Link>
                                </div>
                                <svg className="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                                <svg className="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="mb-4 hidden sidebar__submenu">
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/news">Danh sách</Link>
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/news/add">Thêm mới</Link>
                            </div>
                        </div>
                        <div>
                            <div className="sidebar__item flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                                <div className="flex items-center">
                                    <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                        <FontAwesomeIcon icon={faThList} />
                                    </div>
                                    <Link to="/admin/category-news">Categories News</Link>
                                </div>
                                <svg className="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                                <svg className="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="mb-4 hidden sidebar__submenu">
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/category-news">Danh sách</Link>
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/category-news/add">Thêm mới</Link>
                            </div>
                        </div>
                        <div>
                            <div className="sidebar__item flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                                <div className="flex items-center">
                                    <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                        <FontAwesomeIcon icon={faProductHunt} />
                                    </div>
                                    <Link to="/admin/product">Products</Link>
                                </div>
                                <svg className="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                                <svg className="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="mb-4 hidden sidebar__submenu">
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/product">Danh sách</Link>
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/product/add">Thêm mới</Link>
                            </div>
                        </div>
                        <div>
                            <div className="sidebar__item flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                                <div className="flex items-center">
                                    <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                        <FontAwesomeIcon icon={faThList} />
                                    </div>
                                    <Link to="/admin/comment">Comment</Link>
                                </div>
                                <svg className="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                                <svg className="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="mb-4 hidden sidebar__submenu">
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/comment">Danh sách</Link>
                            </div>
                        </div>
                        <div>
                            <div className="sidebar__item flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                                <div className="flex items-center">
                                    <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                        <FontAwesomeIcon icon={faThList} />
                                    </div>
                                    <Link to="/admin/category">Categories Products</Link>
                                </div>
                                <svg className="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                                <svg className="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="mb-4 hidden sidebar__submenu">
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/category">Danh sách</Link>
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/category/add">Thêm mới</Link>
                            </div>
                        </div>
                        <div>
                            <div className="sidebar__item flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                                <div className="flex items-center">
                                    <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                        <FontAwesomeIcon icon={faSlidersH} />
                                    </div>
                                    <Link to="/admin/slider">Slider</Link>
                                </div>
                                <svg className="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                                <svg className="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="mb-4 hidden sidebar__submenu">
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/slider">Danh sách</Link>
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/slider/add">Thêm mới</Link>
                            </div>
                        </div>
                        <div>
                            <div className="sidebar__item flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                                <div className="flex items-center">
                                    <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                        <FontAwesomeIcon icon={faThList} />
                                    </div>
                                    <Link to="/admin/size">Size</Link>
                                </div>
                                <svg className="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                                <svg className="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="mb-4 hidden sidebar__submenu">
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/size">Danh sách</Link>
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/size/add">Thêm mới</Link>
                            </div>
                        </div>
                        <div>
                            <div className="sidebar__item flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                                <div className="flex items-center">
                                    <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                        <FontAwesomeIcon icon={faThList} />
                                    </div>
                                    <Link to="/admin/topping">Toppings</Link>
                                </div>
                                <svg className="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                                <svg className="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="mb-4 hidden sidebar__submenu">
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/topping">Danh sách</Link>
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/topping/add">Thêm mới</Link>
                            </div>
                        </div>
                        <div>
                            <div className="sidebar__item flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                                <div className="flex items-center">
                                    <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                        <FontAwesomeIcon icon={faCode} />
                                    </div>
                                    <Link to="/admin/voucher">Voucher</Link>
                                </div>
                                <svg className="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                                <svg className="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="mb-4 hidden sidebar__submenu">
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/voucher">Danh sách</Link>
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/voucher/add">Thêm mới</Link>
                            </div>
                        </div>
                        <div>
                            <div className="sidebar__item flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                                <div className="flex items-center">
                                    <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                        <FontAwesomeIcon icon={faStore} />
                                    </div>
                                    <Link to="/admin/store">Store</Link>
                                </div>
                                <svg className="sidebar__item-icon--right shrink-0 w-4 h-4 ml-2 transition transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                                <svg className="sidebar__item-icon--down hidden shrink-0 w-4 h-4 ml-2 transition transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentcolor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414.0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="mb-4 hidden sidebar__submenu">
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/store">Danh sách</Link>
                                <Link className="flex items-center py-2 pl-12 pr-4 transition cursor-pointer hover:bg-gray-800 hover:text-gray-200" to="/admin/store/add">Thêm mới</Link>
                            </div>
                        </div>
                        <div>
                            <div className="sidebar__item flex items-center justify-between px-4 py-3 transition cursor-pointer group hover:bg-gray-800 hover:text-gray-200">
                                <div className="flex items-center">
                                    <div className="shrink-0 w-5 h-5 mr-2 text-gray-300 transition group-hover:text-gray-300">
                                        <FontAwesomeIcon icon={faComment} />
                                    </div>
                                    <Link to="/admin/contact">Contact</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </nav>
                <div className="ml-0 transition md:ml-60">
                    <header className="z-20 left-0 md:left-60 fixed right-0 top-0 bg-white border-b h-14 px-4 flex justify-between items-center">
                        <button id="btn-bars" className="md:hidden px-3 py-1 bg-gray-50 rounded-md text-gray-500 hover:bg-gray-200 hover:text-gray-600 transition ease-linear duration-200">
                            <i className="fas fa-bars" />
                        </button>
                        <form className="hidden md:flex items-center border-2 border-indigo-500 rounded-full px-2.5">
                            <div className="text-gray-400">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <input type="text" placeholder="Search" className="px-2 py-1 outline-none rounded-full" />
                        </form>
                        <div className="ml-4 flex items-center md:ml-6">
                            <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">View notifications</span>
                                <svg className="h-5 w-5" x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>
                            <div className="ml-3 relative group">
                                <div>
                                    <button type="button" className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-haspopup="true" >
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full object-cover"
                                            src={user.avatar}
                                            alt=""
                                        />
                                    </button>
                                </div>
                                <div className="hidden group-hover:block absolute right-0 top-[calc(100%+10px)] w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none before:content-[''] before:absolute before:top-[-10px] before:right-0 before:left-0 before:h-4">
                                    <Link to="/admin/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                                    <button onClick={handleLogout} className="cursor-pointer w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Đăng xuất</button>
                                </div>
                            </div>
                        </div>
                    </header>

                    <main>
                        <Outlet />
                    </main>
                </div>
                <div className="fixed inset-0 z-10 w-screen h-screen bg-black bg-opacity-25 hidden dashboard__overlay" />
            </section>
        </>
    )
}

export default AdminLayout;