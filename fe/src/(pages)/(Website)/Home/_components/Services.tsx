export default function Services_website() {

    const arr_service = [
        {
            img: 'https://demo-19.woovinapro.com/wp-content/uploads/2019/10/policy-icon1.png',
            title: 'Miễn phí vận chuyển',
            long_title: 'Miễn phí vận chuyển cho tất cả đơn hàng trên 1 triệu đồng.'
        },
        {
            img: 'https://demo-19.woovinapro.com/wp-content/uploads/2019/10/policy-icon2.png',
            title: 'Hỗ trợ trực tuyến 24/7',
            long_title: 'Hỗ trợ trực tuyến 24 giờ một ngày.'
        },
        {
            img: 'https://demo-19.woovinapro.com/wp-content/uploads/2019/10/policy-icon3.png',
            title: 'Hoàn lại tiền',
            long_title: 'Đảm bảo hoàn tiền trong vòng 7 ngày.'
        },
        {
            img: 'https://demo-19.woovinapro.com/wp-content/uploads/2019/10/policy-icon4.png',
            title: 'Giảm giá cho thành viên',
            long_title: 'Một đơn hàng trên $120.00.'
        },
        {
            img: 'https://demo-19.woovinapro.com/wp-content/uploads/2019/10/policy-icon5.png',
            title: 'Thanh toán an toàn',
            long_title: 'Tất cả các thẻ được chấp nhận.'
        },
    ]

    return (
        <>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 border rounded *:p-4 my-6">
                {
                    arr_service && arr_service?.map((value: { img: string, title: string, long_title: string }) => (
                        <div key={Math.random()} className="flex items-center text-sm gap-3">
                            <img src={value?.img} alt="loading..." />
                            <section className="flex flex-col gap-y-2 !text-xs">
                                <span>{value?.title}</span>
                                <span>{value?.long_title}</span>
                            </section>
                        </div>
                    ))
                }
            </div>
            <div className="bg-[#2F333A] grid place-items-center text-gray-100 py-4 rounded text-sm mb-6">
                <span>Ưu đãi hôm nay: GIẢM 20 đô la cho đơn hàng từ 300 đô la trở lên khi nhập mã “SNEAKER-002” + Miễn phí vận chuyển cho đơn hàng trên 60 đô la! Chi tiết ưu đãi</span>
            </div>
        </>
    )
}
