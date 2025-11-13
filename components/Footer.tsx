import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaPhoneAlt, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import PrimaryButton from './button/PrimaryButton';


const contacts = [
    {
        title: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100079515246834",
        icon: <FaFacebookF />,
        style: "bg-blue-700"
    },
    {
        title: "Phone",
        href: "tel:0772086666",
        icon: <FaPhoneAlt />,
        style: "bg-green-500"
    },
    {
        title: "Zalo",
        href: "https://zalo.me/g/rrzpaz468",
        icon: <SiZalo />,
        style: "bg-blue-600"
    },
    {
        title: "Telegram",
        href: "https://t.me/congdongalphanet",
        icon: <FaTelegramPlane />,
        style: "bg-blue-400"
    },
    {
        title: "Tiktok",
        href: "https://www.tiktok.com/search?q=ALPHANET&t=1760590899718",
        icon: <FaTiktok />,
        style: "bg-black"
    },

]
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <Link className="flex items-center mr-3 hover:opacity-80 transition-opacity duration-300" href="/">
                                <div className="w-12 h-12 bg-linear-to-br from-(--fourth) to-(--fiveth) rounded-xl flex items-center justify-center">
                                    <Image
                                        alt="Logo"
                                        loading="lazy"
                                        width="24"
                                        height="24"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                                        style={{
                                            color: "transparent"
                                        }}
                                        src="/assets/common/logo.webp"
                                    />
                                </div>
                            </Link>
                            <div>
                                <h3 className="text-xl font-bold text-white">
                                    Alpha Net
                                </h3>
                                <p className="text-sm text-gray-400">
                                    TRADER
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Alpha Net – Cộng đồng giao dịch crypto dành cho trader Việt. Cập nhật chiến lược, phân tích kỹ thuật và tín hiệu thị trường mỗi ngày. Tham gia hội nhóm để cùng học hỏi và tối ưu hiệu quả đầu tư.
                        </p>
                        <div className="flex space-x-4">
                            {
                                contacts.map((order, index) => {
                                    return (
                                        <a
                                            key={order.href + index}
                                            href={order.href}

                                            target='_blank'
                                            className={`cursor-pointer uppercase flex flex-col border p-2 rounded justify-center items-center  w-fit text-white ${order.style}`}
                                        >
                                            <span >
                                                {order.icon}
                                            </span>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">
                            Liên Kết Nhanh
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#FF6F61] transition-colors duration-300">
                                    Trang Chủ
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-[#FF6F61] transition-colors duration-300" href="/gioi-thieu">
                                    Giới Thiệu
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-[#FF6F61] transition-colors duration-300" href="/lien-he">
                                    Liên Hệ
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-[#FF6F61] transition-colors duration-300" href="/cctv">
                                    CC TV
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-[#FF6F61] transition-colors duration-300" href="/dich-vu">
                                    Dịch Vụ
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 hover:text-[#FF6F61] transition-colors duration-300" href="/bxh">
                                    BXH
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">
                            Dịch Vụ
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#FF6F61] transition-colors duration-300">
                                    Thông Tin Thị Trường
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#FF6F61] transition-colors duration-300">
                                    Phân Tích Kỹ Thuật
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#FF6F61] transition-colors duration-300">
                                    Tín Hiệu Thị Trường
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#FF6F61] transition-colors duration-300">
                                    Tư Vấn 1:1
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">
                            Nhận Tư Vấn Giao Dịch
                        </h4>
                        <p className="text-gray-400 mb-4">
                            Đăng ký Gmail để nhận chiến lược &amp; tín hiệu mới nhất từ Alpha Net.
                        </p>
                        <div className="space-y-3 mb-4">
                            <div className="relative">
                                <input type="email" placeholder="Nhập địa chỉ Gmail của bạn" className="w-full px-4 py-4 pl-12 bg-gray-800/50 border-2 border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#FF6F61] focus:bg-gray-800 transition-all duration-300 backdrop-blur-sm" />
                                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <CiMail />
                                </div>
                            </div>
                            <PrimaryButton className="w-full text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg shadow-[#FF6F61]/20 relative overflow-hidden group">
                                ĐĂNG KÝ NGAY
                            </PrimaryButton>
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                            <FaCheck className='text-green-500 mr-2' />
                            Miễn phí, có thể hủy bất kỳ lúc nào
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#FF6F61]/20 rounded-lg flex items-center justify-center mr-4">
                            <FaPhoneAlt />
                        </div>
                        <div>
                            <h5 className="text-white font-semibold">
                                HOTLINE
                            </h5>
                            <p className="text-gray-400">
                                0772086666
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#6AD9CE]/20 rounded-lg flex items-center justify-center mr-4">
                            <CiMail />
                        </div>
                        <div>
                            <h5 className="text-white font-semibold">
                                Gmail
                            </h5>
                            <p className="text-gray-400">
                                truyenthongalpha01@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                            <IoMdTime />
                        </div>
                        <div>
                            <h5 className="text-white font-semibold">
                                Hỗ Trợ
                            </h5>
                            <p className="text-gray-400">
                                24/7 Online
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 Alpha Net. All rights reserved. |
                            <Link href="/disclaimer" className="hover:text-[#FF6F61] transition-colors duration-300 ml-1">
                                Điều Khoản
                            </Link>
                            |
                            <Link href="/privacy" className="hover:text-[#FF6F61] transition-colors duration-300 ml-1">
                                Bảo Mật
                            </Link>
                        </p>
                        <p className="text-gray-400 text-sm mt-2 md:mt-0">
                            Made with
                            <span className="text-red-500">
                                ❤️
                            </span>
                            for Traders
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer