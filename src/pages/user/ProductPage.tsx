import { faAngleLeft, faAngleRight, faHeart, faStar, faTh, faThList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProductPage = () => {
    return (
        <>
            <section className="container max-w-6xl mx-auto px-3 pt-8 mb-5 text-center">
                <div className="flex justify-center">
                    <a href="/#/" className="transition duration-300 ease-linear hover:text-[#D9A953] block pr-6 font-semibold relative after:content-[''] after:absolute after:right-3 after:bg-gray-500 after:w-[1px] after:h-4 after:rotate-12 after:top-1/2 after:-translate-y-1/2">Trang chủ</a>
                    <a href="/#/products" className="transition duration-300 ease-linear hover:text-[#D9A953] font-semibold">Sản phẩm</a>
                </div>
                <h1 className="text-[#D9A953] font-semibold text-3xl mt-1">Danh sách</h1>
            </section>

            <section className="container max-w-6xl mx-auto px-3 grid grid-cols-12 gap-6 mb-8">
                <aside className="hidden lg:block lg:col-span-3 pt-3">
                    <div>
                        <h2 className="uppercase font-bold pb-2 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">Danh mục sản phẩm</h2>
                        <ul className="grid grid-cols-1 divide-y mt-3">
                            <li>
                                <a href="" className="text-[#D9A953] block uppercase py-2 transition duration-300 ease-linear hover:text-black">Trà sữa</a>
                            </li>
                            <li>
                                <a href="" className="text-[#D9A953] block uppercase py-2 transition duration-300 ease-linear hover:text-black">Trà sữa</a>
                            </li>
                            <li>
                                <a href="" className="text-[#D9A953] block uppercase py-2 transition duration-300 ease-linear hover:text-black">Trà sữa</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-3">
                        <h2 className="uppercase font-bold pb-2 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">Lọc theo giá</h2>
                    </div>
                    <div className="mt-5">
                        <h2 className="uppercase font-bold pb-2 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">Sản phẩm yêu thích</h2>
                        <ul className="grid grid-cols-1 divide-y mt-2">
                            <li className="py-3 flex">
                                <a href="" className="block bg-[#f7f7f7]">
                                    <img className="w-16 h-16 object-cover block" src="https://res.cloudinary.com/levantuan/image/upload/v1645173898/assignment-js/zszteiclgqgnvcwtcgr7.png" alt="" />
                                </a>
                                <div className="ml-3 flex-1">
                                    <a href="" className="uppercase transition duration-300 ease-linear hover:text-black block text-[#D9A953] text-sm">Trà sữa trân châu đường đen</a>
                                    <span className="font-semibold">25.000 VND</span>
                                </div>
                            </li>
                            <li className="py-3 flex">
                                <a href="" className="block bg-[#f7f7f7]">
                                    <img className="w-16 h-16 object-cover block" src="https://res.cloudinary.com/levantuan/image/upload/v1645173898/assignment-js/zszteiclgqgnvcwtcgr7.png" alt="" />
                                </a>
                                <div className="ml-3 flex-1">
                                    <a href="" className="uppercase transition duration-300 ease-linear hover:text-black block text-[#D9A953] text-sm">Trà sữa trân châu đường đen</a>
                                    <span className="font-semibold">25.000 VND</span>
                                </div>
                            </li>
                            <li className="py-3 flex">
                                <a href="" className="block bg-[#f7f7f7]">
                                    <img className="w-16 h-16 object-cover block" src="https://res.cloudinary.com/levantuan/image/upload/v1645173898/assignment-js/zszteiclgqgnvcwtcgr7.png" alt="" />
                                </a>
                                <div className="ml-3 flex-1">
                                    <a href="" className="uppercase transition duration-300 ease-linear hover:text-black block text-[#D9A953] text-sm">Trà sữa trân châu đường đen</a>
                                    <span className="font-semibold">25.000 VND</span>
                                </div>
                            </li>
                            <li className="py-3 flex">
                                <a href="" className="block bg-[#f7f7f7]">
                                    <img className="w-16 h-16 object-cover block" src="https://res.cloudinary.com/levantuan/image/upload/v1645173898/assignment-js/zszteiclgqgnvcwtcgr7.png" alt="" />
                                </a>
                                <div className="ml-3 flex-1">
                                    <a href="" className="uppercase transition duration-300 ease-linear hover:text-black block text-[#D9A953] text-sm">Trà sữa trân châu đường đen</a>
                                    <span className="font-semibold">25.000 VND</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className="col-span-12 lg:col-span-9">
                    <div className="border-b pb-2 flex justify-between items-center">
                        <div className="flex items-center">
                            <ul className="flex">
                                <li data-view="grid" className="filter__btn-view active text-xl cursor-pointer mr-2 text-gray-600 transition ease-linear duration-150 hover:text-[#D9A953]">
                                    <FontAwesomeIcon icon={faTh} />
                                </li>
                                <li data-view="list" className="filter__btn-view text-xl cursor-pointer mr-2 text-gray-600 transition ease-linear duration-150 hover:text-[#D9A953]">
                                    <FontAwesomeIcon icon={faThList} />
                                </li>
                            </ul>
                            <span>Hiển thị 1 - 9 trong 32 kết quả</span>
                        </div>
                        <form action="" className="flex items-center">
                            <label htmlFor="filter-sort">Sắp xếp theo</label>
                            <select id="filter-sort" className="ml-2 flex-1 shadow-[inset_0_-1.4em_1em_0_rgba(0,0,0,0.02)] hover:shadow-none hover:cursor-default focus:shadow-[0_0_5px_#ccc] w-full border px-2 h-9 text-sm outline-none">
                                <option value="">Mặc định</option>
                                <option value="createdAt-desc">Thứ tự theo ngày tạo: mới nhất</option>
                                <option value="createdAt-asc">Thứ tự theo ngày tạo: cũ nhất</option>
                                <option value="favorites-asc">Lượt yêu thích: thấp -&gt; cao</option>
                                <option value="favorites-desc">Lượt yêu thích: cao -&gt; thấp</option>
                                <option value="view-asc">Lượt xem: thấp -&gt; cao</option>
                                <option value="view-desc">Lượt xem: cao -&gt; thấp</option>
                                <option value="price-asc">Thứ tự theo giá: thấp -&gt; cao</option>
                                <option value="price-desc">Thứ tự theo giá: cao -&gt; thấp</option>
                            </select>
                        </form>
                    </div>
                    <div id="product-list">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                            <div className="group product-item" data-id="${item.id}">
                                <div className="relative bg-[#f7f7f7] overflow-hidden">
                                    <Link to="/san-pham/ten-san-pham" style={{backgroundImage: 'url(https://res.cloudinary.com/levantuan/image/upload/v1645173898/assignment-js/zszteiclgqgnvcwtcgr7.png)'}} className="bg-cover pt-[100%] bg-center block" />
                                    <button className="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                    <button data-id="${item.id}" className="btn-heart absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                </div>
                                <div className="text-center py-3">
                                    <p className="uppercase text-xs text-gray-400">Milk Tea</p>
                                    <Link to="/san-pham/ten-san-pham" className="block font-semibold text-lg">Trà sữa dâu nữ hoàng</Link>
                                    <ul className="flex text-yellow-500 text-xs justify-center pt-1">
                                        <div className="text-gray-300">
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className="text-gray-300">
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className="text-gray-300">
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className="text-gray-300">
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className="text-gray-300">
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </ul>
                                    <div className="text-sm pt-1"> 25.000 VND </div>
                                </div>
                            </div>
                            <div className="group product-item" data-id="${item.id}">
                                <div className="relative bg-[#f7f7f7] overflow-hidden">
                                    <Link to="/san-pham/ten-san-pham" style={{backgroundImage: 'url(https://res.cloudinary.com/levantuan/image/upload/v1645173898/assignment-js/zszteiclgqgnvcwtcgr7.png)'}} className="bg-cover pt-[100%] bg-center block" />
                                    <button className="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                    <button data-id="${item.id}" className="btn-heart absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                </div>
                                <div className="text-center py-3">
                                    <p className="uppercase text-xs text-gray-400">Milk Tea</p>
                                    <Link to="/san-pham/ten-san-pham" className="block font-semibold text-lg">Trà sữa dâu nữ hoàng</Link>
                                    <ul className="flex text-yellow-500 text-xs justify-center pt-1">
                                        <div className="text-gray-300">
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className="text-gray-300">
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className="text-gray-300">
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className="text-gray-300">
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                        <div className="text-gray-300">
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </ul>
                                    <div className="text-sm pt-1"> 25.000 VND </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="flex justify-center mt-5">
                        <li>
                            <a href="" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                                <button>
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white border-[#d9a953] bg-[#d9a953] text-white">1</a>
                        </li>
                        <li>
                            <a href="" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white border-gray-500 text-gray-500">2</a>
                        </li>
                        <li>
                            <a href="" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                                <button>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default ProductPage;