import { faSync, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { get } from "../api/orderLogs";
import { OrderType } from "../types/order";
import { OrderLogsType } from "../types/orderLogs";
import { formatDate } from "../utils";

type OrderLogsProps = {
    isShow: boolean,
    onHandleShow: (args: any) => void,
    orderId?: string,
    order: OrderType
};

const OrderLogs = ({ isShow, onHandleShow, orderId, order }: OrderLogsProps) => {
    const [logs, setLogs] = useState<OrderLogsType[]>();

    useEffect(() => {
        const getData = async () => {
            const { data } = await get(orderId);
            setLogs(data);
        };
        getData();
    }, [orderId, order]);

    return (
        <div className={`${isShow && "active"} logs__wrapper`}>
            <div className="logs__overlay" onClick={() => onHandleShow(false)}></div>
        
            <div className="logs__inner">
                <div className="logs__inner-header">
                    <h2 className="logs__inner-header-title">
                        <div className="logs__inner-header-title-icon">
                            <FontAwesomeIcon icon={faSync} />
                        </div>
                        Chi tiết đơn hàng
                    </h2>
        
                    <div onClick={() => onHandleShow(false)} className="logs__inner-header-icon">
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
        
                <div className="logs__inner-body">
                    <div className="logs__inner-body-item">
                        <div className="logs__inner-body-group">
                            <label className="logs__inner-body-label">Tên khách hàng</label>
                            <input type="text" className="logs__inner-body-control" disabled value={order.customerName} />
                        </div>
            
                        <div className="logs__inner-body-group">
                            <label className="logs__inner-body-label">Số điện thoại</label>
                            <input type="text" className="logs__inner-body-control" disabled value={order.phone} />
                        </div>
            
                        <div className="logs__inner-body-group">
                            <label className="logs__inner-body-label">Email</label>
                            <input type="text" className="logs__inner-body-control" disabled value={order.email} />
                        </div>
            
                        <div className="logs__inner-body-group">
                            <label className="logs__inner-body-label">Địa chỉ giao hàng</label>
                            <input type="text" className="logs__inner-body-control" disabled value={order.address} />
                        </div>
            
                        <div className="logs__inner-body-group">
                            <label className="logs__inner-body-label">Thời gian đặt hàng</label>
                            <input type="text" className="logs__inner-body-control" disabled value={formatDate(order.createdAt)} />
                        </div>
            
                        <div className="logs__inner-body-group">
                            <label className="logs__inner-body-label">Ghi chú</label>
                            <input type="text" className="logs__inner-body-control" disabled value={order.message || "Không có"} />
                        </div>
                    </div>
                    <div className="logs__inner-body-item logs__inner-body-item-log">
                        <table className="logs__inner-body-item-table">
                            {logs?.map((item, index) => (
                                <tr key={index}>
                                    <td>{++index}</td>
                                    <td>{item.status == 0 ? "Mới đặt hàng" : item.status === 1 ? "Đã xác nhận" : item.status === 2 ? "Đang giao hàng" : item.status === 3 ? "Đã giao hàng" : "Đã hủy"}</td>
                                    <td>{item.userId ? `${item.userId.fullName} (${item.userId.username})` : order.customerName}</td>
                                    <td>{formatDate(item.createdAt)}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
        
                <div className="logs__inner-footer">
                    <button onClick={() => onHandleShow(false)} className="logs__inner-footer-close">Close</button>
                </div>
            </div>
        </div>
    )
}

export default OrderLogs;