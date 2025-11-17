import PrimaryButton from '@/components/button/PrimaryButton'
import Image from 'next/image'
import React from 'react'
import { FaRegHandPointer } from "react-icons/fa";

const Page = () => {
    return (
        <div>
            <section className="container mx-auto py-12 lg:py-30 ">
                <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            <span className="text-transparent bg-linear-to-r from-[#FF6F61] to-[#FF8E53] bg-clip-text">
                                DỊCH VỤ
                            </span>
                            <br />
                            <span className="text-xl sm:text-2xl lg:text-3xl text-gray-800">
                                Giải Pháp Toàn Diện Cho Trader
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                            🚀
                            <strong>
                                Alpha Net
                            </strong>
                            cung cấp đầy đủ các dịch vụ từ
                            <strong className="text-[#FF6F61]">
                                cộng đồng giao dịch
                            </strong>
                            ,
                            <strong className="text-green-600">
                                khóa học đào tạo
                            </strong>
                            đến
                            <strong className="text-blue-600">
                                công nghệ bot trading
                            </strong>
                            chuyên nghiệp!
                        </p>
                    </div>
                </div>
            </section>
            <section className='container mx-auto py-12 lg:py-30 flex flex-col'>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='flex flex-col gap-2 bg-linear-to-br from-[#0a1624] via-[#18304b] to-[#2366a2] border-2 border-[#3ecfff] rounded-2xl shadow-lg p-6 items-center text-center transition-all duration-300 hover:shadow-xl cursor-default'>
                        <Image
                            className='w-full object-cover rounded-xl mb-4 border border-[#3ecfff]/50'
                            width={500}
                            height={500}
                            src="/assets/shared/indicator_1.jpg"
                            alt="img"
                        />
                        <h3 className="text-2xl font-bold text-[#3ecfff] mb-2">
                            Alpha Net Indicator Pro Buy Sell Signal
                        </h3>
                        <p className="text-blue-100 text-base mb-4">
                            Chỉ báo kết hợp 5 thành phần kỹ thuật quan trọng và tín hiệu màu nến để đưa ra các điểm vào lệnh có độ chính xác cao. Hệ thống đã được kiểm chứng qua quá trình backtest dài hạn và duy trì tỷ lệ thắng vượt 80% trong các điều kiện thị trường có xu hướng.
                        </p>
                        <PrimaryButton>
                            <FaRegHandPointer />  Hướng dẫn sử dụng
                        </PrimaryButton>
                    </div>
                    <div className='gap-2 bg-linear-to-br from-[#0a1624] via-[#18304b] to-[#2366a2] border-2 border-[#3ecfff] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl cursor-default'>
                        <Image
                            className='w-full object-cover rounded-xl mb-4 border border-[#3ecfff]/50'
                            width={500}
                            height={500}
                            src="/assets/shared/indicator_2.jpg"
                            alt="img"
                        />
                        <h3 className="text-2xl font-bold text-[#3ecfff] mb-2">
                            Alpha Net Liquidty Hunter
                        </h3>
                        <p className="text-blue-100 text-base mb-4">
                            Chỉ báo giao dịch tiên tiến dựa trên nguyên lý Smart Money Concepts và kỹ thuật ICT Turtle Soup, chuyên dùng để phát hiện các cú quét thanh khoản (liquidity sweep) tại những vùng nhạy cảm của thị trường. Sau đó, hệ thống sẽ xác nhận chuyển đổi cấu trúc thị trường (MSS – Market Structure Shift) để đưa ra tín hiệu vào lệnh có xác suất cao.
                        </p>
                        <PrimaryButton>
                            <FaRegHandPointer />   Hướng dẫn sử dụng
                        </PrimaryButton>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page