const ContactPage = () => {
    return (
        <>
            <section className="container max-w-6xl mx-auto px-3 py-8 text-center">
                <h1 className="text-2xl font-semibold text-[#D9A953] mb-2">Liên hệ với Yotea</h1>
                <p>Từng ngày Yotea trở nên hoàn thiện hơn về diện mạo, chất lượng sản phẩm dịch vụ là nhờ sự đóng góp ý kiến của quý khách hàng. Để cảm nhận được sự thay đổi ấy, đừng ngần ngại nói với Yotea nhé.</p>
            </section>
            <section className="bg-[#EEE8DF] py-16">
                <form action="" className="container max-w-6xl mx-auto px-3" id="contact__form">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 md:col-span-6">
                            <input type="text" placeholder="Họ và tên" name="contact__form-name" id="contact__form-name" className="w-full rounded-full outline-none h-10 px-4 shadow-sm" />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <input type="text" placeholder="Email" id="contact__form-email" name="contact__form-email" className="w-full rounded-full outline-none h-10 px-4 shadow-sm" />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <input type="text" placeholder="Số điện thoại" id="contact__form-phone" name="contact__form-phone" className="w-full rounded-full outline-none h-10 px-4 shadow-sm" />
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <select name="contact__form-store" id="contact__form-store" className="outline-none w-full rounded-full h-10 px-4 shadow-sm">
                                <option value="">Cửa hàng phản hồi</option>
                                <option value="${store.id}">Yotea Bắc Giang</option>
                            </select>
                        </div>
                        <div className="col-span-12">
                            <label htmlFor="contact__form-content" className="text-[#D9A953] font-semibold mb-1 text-lg block">Nội dung phản hồi</label>
                            <textarea name="contact__form-content" id="contact__form-content" cols={30} rows={10} placeholder="Nội dung phản hồi" className="w-full rounded-xl outline-none py-2 px-3 shadow-sm" defaultValue={""} />
                        </div>
                        <div className="col-span-12">
                            <div className="flex items-center">
                                <input type="checkbox" data-error=".error-checkbox" name="contact__form-checkbox" id="contact__form-checkbox" />
                                <label htmlFor="contact__form-checkbox" className="ml-2">Tôi xác nhận các thông tin cá nhân cung cấp ở trên là hoàn toàn chính xác và đồng ý để Yotea sử dụng các thông tin đó cho mục đích giải quyết phản hồi.</label>
                            </div>
                            <div className="error-checkbox pl-3 text-sm mt-0.5 text-red-500" />
                        </div>
                    </div>
                    <button className="block mx-auto mt-8 h-10 rounded-full bg-[#D9A953] text-white font-semibold px-4 transition ease-linear duration-300 hover:shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]">Gửi phản hồi</button>
                </form>
            </section>
            <section className="container max-w-6xl mx-auto px-3 py-10 leading-relaxed">
                <h2 className="text-xl font-semibold text-[#D9A953] mb-1">Thỏa thuận bảo mật thông tin</h2>
                <p> Yotea cam kết giữ bí mật hoàn toàn thông tin của Quý khách hàng theo đúng quy định pháp luật nước sở tại về quyền bảo mật thông tin có liên quan. Trường hợp xảy ra khiếu nại, than phiền, Yotea có thể sẽ sử dụng thông tin khách hàng để chuyển giao đến bộ phận liên quan giải quyết: </p>
                <ul className="mb-5">
                    <li>1. Nội bộ các bộ phận trực thuộc Yotea</li>
                    <li> 2. Bên thứ ba được ủy quyền chính thức từ Yotea cho việc giải quyết các than phiền, khiếu nại mang tính chất nghiêm trọng </li>
                </ul>
                <p>Thời gian giải quyết khiếu nại than phiền được tính dựa trên các ngày làm việc trong tuần từ thứ 2 đến thứ 6, thao giờ hành chính. </p>
                <ul className="mb-5">
                    <li>1. Yotea cam kết bảo mật các thông tin mà khách hàng cung cấp và tuân thủ quy định pháp luật về bảo mật những thông tin liên quan. </li>
                    <li> 2. Thông tin cá nhân của khách hàng được sử dụng nhằm mục đích: <ul>
                            <li>- Giải quyết khiếu nại, than phiền</li>
                            <li>- Tiếp nhận ý kiến để cải thiện chất lượng sản phẩm dịch vụ</li>
                            <li>- Cung cấp thông tin các chương trình khuyến mãi.</li>
                        </ul>
                    </li>
                    <li> 3. Yotea có thể tiết lộ thông tin của khách hàng cho mục đích giải quyết khiếu nại, than phiền của khách hàng cho: <ul>
                            <li>- Các bộ phận trực thuộc Cty cổ phần TMDV Chào ngày mới - Trà sữa Yotea</li>
                            <li> - Bên thứ ba được ủy quyền chính thức từ Trà sữa Yotea cho việc giải quyết các than phiền, khiếu nại mang tính chất nghiêm trọng </li>
                        </ul>
                    </li>
                </ul>
                <h2 className="text-xl font-semibold text-[#D9A953] mb-1">LƯU Ý</h2>
                <p> Quý khách hàng vui lòng cung cấp đầy đủ chính xác các thông tin cá nhân để Yotea có thể liên hệ giải quyết vấn đề hoặc tiếp nhận ý kiến của khách hàng một cách nhanh nhất. </p>
                <p> Quá trình giải quyết và xử lý phản hồi của quý khách hàng sẽ chậm hơn vào các ngày Thứ bảy, Chủ nhật, ngày lễ. </p>
            </section>
        </>
    )
}

export default ContactPage;