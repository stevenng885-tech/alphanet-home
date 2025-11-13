import React from 'react'

const Home = () => {
    return (
        <React.Fragment>
            <section className='py-16 sm:py-20 bg-linear-to-br from-(--second) to-(--thirth)'>
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-transparent bg-linear-to-r from-[#FF6F61] to-[#FF8E53] bg-clip-text">
                            LIÊN HỆ
                        </span>
                        <br />
                        <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-800">
                            Kết Nối Với Đội Ngũ Chuyên Gia
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                        🚀 <strong>Thỏ Trader</strong>
                        luôn sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ ngay để được
                        <strong className="text-[#FF6F61]">
                            tư vấn chuyên nghiệp
                        </strong> và
                        <strong className="text-green-600">
                            bắt đầu hành trình trading thành công
                        </strong>!
                    </p>
                </div>
            </section>

            <section className="py-16 sm:py-20 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
                            📞 Phương Thức Liên Hệ
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Chọn cách liên hệ phù hợp nhất với bạn
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <a href="tel:0778466662" className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-[#FF6F61] to-[#FF8E53] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    📞
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                                    Điện Thoại
                                </h3>
                                <p className="text-[#FF6F61] font-semibold mb-2">
                                    077.84.66662
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Hỗ trợ 24/7, gọi ngay để được tư vấn
                                </p>
                            </div>
                        </a>
                        <a href="mailto:truyenthongalpha01@gmail.com" className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-[#6AD9CE] to-[#4FC3F7] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    📧
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                                    Email
                                </h3>
                                <p className="text-[#FF6F61] font-semibold mb-2">
                                    truyenthongalpha01@gmail.com
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Gửi email để nhận tư vấn chi tiết
                                </p>
                            </div>
                        </a>

                        <a href="t.me/@cryptoVn" className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-[#0088CC] to-[#00B4DB] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    💬
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                                    Telegram
                                </h3>
                                <p className="text-[#FF6F61] font-semibold mb-2">
                                    @thotradercoin01
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Kết nối trực tiếp với đội ngũ chuyên gia
                                </p>
                            </div>
                        </a>

                        <a href="alphanet.vn" className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    🌐
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                                    Website
                                </h3>
                                <p className="text-[#FF6F61] font-semibold mb-2">
                                    thotrader.vn
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Truy cập để xem thêm thông tin
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <section className='py-16 sm:py-20 bg-linear-to-br from-(--second) to-(--thirth)'>
                <div className='container mx-auto'>

                </div>
            </section>
        </React.Fragment>
    )
}

export default Home