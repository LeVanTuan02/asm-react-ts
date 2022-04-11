import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from "react-chartjs-2";
import { useGetNewsQuery } from "../../api/news";
import { useGetProductsQuery } from "../../api/product";
import { useGetUsersQuery } from "../../api/user";
import { useGetCatesProductQuery } from "../../api/category";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
    const { data: users } = useGetUsersQuery("");
    const { data: news } = useGetNewsQuery("");
    const { data: products } = useGetProductsQuery({});
    const { data: categories } = useGetCatesProductQuery("");
    const [userAnalytics, setUserAnalytics] = useState<{locked?: number, active?: number}>({});

    useEffect(() => {
        const getDataUser = () => {
            setUserAnalytics({
                locked: users?.reduce((total, item) => !item.active ? ++total : total, 0),
                active: users?.reduce((total, item) => item.active ? ++total : total, 0)
            })
        };
        getDataUser();
    }, [users]);

    const dataProduct = {
        labels: categories?.map(cate => cate.name),
        datasets: [
          {
            label: '# of Votes',
            data: categories?.map(cate => cate.products.length),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };

    const dataUser = {
        labels: ["Locked", "Active"],
        datasets: [
          {
            label: '# of Votes',
            data: [userAnalytics.locked, userAnalytics.active],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };

    return (
        <>
            <header className="fixed top-14 left-0 md:left-60 right-0 px-4 py-1.5 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                    <h5>Dashboard</h5>
                </div>
                <button type="button" className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Dashboard </button>
            </header>
            <div className="p-6 mt-24 overflow-hidden">
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="flex bg-white">
                        <div className="bg-red-500 flex items-center px-3 text-white rounded-l-md">BV</div>
                        <div className="rounded-r-md flex shadow-sm items-center flex-1 justify-between px-3 py-2 leading-snug border-y border-r">
                            <div>
                                <span className="block font-semibold">Bài viết</span>
                                <span className="block text-gray-500">{news?.length} Posts</span>
                            </div>
                            <div className="text-gray-500">
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-white">
                        <div className="bg-indigo-500 flex items-center px-3 text-white rounded-l-md">TK</div>
                        <div className="rounded-r-md flex shadow-sm items-center flex-1 justify-between px-3 py-2 leading-snug border-y border-r">
                            <div>
                                <span className="block font-semibold">Tài khoản</span>
                                <span className="block text-gray-500">{users?.length} Members</span>
                            </div>
                            <div className="text-gray-500">
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-white">
                        <div className="bg-yellow-500 flex items-center px-3 text-white rounded-l-md">SP</div>
                        <div className="rounded-r-md flex shadow-sm items-center flex-1 justify-between px-3 py-2 leading-snug border-y border-r">
                            <div>
                                <span className="block font-semibold">Sản phẩm</span>
                                <span className="block text-gray-500">{products?.length} Sản phẩm</span>
                            </div>
                            <div className="text-gray-500">
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-white">
                        <div className="bg-green-500 flex items-center px-3 text-white rounded-l-md">DT</div>
                        <div className="rounded-r-md flex shadow-sm items-center flex-1 justify-between px-3 py-2 leading-snug border-y border-r">
                            <div>
                                <span className="block font-semibold">Doanh thu</span>
                                <span className="block text-gray-500">100.000.000 VND</span>
                            </div>
                            <div className="text-gray-500">
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex justify-evenly flex-wrap bg-white mt-5 rounded-md p-5">
                    <div className="w-full md:w-[32%]">
                        <p className="font-semibold text-xl mb-2">Sản phẩm theo danh mục</p>
                        <Pie data={dataProduct} />
                    </div>

                    <div className="w-full md:w-[32%]">
                        <p className="font-semibold text-xl mb-2">Thống kê User</p>
                        <Doughnut data={dataUser} />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Dashboard;