import { faAngleLeft, faAngleRight, faHeart, faStar, faTh, faThList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../../api/product";
import NavProduct from "../../components/user/NavProduct";
import { ProductType } from "../../types/product";
import { formatCurrency } from "../../utils";

const ProductPage = () => {
    const [products, setProducts] = useState<ProductType[]>();

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await getAll();
            setProducts(data);
        };
        getProducts();
    }, []);

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
                <NavProduct />

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
                            {products?.map((item, index) => (
                                <div className="group" key={index}>
                                    <div className="relative bg-[#f7f7f7] overflow-hidden">
                                        <Link to={`/san-pham/${item.slug}`}
                                            style={{backgroundImage: `url(${item.image})`}}
                                            className="bg-cover pt-[100%] bg-center block"
                                        />
                                        <button className="absolute w-full bottom-0 h-9 bg-[#D9A953] text-center text-gray-50 opacity-95 uppercase font-semibold text-sm transition ease-linear duration-300 hover:opacity-100 hover:text-white translate-y-full group-hover:translate-y-0">Xem nhanh</button>
                                        <button className="btn-heart absolute top-3 right-3 w-8 h-8 rounded-full border-2 text-[#c0c0c0] text-lg border-[#c0c0c0] transition duration-300 hover:text-white hover:bg-red-700 hover:border-red-700 opacity-0 group-hover:opacity-100">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </button>
                                    </div>
                                    <div className="text-center py-3">
                                        <p className="uppercase text-xs text-gray-400">{item.categoryId.name}</p>
                                        <Link to={`/san-pham/${item.slug}`} className="block font-semibold text-lg">{item.name}</Link>
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
                                        <div className="text-sm pt-1">{formatCurrency(item.price)}</div>
                                    </div>
                                </div>
                            ))}
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