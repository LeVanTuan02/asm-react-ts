import { faChevronRight, faLongArrowAltLeft, faTag, faTimes } from "@fortawesome/free-solid-svg-icons";
import toastr from "toastr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartType } from "../../../types/cart";
import { formatCurrency } from "../../../utils";
import { removeItemCart, updateQuantity } from "../../../utils/localStorage";
import Swal from "sweetalert2";

const CartPage = () => {
    const [cartQnt, setCartQnt] = useState<{ id: string, quantity: number }[]>();
    const [cart, setCart] = useState<CartType[]>(() => {
        return JSON.parse(localStorage.getItem("cart") as string) || [];
    })
    const [disableBtnUpdate, setDisableBtnUpdate] = useState<boolean>(true);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        // get id + quantity
        const getCartQuantity = () => {
            const listIdQnt = cart.map(item => {
                return {
                    id: item.id,
                    quantity: item.quantity
                };
            })

            setCartQnt(listIdQnt);
        };
        getCartQuantity();

        const getTotalPrice = () => {
            setTotalPrice(() => {
                return cart.reduce((total, cart) => {
                    return total + (cart.productPrice + cart.sizePrice + cart.toppingPrice) * cart.quantity;
                }, 0);
            })
        };
        getTotalPrice();
    }, [cart]);

    const handleUpdateQuantity = (cartId: string, e: any) => {
        setDisableBtnUpdate(false);

        const qnt = +e.target.value;
        if (isNaN(qnt)) {
            toastr.info("Vui lòng nhập số");
        } else {
            setCartQnt(prev => {
                return prev?.map(item => item.id === cartId ? {
                    id: item.id,
                    quantity: qnt
                } : item);
            })
        }
    }

    const increaseQnt = (cartId: string) => {
        setDisableBtnUpdate(false);

        setCartQnt(prev => {
            return prev?.map(item => item.id === cartId ? {
                id: item.id,
                quantity: ++item.quantity
            } : item);
        })
    }

    const decreaseQnt = (cartId: string) => {
        setDisableBtnUpdate(false);

        setCartQnt(prev => {
            return prev?.map(item => item.id === cartId ? {
                id: item.id,
                quantity: --item.quantity <= 0 ? 1 : item.quantity--
            } : item);
        })
    }

    const handleUpdateQnt = () => {
        if (!disableBtnUpdate) {
            updateQuantity(cartQnt, () => {
                toastr.success("Cập nhật thành công");
                setCart(JSON.parse(localStorage.getItem("cart") as string));
                setDisableBtnUpdate(true);
            })
        }
    }

    const handleRemoveCart = (cartId: string) => {
        Swal.fire({
            title: 'Bạn có chắc chắn muốn xóa sản phẩm này không?',
            text: "Bạn không thể hoàn tác sau khi xóa!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                removeItemCart(cartId, () => {
                    Swal.fire(
                        'Thành công!',
                        'Sản phẩm đã bị xóa.',
                        'success'
                    )
                    setCart(JSON.parse(localStorage.getItem("cart") as string));
                });
            }
        })
        
    }

    return (
        <>
            <section className="container max-w-6xl mx-auto px-3 mt-10">
                <ul className="flex justify-center items-center">
                    <li className="text-2xl px-2">
                        <Link to="/cart" className="text-black uppercase transition ease-linear duration-200 hover:text-black">SHOPPING CART</Link>
                    </li>
                    <li className="text-md text-gray-400 px-2 hidden md:block">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </li>
                    <li className="text-2xl px-2">
                        <Link to="/checkout" className="uppercase text-gray-400 transition ease-linear duration-200 hover:text-black">Checkout details</Link>
                    </li>
                    <li className="text-md text-gray-400 px-2 hidden md:block">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </li>
                    <li className="text-2xl px-2">
                        <span className="uppercase text-gray-400 cursor-default">Order Complete</span>
                    </li>
                </ul>
            </section>
            <section className="container max-w-6xl mx-auto px-3 mt-10 grid grid-cols-12 mb-9">
                {cart.length ? (
                    <>
                        <form action="" method="POST" id="cart__detail-form" className="col-span-12 lg:col-span-8 lg:pr-6">
                            <table className="table-auto w-full text-left border-collapse" id="cart__detail">
                                <thead>
                                    <tr className="uppercase border-b-2">
                                        <th className="pb-1 uppercase text-sm text-gray-500" colSpan={3}>Sản phẩm</th>
                                        <th className="pb-1 uppercase text-sm text-gray-500">Giá</th>
                                        <th className="pb-1 uppercase text-sm text-gray-500">Số lượng</th>
                                        <th className="pb-1 uppercase text-sm text-gray-500 text-right">Tạm tính</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, index) => (
                                        <tr className="border-b" key={index}>
                                            <td>
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveCart(item.id)}
                                                    className="p-2 text-gray-400 text-xl transition ease-linear duration-200 hover:text-black"
                                                >
                                                    <FontAwesomeIcon icon={faTimes} />
                                                </button>
                                            </td>
                                            <td className="p-2">
                                                <Link to={`/san-pham/${item.productSlug}`}>
                                                    <img className="block w-16 object-cover" src={item.productImage} alt="" />
                                                </Link>
                                            </td>
                                            <td className="p-2">
                                                <Link to={`/san-pham/${item.productSlug}`} className="font-semibold">{item.productName}</Link>
                                                <div className="text-sm">
                                                    <p>Đá: {item.ice}%</p>
                                                    <p>Đường: {item.sugar}%</p>
                                                    <p>Size: {item.sizeName}</p>
                                                    <p>Topping: {item.toppingName}</p>
                                                </div>
                                            </td>
                                            <td className="font-bold">{formatCurrency(item.productPrice + item.sizePrice + item.toppingPrice)}</td>
                                            <td className="p-2">
                                                {cartQnt?.map((cartItem, cartIndex) => {
                                                    if (cartItem.id === item.id) {
                                                        return (
                                                            <div className="flex items-center h-9" key={cartIndex}>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => decreaseQnt(item.id)}
                                                                    className="px-2 bg-gray-100 border-gray-200 h-full border-l border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"
                                                                >-</button>
                                                                <input
                                                                    type="text"
                                                                    className="border border-gray-200 h-full w-10 text-center outline-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc]"
                                                                    value={cartItem.quantity}
                                                                    onChange={e => handleUpdateQuantity(item.id, e)}
                                                                />
                                                                <button
                                                                    onClick={() => increaseQnt(item.id)}
                                                                    type="button"
                                                                    className="px-2 bg-gray-100 border-gray-200 h-full border-r border-y transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"
                                                                >+</button>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                            </td>
                                            <td className="font-bold text-right">{formatCurrency((item.productPrice + item.sizePrice + item.toppingPrice) * item.quantity)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <ul className="flex mt-6 items-center">
                                <li>
                                    <Link to="/thuc-don">
                                        <button type="button" className="select-none uppercase h-8 text-[#D9A953] font-semibold text-sm border-[#D9A953] border-2 px-3 transition ease-linear duration-300 hover:bg-[#D9A953] hover:text-white">
                                            <FontAwesomeIcon icon={faLongArrowAltLeft} />
                                            <span> Tiếp tục xem sản phẩm</span>
                                        </button>
                                    </Link>
                                </li>
                                <li className="ml-2">
                                    <button
                                        type="button"
                                        id="btn-cart-update"
                                        disabled={disableBtnUpdate}
                                        onClick={() => handleUpdateQnt()}
                                        className="cursor-pointer select-none uppercase bg-[#D9A953] px-3 h-8 font-semibold text-sm text-white transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"
                                    >Cập nhật giỏ hàng</button>
                                </li>
                            </ul>
                        </form>
                        <div className="mt-8 lg:mt-0 col-span-12 lg:col-span-4 lg:border-l lg:pl-6">
                            <table className="table-fixed w-full text-left">
                                <thead>
                                    <tr className="uppercase border-b-2">
                                        <th className="pb-1 text-sm text-gray-500" colSpan={2}>Cộng giỏ hàng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td>Tạm tính</td>
                                        <td className="py-2 text-right font-semibold">{formatCurrency(totalPrice)}</td>
                                    </tr>
                                    {/* <tr className="border-b">
                                        <td> Voucher <strong className="ml-1 mr-2">COVID</strong>
                                            <button className="btn-remove-voucher" data-id="${item.id}">
                                                <FontAwesomeIcon icon={faTimes} />
                                            </button>
                                        </td>
                                        <td className="py-2 text-right font-semibold">- 30%</td>
                                    </tr> */}
                                    <tr className="border-b">
                                        <td>Tổng</td>
                                        <td className="py-2 text-right font-semibold">{formatCurrency(totalPrice)}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link to="/checkout">
                                <button className="mt-4 w-full px-3 py-2 bg-orange-400 font-semibold uppercase text-white text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Tiến hành thanh toán</button>
                            </Link>
                            <form action="" className="mt-7" id="form__voucher-add">
                                <div className="flex items-center pb-2 font-semibold border-b-2 text-gray-500">
                                    <div className="mr-2">
                                        <FontAwesomeIcon icon={faTag} />
                                    </div> Mã giảm giá
                                </div>
                                <input type="text" id="form__voucher-add-control" placeholder="Mã giảm giá" className="shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-none focus:shadow-[0_0_5px_#ccc] my-4 w-full border px-2 h-10 text-sm outline-none" />
                                <button className="w-full px-3 py-2 bg-gray-100 border border-gray-300 text-black text-sm transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Áp dụng</button>
                            </form>
                        </div>
                    </>
                ) : (
                    <section className="text-center col-span-12 py-12">
                        <p>Chưa có sản phẩm nào trong giỏ hàng</p>
                        <Link to="/thuc-don" className="block mt-4">
                            <button className="uppercase h-8 text-[#D9A953] font-semibold text-sm border-[#D9A953] border-2 px-3 transition ease-linear duration-300 hover:bg-[#D9A953] hover:text-white">
                                <FontAwesomeIcon icon={faLongArrowAltLeft} />
                                <span> Tiếp tục mua hàng</span>
                            </button>
                        </Link>
                    </section>
                )}
            </section>
        </>
    )
}

export default CartPage;