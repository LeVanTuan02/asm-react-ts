import { faAngleLeft, faAngleRight, faArrowRight, faBorderAll, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewsPage = () => {
    return (
        <>
            <section className="container max-w-6xl px-3 mx-auto flex mt-8 justify-center">
                <a href="/#/news" className="text-center px-4 group cate-news-item">
                    <div className="cate-news-icon w-[75px] h-[75px] text-3xl rounded-full flex items-center justify-center bg-[#EEE8DF] transition duration-300 group-hover:bg-[#D9A953] group-hover:text-white cursor-pointer">
                        <FontAwesomeIcon icon={faBorderAll} />
                    </div>
                    <p className="cate-news-name font-semibold mt-1 group-hover:text-[#D9A953] transition duration-300">Tất cả</p>
                </a>
                <a href="/#/category-news/${cate.id}" data-id="${cate.id}" className="text-center px-4 group cate-news-item">
                    <div className="cate-news-icon w-[75px] h-[75px] text-3xl rounded-full flex items-center justify-center bg-[#EEE8DF] transition duration-300 group-hover:bg-[#D9A953] group-hover:text-white cursor-pointer">
                        <svg className="svg-inline--fa fa-newspaper fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg>
                            <path fill="currentColor" d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z" />
                        </svg>
                    </div>
                    <p className="cate-news-name font-semibold mt-1 group-hover:text-[#D9A953] transition duration-300">Tên danh mục</p>
                </a>
                <a href="/#/category-news/${cate.id}" data-id="${cate.id}" className="text-center px-4 group cate-news-item">
                    <div className="cate-news-icon w-[75px] h-[75px] text-3xl rounded-full flex items-center justify-center bg-[#EEE8DF] transition duration-300 group-hover:bg-[#D9A953] group-hover:text-white cursor-pointer">
                        <svg className="svg-inline--fa fa-newspaper fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg>
                            <path fill="currentColor" d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z" />
                        </svg>
                    </div>
                    <p className="cate-news-name font-semibold mt-1 group-hover:text-[#D9A953] transition duration-300">Tên danh mục</p>
                </a>
                <a href="/#/category-news/${cate.id}" data-id="${cate.id}" className="text-center px-4 group cate-news-item">
                    <div className="cate-news-icon w-[75px] h-[75px] text-3xl rounded-full flex items-center justify-center bg-[#EEE8DF] transition duration-300 group-hover:bg-[#D9A953] group-hover:text-white cursor-pointer">
                        <svg className="svg-inline--fa fa-newspaper fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg>
                            <path fill="currentColor" d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z" />
                        </svg>
                    </div>
                    <p className="cate-news-name font-semibold mt-1 group-hover:text-[#D9A953] transition duration-300">Tên danh mục</p>
                </a>
            </section>

            <section className="py-16 bg-[#EFE8DE] mt-6 min-h-[500px]">
                <div className="container max-w-6xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="news__list">
                    <div>
                        <a href="/#/news/${item.id}" style={{backgroundImage: 'url(https://res.cloudinary.com/levantuan/image/upload/v1645178982/assignment-js/aezrbhdx39zxc7qvgvr2.png)'}} className="block bg-cover bg-center pt-[70%] rounded-t-xl relative">
                            <button className="absolute top-2 left-2 bg-[#D9A953] rounded-full w-10 h-10 text-white text-lg">
                                <FontAwesomeIcon icon={faNewspaper} />
                            </button>
                        </a>
                        <div className="bg-white rounded-b-xl shadow px-3 py-2">
                            <p className="text-sm text-gray-500">18 Tháng 2, 2022</p>
                            <h3>
                                <a href="/#/news/${item.id}" className="limit-line-2 block py-1 font-semibold text-justify leading-tight transition duration-300 text-gray-600 hover:text-black">Title</a>
                            </h3>
                            <div className="limit-line-3 text-gray-500 text-sm text-justify">Description</div>
                            <a href="/#/news/${item.id}">
                                <button className="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="/#/news/${item.id}" style={{backgroundImage: 'url(https://res.cloudinary.com/levantuan/image/upload/v1645178982/assignment-js/aezrbhdx39zxc7qvgvr2.png)'}} className="block bg-cover bg-center pt-[70%] rounded-t-xl relative">
                            <button className="absolute top-2 left-2 bg-[#D9A953] rounded-full w-10 h-10 text-white text-lg">
                                <FontAwesomeIcon icon={faNewspaper} />
                            </button>
                        </a>
                        <div className="bg-white rounded-b-xl shadow px-3 py-2">
                            <p className="text-sm text-gray-500">18 Tháng 2, 2022</p>
                            <h3>
                                <a href="/#/news/${item.id}" className="limit-line-2 block py-1 font-semibold text-justify leading-tight transition duration-300 text-gray-600 hover:text-black">Title</a>
                            </h3>
                            <div className="limit-line-3 text-gray-500 text-sm text-justify">Description</div>
                            <a href="/#/news/${item.id}">
                                <button className="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="/#/news/${item.id}" style={{backgroundImage: 'url(https://res.cloudinary.com/levantuan/image/upload/v1645178982/assignment-js/aezrbhdx39zxc7qvgvr2.png)'}} className="block bg-cover bg-center pt-[70%] rounded-t-xl relative">
                            <button className="absolute top-2 left-2 bg-[#D9A953] rounded-full w-10 h-10 text-white text-lg">
                                <FontAwesomeIcon icon={faNewspaper} />
                            </button>
                        </a>
                        <div className="bg-white rounded-b-xl shadow px-3 py-2">
                            <p className="text-sm text-gray-500">18 Tháng 2, 2022</p>
                            <h3>
                                <a href="/#/news/${item.id}" className="limit-line-2 block py-1 font-semibold text-justify leading-tight transition duration-300 text-gray-600 hover:text-black">Title</a>
                            </h3>
                            <div className="limit-line-3 text-gray-500 text-sm text-justify">Description</div>
                            <a href="/#/news/${item.id}">
                                <button className="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div>
                        <a href="/#/news/${item.id}" style={{backgroundImage: 'url(https://res.cloudinary.com/levantuan/image/upload/v1645178982/assignment-js/aezrbhdx39zxc7qvgvr2.png)'}} className="block bg-cover bg-center pt-[70%] rounded-t-xl relative">
                            <button className="absolute top-2 left-2 bg-[#D9A953] rounded-full w-10 h-10 text-white text-lg">
                                <FontAwesomeIcon icon={faNewspaper} />
                            </button>
                        </a>
                        <div className="bg-white rounded-b-xl shadow px-3 py-2">
                            <p className="text-sm text-gray-500">18 Tháng 2, 2022</p>
                            <h3>
                                <a href="/#/news/${item.id}" className="limit-line-2 block py-1 font-semibold text-justify leading-tight transition duration-300 text-gray-600 hover:text-black">Title</a>
                            </h3>
                            <div className="limit-line-3 text-gray-500 text-sm text-justify">Description</div>
                            <a href="/#/news/${item.id}">
                                <button className="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <ul className="flex justify-center mt-10">
                    <li>
                        <a href="/#/news/page/${currentPage - 1}" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                            <button>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="/#/news/page/${i}" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white border-[#D9A953] bg-[#D9A953] text-white">1</a>
                    </li>
                    <li>
                        <a href="/#/news/page/${i}" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white border-gray-500 text-gray-500">2</a>
                    </li>
                    <li>
                        <a href="/#/news/page/${+currentPage + 1}" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                            <button>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default NewsPage;