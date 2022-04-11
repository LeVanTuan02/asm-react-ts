import { CartType } from "../types/cart";
import { OrderDetailType } from "../types/order";
import { OrderType } from "../types/sendMail";
import { OrderType as OrderType2 } from "../types/order";
import { VoucherType } from "../types/voucher";
import { formatCurrency, formatDate } from "../utils";
import instance from "./instance";

const API_NAME = "sendMail";
const FROM_NAME = "Trà sữa Yotea";
const ADMIN_EMAIL = "tuanlvph14271@fpt.edu.vn";

export const sendMailOrder = (cart: CartType[], vouchers: VoucherType[], orderInfo: OrderType) => {
    const url = `/${API_NAME}`;

    let htmlContent = `
        <div class="wrapper" style="background-color: #EFEFEF; padding: 0 15px;">
            <div class="container" style="width: 700px; max-width: 100%; margin: 0 auto;">
                <header style="text-align: center; padding: 12px 0;">
                    <h2>
                        <strong>Xin chào ${orderInfo.name}</strong>
                        <p style="font-size: 16px; font-weight: normal;">Bạn đã đặt hàng thành công. Cảm ơn bạn đã tin tưởng và ủng hộ cửa hàng. Chúng tôi sẽ sớm liên hệ với bạn để giao hàng.</p>
                    </h2>
                </header>
        
                <div class="content" style="padding-bottom: 32px;">
                    <h3>
                        <strong>Người nhận hàng</strong>
                    </h3>
                    <table border="1" cellpadding="0" cellspacing="0" style="width:100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Họ tên</td>
                                <td style="padding: 10px 12px;">${orderInfo.name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Email</td>
                                <td style="padding: 10px 12px;">${orderInfo.email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Số điện thoại</td>
                                <td style="padding: 10px 12px;">${orderInfo.phone}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Địa chỉ nhận hàng</td>
                                <td style="padding: 10px 12px;">${orderInfo.address}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Ghi chú</td>
                                <td style="padding: 10px 12px;">${orderInfo.message || "Không có"}</td>
                            </tr>
                        </tbody>
                    </table>
        
                    <h3>
                        <strong>Thông tin sản phẩm</strong>
                    </h3>
                    <table table border="1" cellpadding="0" cellspacing="0" style="width:100%;">
                        <thead>
                            <tr>
                                <th style="font-weight: bold; padding: 8px; text-align: center;">STT</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Ảnh SP</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Sản phẩm</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Đơn giá</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Số lượng</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Thành tiền</th>
                            </tr>
                        </thead>
        
                        <tbody>`;
                        let totalPrice = 0;
                        cart.forEach((item, index) => {
                            totalPrice += (item.productPrice + item.sizePrice + item.toppingPrice) * item.quantity;

                            htmlContent += `
                                <tr>
                                    <td style="text-align: center;">${++index}</td>
                                    <td style="padding: 8px;">
                                        <img src="${item.productImage}" alt="" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
                                    </td>
                                    <td style="padding: 8px 12px;">
                                        <p>${item.productName}</p>
                                        <p>Size: ${item.sizeName}</p>
                                        <p>Ice: ${item.ice}%</p>
                                        <p>Sugar: ${item.sugar}%</p>
                                        <p>Topping: ${item.toppingName}</p>
                                    </td>
                                    <td style="padding: 8px 12px;">${formatCurrency(item.productPrice + item.sizePrice + item.toppingPrice)}</td>
                                    <td style="padding: 8px 12px;">${item.quantity}</td>
                                    <td style="padding: 8px 12px;">${formatCurrency((item.productPrice + item.sizePrice + item.toppingPrice) * item.quantity)}</td>
                                </tr>
                            `;
                        })
                            
                        htmlContent += `
                        </tbody>
        
                        <tfoot>
                            <tr>
                                <td style="font-weight: bold; padding: 8px 12px;">Tạm tính</td>
                                <td colspan="6" style="padding: 8px 12px;">${formatCurrency(totalPrice)}</td>
                            </tr>`;

                            let totalDecrease = 0;
                            if (vouchers.length) {
                                htmlContent += `
                                <tr>
                                    <td style="font-weight: bold; padding: 8px 12px;">Voucher</td>
                                    <td colspan="6" style="padding: 8px 12px;">
                                    ${vouchers.map(item => item.code).join(", ")}
                                    </td>
                                </tr>
                                `;

                                // tính tổng tiền giảm
                                vouchers.forEach((item) => {
                                    if (item.condition) {
                                        totalDecrease += item.conditionNumber;
                                    } else {
                                        totalDecrease += totalPrice * (item.conditionNumber / 100);
                                    }
                                });
                            }

                            htmlContent += `
                            <tr>
                                <td style="font-weight: bold; padding: 8px 12px;">Tổng giảm</td>
                                <td colspan="6" style="padding: 8px 12px;">${formatCurrency(totalDecrease)}</td>
                            </tr>
                            <tr>
                                <td style="font-weight: bold; padding: 8px 12px;">Tổng thanh toán</td>
                                <td colspan="6" style="padding: 8px 12px;">${formatCurrency((totalPrice - totalDecrease) > 0 ? totalPrice - totalDecrease : 0)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    `;

    const sendMailData = {
        from_name: FROM_NAME,
        to_name: orderInfo.name,
        to_email: orderInfo.email,
        subject: "Đặt hàng thành công | Yotea",
        html_content: htmlContent
    }

    return instance.post(url, sendMailData);
}

export const sendMailOrderToAdmin = (cart: CartType[], vouchers: VoucherType[], orderInfo: OrderType) => {
    const url = `/${API_NAME}`;

    let htmlContent = `
        <div class="wrapper" style="background-color: #EFEFEF; padding: 0 15px;">
            <div class="container" style="width: 700px; max-width: 100%; margin: 0 auto;">
                <header style="text-align: center; padding: 12px 0;">
                    <h2>
                        <strong>Trà sữa Yotea có đơn hàng mới</strong>
                        <p style="font-size: 16px; font-weight: normal;">Hãy tiến hành xác minh đơn hàng và giao hàng.</p>
                    </h2>
                </header>
        
                <div class="content" style="padding-bottom: 32px;">
                    <h3>
                        <strong>Người nhận hàng</strong>
                    </h3>
                    <table border="1" cellpadding="0" cellspacing="0" style="width:100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Họ tên</td>
                                <td style="padding: 10px 12px;">${orderInfo.name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Email</td>
                                <td style="padding: 10px 12px;">${orderInfo.email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Số điện thoại</td>
                                <td style="padding: 10px 12px;">${orderInfo.phone}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Địa chỉ nhận hàng</td>
                                <td style="padding: 10px 12px;">${orderInfo.address}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Thời gian đặt</td>
                                <td style="padding: 10px 12px;">${formatDate(orderInfo.createdAt)}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Ghi chú</td>
                                <td style="padding: 10px 12px;">${orderInfo.message || "Không có"}</td>
                            </tr>
                        </tbody>
                    </table>
        
                    <h3>
                        <strong>Thông tin sản phẩm</strong>
                    </h3>
                    <table table border="1" cellpadding="0" cellspacing="0" style="width:100%;">
                        <thead>
                            <tr>
                                <th style="font-weight: bold; padding: 8px; text-align: center;">STT</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Ảnh SP</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Sản phẩm</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Đơn giá</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Số lượng</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Thành tiền</th>
                            </tr>
                        </thead>
        
                        <tbody>`;
                        let totalPrice = 0;
                        cart.forEach((item, index) => {
                            totalPrice += (item.productPrice + item.sizePrice + item.toppingPrice) * item.quantity;

                            htmlContent += `
                                <tr>
                                    <td style="text-align: center;">${++index}</td>
                                    <td style="padding: 8px;">
                                        <img src="${item.productImage}" alt="" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
                                    </td>
                                    <td style="padding: 8px 12px;">
                                        <p>${item.productName}</p>
                                        <p>Size: ${item.sizeName}</p>
                                        <p>Ice: ${item.ice}%</p>
                                        <p>Sugar: ${item.sugar}%</p>
                                        <p>Topping: ${item.toppingName}</p>
                                    </td>
                                    <td style="padding: 8px 12px;">${formatCurrency(item.productPrice + item.sizePrice + item.toppingPrice)}</td>
                                    <td style="padding: 8px 12px;">${item.quantity}</td>
                                    <td style="padding: 8px 12px;">${formatCurrency((item.productPrice + item.sizePrice + item.toppingPrice) * item.quantity)}</td>
                                </tr>
                            `;
                        })
                            
                        htmlContent += `
                        </tbody>
        
                        <tfoot>
                            <tr>
                                <td style="font-weight: bold; padding: 8px 12px;">Tạm tính</td>
                                <td colspan="6" style="padding: 8px 12px;">${formatCurrency(totalPrice)}</td>
                            </tr>`;

                            let totalDecrease = 0;
                            if (vouchers.length) {
                                htmlContent += `
                                <tr>
                                    <td style="font-weight: bold; padding: 8px 12px;">Voucher</td>
                                    <td colspan="6" style="padding: 8px 12px;">
                                    ${vouchers.map(item => item.code).join(", ")}
                                    </td>
                                </tr>
                                `;

                                // tính tổng tiền giảm
                                vouchers.forEach((item) => {
                                    if (item.condition) {
                                        totalDecrease += item.conditionNumber;
                                    } else {
                                        totalDecrease += totalPrice * (item.conditionNumber / 100);
                                    }
                                });
                            }

                            htmlContent += `
                            <tr>
                                <td style="font-weight: bold; padding: 8px 12px;">Tổng giảm</td>
                                <td colspan="6" style="padding: 8px 12px;">${formatCurrency(totalDecrease)}</td>
                            </tr>
                            <tr>
                                <td style="font-weight: bold; padding: 8px 12px;">Tổng thanh toán</td>
                                <td colspan="6" style="padding: 8px 12px;">${formatCurrency((totalPrice - totalDecrease) > 0 ? totalPrice - totalDecrease : 0)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    `;

    const sendMailData = {
        from_name: FROM_NAME,
        to_name: "Yotea",
        to_email: ADMIN_EMAIL,
        subject: `Đơn hàng mới từ ${orderInfo.name} | Yotea`,
        html_content: htmlContent
    }

    return instance.post(url, sendMailData);
}

export const sendMailCancelCart = (orderDetail: any[], voucherText?: string, orderInfo?: any) => {
    const url = `/${API_NAME}`;

    let htmlContent = `
        <div class="wrapper" style="background-color: #EFEFEF; padding: 0 15px;">
            <div class="container" style="width: 700px; max-width: 100%; margin: 0 auto;">
                <header style="text-align: center; padding: 12px 0;">
                    <h2>
                        <strong>Xin chào ${orderInfo?.customerName}</strong>
                        <p style="font-size: 16px; font-weight: normal;">Đơn hàng #${orderInfo?._id} của bạn đã bị hủy lúc ${formatDate(orderInfo?.updatedAt || "")}</p>
                    </h2>
                </header>
        
                <div class="content" style="padding-bottom: 32px;">
                    <h3>
                        <strong>Người nhận hàng</strong>
                    </h3>
                    <table border="1" cellpadding="0" cellspacing="0" style="width:100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Họ tên</td>
                                <td style="padding: 10px 12px;">${orderInfo?.customerName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Email</td>
                                <td style="padding: 10px 12px;">${orderInfo?.email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Số điện thoại</td>
                                <td style="padding: 10px 12px;">${orderInfo?.phone}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Địa chỉ nhận hàng</td>
                                <td style="padding: 10px 12px;">${orderInfo?.address}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Thời gian đặt hàng</td>
                                <td style="padding: 10px 12px;">${formatDate(orderInfo?.createdAt || "")}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Ghi chú</td>
                                <td style="padding: 10px 12px;">${orderInfo?.message || "Không có"}</td>
                            </tr>
                        </tbody>
                    </table>
        
                    <h3>
                        <strong>Thông tin sản phẩm</strong>
                    </h3>
                    <table table border="1" cellpadding="0" cellspacing="0" style="width:100%;">
                        <thead>
                            <tr>
                                <th style="font-weight: bold; padding: 8px; text-align: center;">STT</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Ảnh SP</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Sản phẩm</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Đơn giá</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Số lượng</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Thành tiền</th>
                            </tr>
                        </thead>
        
                        <tbody>`;

                        orderDetail?.forEach((item, index) => {
                            htmlContent += `
                                <tr>
                                    <td style="text-align: center;">${++index}</td>
                                    <td style="padding: 8px;">
                                        <img src="${item.productId.image}" alt="" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
                                    </td>
                                    <td style="padding: 8px 12px;">
                                        <p>${item.productId.name}</p>
                                        <p>Size: ${item.sizeId.name}</p>
                                        <p>Ice: ${item.ice}%</p>
                                        <p>Sugar: ${item.sugar}%</p>
                                        <p>Topping: ${item.toppingId.name}</p>
                                    </td>
                                    <td style="padding: 8px 12px;">${formatCurrency(item.productPrice + item.sizePrice + item.toppingPrice)}</td>
                                    <td style="padding: 8px 12px;">${item.quantity}</td>
                                    <td style="padding: 8px 12px;">${formatCurrency((item.productPrice + item.sizePrice + item.toppingPrice) * item.quantity)}</td>
                                </tr>
                            `;
                        })
                            
                        htmlContent += `
                        </tbody>
        
                        <tfoot>
                            <tr>
                                <td style="font-weight: bold; padding: 8px 12px;">Tạm tính</td>
                                <td colspan="6" style="padding: 8px 12px;">${formatCurrency(orderInfo?.totalPrice || 0)}</td>
                            </tr>
                            ${voucherText && `
                                <tr>
                                    <td style="font-weight: bold; padding: 8px 12px;">Voucher</td>
                                    <td colspan="6" style="padding: 8px 12px;">
                                    ${voucherText}
                                    </td>
                                </tr>
                            `}
                            <tr>
                                <td style="font-weight: bold; padding: 8px 12px;">Tổng giảm</td>
                                <td colspan="6" style="padding: 8px 12px;">${formatCurrency(orderInfo?.priceDecrease || 0)}</td>
                            </tr>
                            <tr>
                                <td style="font-weight: bold; padding: 8px 12px;">Tổng thanh toán</td>
                                <td colspan="6" style="padding: 8px 12px;">${formatCurrency((orderInfo?.totalPrice - orderInfo?.priceDecrease) > 0 ? orderInfo?.totalPrice - orderInfo?.priceDecrease : 0)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    `;

    const sendMailData = {
        from_name: FROM_NAME,
        to_name: orderInfo?.customerName,
        to_email: orderInfo?.email,
        subject: `Đơn hàng #${orderInfo?._id} đã bị hủy | Yotea`,
        html_content: htmlContent
    }

    return instance.post(url, sendMailData);
}

export const sendMailOrderSuccess = (orderDetail: any[], voucherText?: string, orderInfo?: any) => {
    const url = `/${API_NAME}`;

    let htmlContent = `
        <div class="wrapper" style="background-color: #EFEFEF; padding: 0 15px;">
            <div class="container" style="width: 700px; max-width: 100%; margin: 0 auto;">
                <header style="text-align: center; padding: 12px 0;">
                    <h2>
                        <strong>Xin chào ${orderInfo?.customerName}</strong>
                        <p style="font-size: 16px; font-weight: normal;">Đơn hàng #${orderInfo?._id} của bạn đã giao hàng thành công lúc ${formatDate(orderInfo?.updatedAt || "")}</p>
                    </h2>
                </header>
        
                <div class="content" style="padding-bottom: 32px;">
                    <h3>
                        <strong>Người nhận hàng</strong>
                    </h3>
                    <table border="1" cellpadding="0" cellspacing="0" style="width:100%;">
                        <tbody>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Họ tên</td>
                                <td style="padding: 10px 12px;">${orderInfo?.customerName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Email</td>
                                <td style="padding: 10px 12px;">${orderInfo?.email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Số điện thoại</td>
                                <td style="padding: 10px 12px;">${orderInfo?.phone}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Địa chỉ nhận hàng</td>
                                <td style="padding: 10px 12px;">${orderInfo?.address}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Thời gian đặt hàng</td>
                                <td style="padding: 10px 12px;">${formatDate(orderInfo?.createdAt || "")}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 12px; font-weight: bold;">Ghi chú</td>
                                <td style="padding: 10px 12px;">${orderInfo?.message || "Không có"}</td>
                            </tr>
                        </tbody>
                    </table>
        
                    <h3>
                        <strong>Thông tin sản phẩm</strong>
                    </h3>
                    <table table border="1" cellpadding="0" cellspacing="0" style="width:100%;">
                        <thead>
                            <tr>
                                <th style="font-weight: bold; padding: 8px; text-align: center;">STT</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Ảnh SP</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Sản phẩm</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Đơn giá</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Số lượng</th>
                                <th style="font-weight: bold; padding: 8px 12px; text-align: left;">Thành tiền</th>
                            </tr>
                        </thead>
        
                        <tbody>`;

                        orderDetail?.forEach((item, index) => {
                            htmlContent += `
                                <tr>
                                    <td style="text-align: center;">${++index}</td>
                                    <td style="padding: 8px;">
                                        <img src="${item.productId.image}" alt="" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
                                    </td>
                                    <td style="padding: 8px 12px;">
                                        <p>${item.productId.name}</p>
                                        <p>Size: ${item.sizeId.name}</p>
                                        <p>Ice: ${item.ice}%</p>
                                        <p>Sugar: ${item.sugar}%</p>
                                        <p>Topping: ${item.toppingId.name}</p>
                                    </td>
                                    <td style="padding: 8px 12px;">${formatCurrency(item.productPrice + item.sizePrice + item.toppingPrice)}</td>
                                    <td style="padding: 8px 12px;">${item.quantity}</td>
                                    <td style="padding: 8px 12px;">${formatCurrency((item.productPrice + item.sizePrice + item.toppingPrice) * item.quantity)}</td>
                                </tr>
                            `;
                        })
                            
                        htmlContent += `
                        </tbody>
        
                        <tfoot>
                            <tr>
                                <td style="font-weight: bold; padding: 8px 12px;">Tạm tính</td>
                                <td colspan="6" style="padding: 8px 12px;">${formatCurrency(orderInfo?.totalPrice || 0)}</td>
                            </tr>
                            ${voucherText && `
                                <tr>
                                    <td style="font-weight: bold; padding: 8px 12px;">Voucher</td>
                                    <td colspan="6" style="padding: 8px 12px;">
                                    ${voucherText}
                                    </td>
                                </tr>
                            `}
                            <tr>
                                <td style="font-weight: bold; padding: 8px 12px;">Tổng giảm</td>
                                <td colspan="6" style="padding: 8px 12px;">${formatCurrency(orderInfo?.priceDecrease || 0)}</td>
                            </tr>
                            <tr>
                                <td style="font-weight: bold; padding: 8px 12px;">Tổng thanh toán</td>
                                <td colspan="6" style="padding: 8px 12px;">${formatCurrency((orderInfo?.totalPrice - orderInfo?.priceDecrease) > 0 ? orderInfo?.totalPrice - orderInfo?.priceDecrease : 0)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    `;

    const sendMailData = {
        from_name: FROM_NAME,
        to_name: orderInfo?.customerName,
        to_email: orderInfo?.email,
        subject: `Đơn hàng #${orderInfo?._id} đã giao hàng thành công | Yotea`,
        html_content: htmlContent
    }

    return instance.post(url, sendMailData);
}