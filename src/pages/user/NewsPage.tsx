import { faAngleLeft, faAngleRight, faArrowRight, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../../api/news";
import NavNews from "../../components/user/NavNews";
import { NewsType } from "../../types/news";
import { formatDateNews } from "../../utils";

const NewsPage = () => {
    const [news, setNews] = useState<NewsType[]>();

    useEffect(() => {
        const getNews = async () => {
            const { data } = await getAll();
            setNews(data);
        };
        getNews();
    }, []);

    return (
        <>
            <NavNews />

            <section className="py-16 bg-[#EFE8DE] mt-6 min-h-[500px]">
                <div className="container max-w-6xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="news__list">
                    {news?.map((item, index) => (
                        <div key={index}>
                            <Link
                                to={`/bai-viet/${item.slug}`}
                                style={{backgroundImage: `url(${item.thumbnail})`}}
                                className="block bg-cover bg-center pt-[70%] rounded-t-xl relative"
                            >
                                <button className="absolute top-2 left-2 bg-[#D9A953] rounded-full w-10 h-10 text-white text-lg">
                                    <FontAwesomeIcon icon={faNewspaper} />
                                </button>
                            </Link>
                            <div className="bg-white rounded-b-xl shadow px-3 py-2">
                                <p className="text-sm text-gray-500">{formatDateNews(item.createdAt)}</p>
                                <h3>
                                    <Link to={`/bai-viet/${item.slug}`} className="limit-line-2 block py-1 font-semibold text-justify leading-tight transition duration-300 text-gray-600 hover:text-black">{item.title}</Link>
                                </h3>
                                <div className="limit-line-3 text-gray-500 text-sm text-justify">{item.description}</div>
                                <Link to={`/bai-viet/${item.slug}`}>
                                    <button className="block mx-auto w-9 h-9 rounded-full border-2 border-[#D9A953] text-[#D9A953] transition duration-300 hover:bg-[#D9A953] hover:text-white mt-5 mb-2">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
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