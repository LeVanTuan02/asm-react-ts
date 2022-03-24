import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StorePage = () => {
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
                        <li data-id="${store.id}" className="store__list-item flex py-4 transition ease-linear duration-300 hover:bg-gray-50 cursor-pointer px-3 items-center">
                            <img className="w-36 h-24 object-cover" src="https://res.cloudinary.com/levantuan/image/upload/v1644632614/assignment-js/z5qrp7yxl8bav29bfstt.jpg" alt="" />
                            <div className="ml-3 leading-6 flex-1">
                                <h2 className="font-semibold text-[#D9A953] text-lg">Yotea Bắc Giang</h2>
                                <p>247 Nguyễn Thái Học, P. Trần Phú, Hà Giang</p>
                                <p>08:00 - 22:00</p>
                                <p>0347888888</p>
                            </div>
                        </li>
                        <li data-id="${store.id}" className="store__list-item flex py-4 transition ease-linear duration-300 hover:bg-gray-50 cursor-pointer px-3 items-center">
                            <img className="w-36 h-24 object-cover" src="https://res.cloudinary.com/levantuan/image/upload/v1644632614/assignment-js/z5qrp7yxl8bav29bfstt.jpg" alt="" />
                            <div className="ml-3 leading-6 flex-1">
                                <h2 className="font-semibold text-[#D9A953] text-lg">Yotea Bắc Giang</h2>
                                <p>247 Nguyễn Thái Học, P. Trần Phú, Hà Giang</p>
                                <p>08:00 - 22:00</p>
                                <p>0347888888</p>
                            </div>
                        </li>
                        <li data-id="${store.id}" className="store__list-item flex py-4 transition ease-linear duration-300 hover:bg-gray-50 cursor-pointer px-3 items-center">
                            <img className="w-36 h-24 object-cover" src="https://res.cloudinary.com/levantuan/image/upload/v1644632614/assignment-js/z5qrp7yxl8bav29bfstt.jpg" alt="" />
                            <div className="ml-3 leading-6 flex-1">
                                <h2 className="font-semibold text-[#D9A953] text-lg">Yotea Bắc Giang</h2>
                                <p>247 Nguyễn Thái Học, P. Trần Phú, Hà Giang</p>
                                <p>08:00 - 22:00</p>
                                <p>0347888888</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-span-12 md:col-span-7 min-h-[450px] store__list-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0188117154244!2d105.76751101501277!3d21.031933285996676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455b800b38dd9%3A0xf202c907e66c5743!2zVlBCQU5LIEzDiiDEkOG7qEMgVEjhu4w!5e0!3m2!1svi!2s!4v1644632586810!5m2!1svi!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" />
                </div>
            </div>
        </section>
    )
}

export default StorePage;