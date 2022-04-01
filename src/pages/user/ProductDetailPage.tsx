import { faFacebookF, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faAngleRight, faExpandArrowsAlt, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toastr from "toastr";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { get } from "../../api/product";
import { get as getSize } from "../../api/size";
import { get as getTopping } from "../../api/topping";
import { ProductType } from "../../types/product";
import { formatCurrency } from "../../utils";
import { ToppingType } from "../../types/topping";
import { SizeType } from "../../types/size";
import { getAll } from "../../api/topping";
import { getAll as getAllSize } from "../../api/size";
import ProductRelated from "../../components/user/ProductRelated";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { addToCart } from "../../utils/localStorage";

type InputsType = {
    ice: number,
    sugar: number,
    size: string,
    topping: string,
}

const ProductDetailPage = () => {
    const [product, setProduct] = useState<ProductType>();
    const [quantity, setQuantity] = useState<number>(1);
    const [toppings, setToppings] = useState<ToppingType[]>();
    const [sizes, setSizes] = useState<SizeType[]>();
    const [showBtnClear, setShowBtnClear] = useState<boolean>(false);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const {
        register,
        handleSubmit,
        reset
    } = useForm<InputsType>();

    const onSubmit: SubmitHandler<InputsType> = async ({ ice, sugar, size, topping }) => {
        // get data product
        const { data: product } = await get(slug);
        const productData = {
            productSlug: product.slug,
            productId: product._id,
            productName: product.name,
            productPrice: product.price,
            productImage: product.image,
        };

        // get thông tin size
        const { data: sizeInfo } = await getSize(size);
        const sizeData = {
            sizeId: size,
            sizeName: sizeInfo.name,
            sizePrice: sizeInfo.priceIncrease,
        }

        // get topping
        const toppingData = {
            toppingId: topping,
            toppingName: "Không chọn Topping",
            toppingPrice: 0
        };

        if (topping) {
            const { data: toppingInfo } = await getTopping(topping);
            toppingData.toppingName = toppingInfo.name;
            toppingData.toppingPrice = toppingInfo.price;
        }
    
        const cartData = {
            id: uuidv4(),
            ...productData,
            ...sizeData,
            ...toppingData,
            quantity,
            ice: +ice,
            sugar: +sugar,
        }

        addToCart(cartData, () => {
            toastr.success(`Thêm ${product.name} vào giỏ hàng thành công`);
            reset();
            setQuantity(1);
        });
    }

    const { slug } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const getProduct = async () => {
            const { data } = await get(slug);
            setProduct(data);
        };
        getProduct();

        const getToppings = async () => {
            const { data } = await getAll();
            setToppings(data);
        };
        getToppings();

        const getSizes = async () => {
            const { data } = await getAllSize("name", "desc");
            setSizes(data);
        };
        getSizes();
    }, [slug]);

    const handleChangeFormAddCart = ({ size, topping }: InputsType) => {
        setShowBtnClear(true);
    }

    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
        setShowBtnClear(true);
    }

    const handleDecrease = () => {
        if (quantity === 1) {
            toastr.info("Vui lòng chọn ít nhất 1 sản phẩm");
        } else {
            setQuantity(quantity - 1);
            setShowBtnClear(true);
        }
    }

    return (
        <>
            <section className="container max-w-6xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pb-8">
                <div className="relative group min-h-[500px]">
                    <div
                        className="h-full absolute w-full bg-contain bg-center bg-no-repeat"
                        style={{backgroundImage: `url(${product?.image})`}}
                    />
                    <button className="absolute bottom-2 left-2 rounded-full border-2 border-gray-400 w-9 h-9 text-gray-400 text-lg transition ease-linear duration-300 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                        <FontAwesomeIcon icon={faExpandArrowsAlt} />
                    </button>
                    <button data-id="${productDetail.id}" className="btn-heart opacity-0 group-hover:opacity-100 absolute top-3 right-3 border-2 border-gray-400 rounded-full w-8 h-8 text-gray-400 transition ease-linear duration-300 hover:bg-red-700 hover:text-white hover:border-red-700">
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </div>
                <div>
                    <div className="flex justify-between">
                        <div>
                            <div className="flex">
                                <Link to="/" className="text-gray-500 transition hover:text-black uppercase font-semibold text-sm block pr-4 relative after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-2 after:w-[1px] after:h-3 after:rotate-12 after:bg-gray-400">Home</Link>
                                <Link to={`/danh-muc/${product?.categoryId.slug}`} className="text-gray-500 transition hover:text-black uppercase font-semibold text-sm">{product?.categoryId.name}</Link>
                            </div>
                            <h1 className="font-semibold text-[28px] text-gray-800 pb-1 mb-3 relative after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-8 after:h-1 after:bg-gray-300">{product?.name}</h1>
                            <ul className="flex items-center mt-4">
                                <li className="flex text-yellow-400 text-xs pr-4 relative after:content-[''] after:absolute after:right-2 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">
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
                                </li>
                                <li className="pr-4 relative after:content-[''] after:absolute after:right-2 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:bg-gray-300 after:h-4">10 Đánh giá</li>
                                <li>10 Đã bán</li>
                            </ul>
                            <div className="mt-1 my-2">
                                <span className="text-3xl text-[#D9A953] font-semibold">{formatCurrency(product?.price || 0)}</span>
                            </div>
                        </div>
                        <ul className="flex">
                            <li>
                                <button className="w-8 h-8 rounded-full border-2 border-gray-400 text-gray-400 transition ease-linear duration-200 hover:text-white hover:bg-[#D9A953] hover:border-[#D9A953]">
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </button>
                            </li>
                            <li>
                                <button className="w-8 ml-1 h-8 rounded-full border-2 border-gray-400 text-gray-400 transition ease-linear duration-200 hover:text-white hover:bg-[#D9A953] hover:border-[#D9A953]">
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex items-center mt-2">
                                    <label className="min-w-[80px] font-bold text-sm">Đá</label>
                                    <ul className="flex">
                                        <li>
                                            <input type="radio" defaultValue={0} className="form__add-cart-ice" hidden {...register("ice")} id="ice-0" />
                                            <label htmlFor="ice-0" className="block cursor-pointer px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">0%</label>
                                        </li>
                                        <li>
                                            <input type="radio" defaultValue={30} className="form__add-cart-ice" hidden {...register("ice")} id="ice-30" />
                                            <label htmlFor="ice-30" className="block cursor-pointer px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">30%</label>
                                        </li>
                                        <li>
                                            <input type="radio" defaultValue={50} className="form__add-cart-ice" hidden {...register("ice")} id="ice-50" />
                                            <label htmlFor="ice-50" className="block cursor-pointer px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">50%</label>
                                        </li>
                                        <li>
                                            <input type="radio" defaultValue={70} className="form__add-cart-ice" hidden {...register("ice")} id="ice-70" />
                                            <label htmlFor="ice-70" className="block cursor-pointer px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">70%</label>
                                        </li>
                                        <li>
                                            <input type="radio" defaultValue={100} defaultChecked className="form__add-cart-ice" hidden {...register("ice")} id="ice-100" />
                                            <label htmlFor="ice-100" className="block cursor-pointer px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">100%</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex items-center mt-2">
                                    <label className="min-w-[80px] font-bold text-sm">Đường</label>
                                    <ul className="flex">
                                        <li>
                                            <input type="radio" defaultValue={0} {...register("sugar")} hidden className="form__add-cart-sugar" id="sugar-0" />
                                            <label htmlFor="sugar-0" className="cursor-pointer block px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">0%</label>
                                        </li>
                                        <li>
                                            <input type="radio" defaultValue={30} {...register("sugar")} hidden className="form__add-cart-sugar" id="sugar-30" />
                                            <label htmlFor="sugar-30" className="cursor-pointer block px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">30%</label>
                                        </li>
                                        <li>
                                            <input type="radio" defaultValue={50} {...register("sugar")} hidden className="form__add-cart-sugar" id="sugar-50" />
                                            <label htmlFor="sugar-50" className="cursor-pointer block px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">50%</label>
                                        </li>
                                        <li>
                                            <input type="radio" defaultValue={70} {...register("sugar")} hidden className="form__add-cart-sugar" id="sugar-70" />
                                            <label htmlFor="sugar-70" className="cursor-pointer block px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">70%</label>
                                        </li>
                                        <li>
                                            <input type="radio" defaultValue={100} defaultChecked {...register("sugar")} hidden className="form__add-cart-sugar" id="sugar-100" />
                                            <label htmlFor="sugar-100" className="cursor-pointer block px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">100%</label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex items-center mt-2">
                                    <label className="min-w-[80px] font-bold text-sm">Size</label>
                                    <ul className="flex">
                                        {sizes?.map((item, index) => (
                                            <li key={index}>
                                                <input hidden defaultChecked={item.name === "S"} type="radio" {...register("size")} value={item._id} className="form__add-cart-size" id={`size-${item.name}`} />
                                                <label htmlFor={`size-${item.name}`} className="cursor-pointer block px-3 py-1 border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">{item.name}</label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex items-center mt-2">
                                    <label className="min-w-[80px] font-bold text-sm">Topping</label>
                                    <select {...register("topping")} className="px-3 py-1 outline-none border-2 border-gray-300 transition duration-300 hover:shadow-md rounded-[4px] mr-1 shadow-sm text-gray-500">
                                        {toppings?.map((item, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={item._id}
                                                    selected={!item.price && true}
                                                >
                                                    {item.name} +{formatCurrency(item.price)}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="border-b border-dashed pb-4 mt-6">
                                    {showBtnClear  && <p className="transition-all ease-linear duration-100 mt-6 border-t border-dashed pt-2 text-xl font-semibold">{formatCurrency(totalPrice)}</p>}
                                    <div className="flex mt-2 items-center">
                                        <div className="flex items-center h-9">
                                            <button
                                                type="button"
                                                onClick={handleDecrease}
                                                className="px-2 bg-gray-100 border-gray-200 h-full border-l border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"
                                            >-</button>
                                            <input
                                                type="text"
                                                className="border border-gray-200 h-full w-10 text-center outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc]"
                                                value={quantity}
                                                onChange={(e: any) => {
                                                    const qnt = e.target.value;
                                                    if (isNaN(qnt)) {
                                                        toastr.info("Vui lòng nhập số");
                                                    } else {
                                                        setQuantity(+e.target.value)
                                                    }
                                                }}
                                            />
                                            <button
                                                type="button"
                                                onClick={handleIncrease}
                                                className="px-2 bg-gray-100 border-gray-200 h-full border-r border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"
                                            >+</button>
                                        </div>
                                        <button className="ml-2 px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Thêm vào giỏ hàng</button>
                                    </div>
                                </div>
                            </form>
                            <p className="mt-1 text-gray-500"> Danh mục: <Link to={`/danh-muc/${product?.categoryId.slug}`} className="transition hover:text-black">{product?.categoryId.name}</Link>
                            </p>
                            <ul className="flex mt-3">
                                <li className="mr-1.5">
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=${window.location.href}/" className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-400 transition duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </li>
                                <li className="mr-1.5">
                                    <a href="https://twitter.com/share?url=${window.location.href}/" className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-400 transition duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                        <i className="fab fa-twitter" />
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li className="mr-1.5">
                                    <a href="https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}/" className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-400 transition duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-500">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button
                                type="button"
                                className={`${showBtnClear || "hidden"} text-gray-400 transition hover:text-black`}
                            >Xóa</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container max-w-6xl mx-auto px-3">
                <ul className="flex border-t">
                    <li className="transition ease-linear duration-200 font-bold cursor-pointer hover:border-t-[#D9A953] hover:text-black uppercase pt-2 border-t-2 border-t-transparent pr-2 text-gray-400 text-xs">Mô tả</li>
                    <li className="transition ease-linear duration-200 font-bold cursor-pointer hover:border-t-[#D9A953] hover:text-black uppercase pt-2 border-t-2 border-t-[#D9A953] pr-2 text-black text-xs">Đánh giá</li>
                </ul>
            </section>
            <section className="container max-w-6xl mx-auto px-3">
                <div className="mt-5"> Vui lòng <Link to={`/login`}>
                        <button className="bg-[#D9A953] px-2 py-1 rounded text-white text-sm font-semibold transition duration-200 ease-linear hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">đăng nhập</button>
                    </Link> để nhận xét </div>
                <div id="list-comment">
                    <ul className="mt-4 grid grid-cols-1 divide-y divide-dashed">
                        <li className="flex py-4">
                            <img src="https://res.cloudinary.com/levantuan/image/upload/v1645455652/assignment-js/rx7cgkojxqz9tqeidv7l.png" alt="" className="w-16 h-16 rounded-full object-cover" />
                            <div className="ml-2">
                                <div className="flex text-xs mb-0.5">
                                    <div className="text-yellow-400">
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <div className="text-yellow-400">
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <div className="text-yellow-400">
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <div className="text-yellow-400">
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <div className="text-gray-300">
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                                <div>
                                    <span className="font-semibold">Lê Văn Tuân</span>
                                    <span className="text-sm text-gray-500">(22 Tháng 2, 2022)</span>
                                </div>
                                <p className="text-gray-500">Test</p>
                                <ul className="text-gray-500 flex text-sm mt-1">
                                    <li data-cmt-id="${cmt.cmtId}" className="btn-remove transition hover:text-black cursor-pointer">Xóa</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <ul className="flex justify-center mt-5">
                        <li>
                            <a href="/#/product/${productId}/page/${currentPage - 1}" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                                <button>
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="/#/product/${productId}/page/${i}" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white border-[#D9A953] bg-[#D9A953] text-white">1</a>
                        </li>
                        <li>
                            <a href="/#/product/${productId}/page/${i}" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white border-gray-500 text-gray-500">2</a>
                        </li>
                        <li>
                            <a href="/#/product/${productId}/page/${+currentPage + 1}" className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold border-gray-500 text-gray-500 mx-0.5 cursor-pointer transition ease-linear duration-200 hover:bg-[#D9A953] hover:border-[#D9A953] hover:text-white">
                                <button>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            
            <ProductRelated id={product?._id} cateId={product?.categoryId._id} />
        </>
    )
}

export default ProductDetailPage;