import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeProducts = () => {
    return (
        <section className="container max-w-6xl mx-auto py-9 px-3">
            <div className="text-center">
                <h2 className="uppercase text-[#D9A953] text-2xl font-semibold">SẢN PHẨM NỔI BẬT</h2>
                <p>Chào mừng bạn đến với thiên đường vị giác của Yotea. Menu Yotea rất đa dạng món uống, đủ để đáp ứng khẩu vị “ưa chua chuộng béo” của bạn. Order và thưởng thức ngay nhé.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                <div className="group">
                    <div className="relative bg-[#f7f7f7] overflow-hidden">
                        <a href="/#/product/${item.id}" style={{backgroundImage: 'url(http://res.cloudinary.com/levantuan/image/upload/v1645174124/assignment-js/jhjaupfuamswq6v8vw9b.png)'}} className="bg-cover pt-[100%] bg-center block" />
                        <button className="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                        <button data-id="${item.id}" className="btn-heart absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                    <div className="text-center py-3">
                        <p className="uppercase text-xs text-gray-400">Milk Tea</p>
                        <a href="/#/product/${item.id}" className="block font-semibold text-lg">Trà sữa Socola</a>
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
                        <div className="text-sm pt-1"> 123 VND </div>
                    </div>
                </div>
                <div className="group">
                    <div className="relative bg-[#f7f7f7] overflow-hidden">
                        <a href="/#/product/${item.id}" style={{backgroundImage: 'url(http://res.cloudinary.com/levantuan/image/upload/v1645174124/assignment-js/jhjaupfuamswq6v8vw9b.png)'}} className="bg-cover pt-[100%] bg-center block" />
                        <button className="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                        <button data-id="${item.id}" className="btn-heart absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                    <div className="text-center py-3">
                        <p className="uppercase text-xs text-gray-400">Milk Tea</p>
                        <a href="/#/product/${item.id}" className="block font-semibold text-lg">Trà sữa Socola</a>
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
                        <div className="text-sm pt-1"> 123 VND </div>
                    </div>
                </div>
                <div className="group">
                    <div className="relative bg-[#f7f7f7] overflow-hidden">
                        <a href="/#/product/${item.id}" style={{backgroundImage: 'url(http://res.cloudinary.com/levantuan/image/upload/v1645174124/assignment-js/jhjaupfuamswq6v8vw9b.png)'}} className="bg-cover pt-[100%] bg-center block" />
                        <button className="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                        <button data-id="${item.id}" className="btn-heart absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                    <div className="text-center py-3">
                        <p className="uppercase text-xs text-gray-400">Milk Tea</p>
                        <a href="/#/product/${item.id}" className="block font-semibold text-lg">Trà sữa Socola</a>
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
                        <div className="text-sm pt-1"> 123 VND </div>
                    </div>
                </div>
                <div className="group">
                    <div className="relative bg-[#f7f7f7] overflow-hidden">
                        <a href="/#/product/${item.id}" style={{backgroundImage: 'url(http://res.cloudinary.com/levantuan/image/upload/v1645174124/assignment-js/jhjaupfuamswq6v8vw9b.png)'}} className="bg-cover pt-[100%] bg-center block" />
                        <button className="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                        <button data-id="${item.id}" className="btn-heart absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                    <div className="text-center py-3">
                        <p className="uppercase text-xs text-gray-400">Milk Tea</p>
                        <a href="/#/product/${item.id}" className="block font-semibold text-lg">Trà sữa Socola</a>
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
                        <div className="text-sm pt-1"> 123 VND </div>
                    </div>
                </div>
                <div className="group">
                    <div className="relative bg-[#f7f7f7] overflow-hidden">
                        <a href="/#/product/${item.id}" style={{backgroundImage: 'url(http://res.cloudinary.com/levantuan/image/upload/v1645174124/assignment-js/jhjaupfuamswq6v8vw9b.png)'}} className="bg-cover pt-[100%] bg-center block" />
                        <button className="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                        <button data-id="${item.id}" className="btn-heart absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                    <div className="text-center py-3">
                        <p className="uppercase text-xs text-gray-400">Milk Tea</p>
                        <a href="/#/product/${item.id}" className="block font-semibold text-lg">Trà sữa Socola</a>
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
                        <div className="text-sm pt-1"> 123 VND </div>
                    </div>
                </div>
                <div className="group">
                    <div className="relative bg-[#f7f7f7] overflow-hidden">
                        <a href="/#/product/${item.id}" style={{backgroundImage: 'url(http://res.cloudinary.com/levantuan/image/upload/v1645174124/assignment-js/jhjaupfuamswq6v8vw9b.png)'}} className="bg-cover pt-[100%] bg-center block" />
                        <button className="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                        <button data-id="${item.id}" className="btn-heart absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                    <div className="text-center py-3">
                        <p className="uppercase text-xs text-gray-400">Milk Tea</p>
                        <a href="/#/product/${item.id}" className="block font-semibold text-lg">Trà sữa Socola</a>
                        <ul className="flex text-yellow-500 text-xs justify-center pt-1">
                            <div className="text-yellow-400">
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
                        <div className="text-sm pt-1"> 123 VND </div>
                    </div>
                </div>
                <div className="group">
                    <div className="relative bg-[#f7f7f7] overflow-hidden">
                        <a href="/#/product/${item.id}" style={{backgroundImage: 'url(http://res.cloudinary.com/levantuan/image/upload/v1645174124/assignment-js/jhjaupfuamswq6v8vw9b.png)'}} className="bg-cover pt-[100%] bg-center block" />
                        <button className="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                        <button data-id="${item.id}" className="btn-heart absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                    <div className="text-center py-3">
                        <p className="uppercase text-xs text-gray-400">Milk Tea</p>
                        <a href="/#/product/${item.id}" className="block font-semibold text-lg">Trà sữa Socola</a>
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
                        <div className="text-sm pt-1"> 123 VND </div>
                    </div>
                </div>
                <div className="group">
                    <div className="relative bg-[#f7f7f7] overflow-hidden">
                        <a href="/#/product/${item.id}" style={{backgroundImage: 'url(http://res.cloudinary.com/levantuan/image/upload/v1645174124/assignment-js/jhjaupfuamswq6v8vw9b.png)'}} className="bg-cover pt-[100%] bg-center block" />
                        <button className="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                        <button data-id="${item.id}" className="btn-heart absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                    <div className="text-center py-3">
                        <p className="uppercase text-xs text-gray-400">Milk Tea</p>
                        <a href="/#/product/${item.id}" className="block font-semibold text-lg">Trà sữa Socola</a>
                        <ul className="flex text-yellow-500 text-xs justify-center pt-1">
                            <div className="text-gray-300">
                                <FontAwesomeIcon icon={faStar} />
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
                        <div className="text-sm pt-1"> 123 VND </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeProducts;