import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getAll } from "../../api/store";
import Iframe from "../../components/user/Iframe";
import { StoreType } from "../../types/store";

const StorePage = () => {
    const [stores, setStores] = useState<StoreType[]>();
    const [googleMap, setGoogleMap] = useState<string>();

    useEffect(() => {
        const getStores = async () => {
            const { data } = await getAll();
            setGoogleMap(data[0].map);
            setStores(data);
        };
        getStores();
    }, []);

    return (
        <section className="container max-w-6xl mx-auto px-3 mb-8">
            <h1 className="text-2xl font-semibold text-center text-[#D9A953] my-5 uppercase">Cửa hàng Yotea</h1>
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-5">
                    <p>Vui lòng chọn khu vực bạn muốn tìm kiếm, chúng tôi sẽ hiển thị danh sách các cửa hàng phù hợp nhất</p>
                    <form action="" className="flex mt-3" id="form-search-store">
                        <input type="text" placeholder="Nhập tên chi nhánh" id="store__form-search-control" className="h-12 rounded-l-full px-5 border flex-1 outline-none" />
                        <button type="button" className="bg-[#D9A953] px-5 text-white font-extrabold text-2xl rounded-r-full">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </form>
                    <ul className="mt-3 border-r h-[400px] overflow-y-scroll" id="store__list">
                        {stores?.map((item, index) => (
                            <li key={index} className="store__list-item flex py-4 transition ease-linear duration-300 hover:bg-gray-50 cursor-pointer px-3 items-center">
                                <img
                                    className="w-36 h-24 object-cover"
                                    src={item.image}
                                    alt={item.name}
                                />
                                <div className="ml-3 leading-6 flex-1">
                                    <h2 className="font-semibold text-[#D9A953] text-lg">{item.name}</h2>
                                    <p>{item.address}</p>
                                    <p>{item.timeStart} - {item.timeEnd}</p>
                                    <p>{item.phone}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-12 md:col-span-7 min-h-[450px] store__list-map">
                    <Iframe iframe={googleMap || ""} />
                </div>
            </div>
        </section>
    )
}

export default StorePage;