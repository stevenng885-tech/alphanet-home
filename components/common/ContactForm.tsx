"use client"
import React from 'react'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useForm, SubmitHandler } from "react-hook-form"
import { firebaseFireStore } from '@/utils/firebase';
import { toast } from 'react-toastify';
import { IoIosWarning } from 'react-icons/io';
import PrimaryButton from '../button/PrimaryButton';
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";

type Inputs = {
    name: string
    email: string
    phone: string
    source: string
    message: string
}
const rules = {
    name: {
        required: "Vui lòng Nhập Tên !!",
        minLength: { value: 2, message: "Tên Ít nhất phải có 2 ký tự" },
        validate: (v: string) =>
            !/^\d+$/.test(v.trim()) || "Tên không thể chỉ là số",
    },
    phone: {
        required: "Vui lòng nhập số điện thoại !!",
        // VN numbers: 0xxxxxxxxx or +84xxxxxxxxx, prefixes 3/5/7/8/9
        pattern: {
            value: /^(?:\+?84|0)(?:3|5|7|8|9)\d{8}$/,
            message: "Vui lòng nhập đúng Số điện thoại !!",
        },
    },
    email: {
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            message: "email Không đúng định dạng !!",
        },
    },
} as const;

const ContactForm = () => {
    const [isLoading, setIsLoading] = React.useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        try {
            setIsLoading(true)
            await addDoc(collection(firebaseFireStore, "contacts"), {
                ...data,
                createdDate: serverTimestamp(),
                message: "user data"
            })
            toast.success("Thành Công, Chúng Tôi Sẽ Sớm Liên Hệ Với Bạn!!")
            setIsLoading(false)
            reset()
        } catch (error) {
            setIsLoading(false)
            toast.info("Hãy Thử Liên Hệ Với Chúng Tôi Bằng Phương Thức Khác!!")
            console.log(error)
        }
    }
    return (
        <form className="space-y-4 text-left" onSubmit={handleSubmit(onSubmit)} >
            <label htmlFor='name' className="hover:text-[#FF6F61] flex items-center text-xl gap-2 font-semibold text-gray-700 mb-2 group-focus-within:text-purple-600 transition-colors duration-300">
                <FaUser />
                <span className='capitalize'>
                    Tên của bạn
                </span>
            </label>
            <input
                id="name"
                {...register("name", rules.name)}
                type="text"
                placeholder="Họ và Tên"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-[#FF6F61] focus:ring-4 focus:ring-[#FF6F61]/20 transition-all duration-300 text-gray-900 placeholder-gray-500 text-base outline-none"
            >
            </input>
            {
                errors.name && <div className='flex justify-start items-center gap-1 text-sm text-red-500 mx-1 capitalize'>
                    <IoIosWarning /> {errors.name.message}
                </div>
            }
            <label htmlFor='phone' className="hover:text-[#6AD9CE] flex items-center text-xl gap-2 font-semibold text-gray-700 mb-2 group-focus-within:text-purple-600 transition-colors duration-300">
                <FaPhoneAlt />
                <span className='capitalize'>
                    Số Điện thoại của bạn
                </span>
            </label>
            <input
                id="phone"
                {...register("phone", rules.phone)}
                type="tel"
                placeholder="Số điện thoại"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-[#6AD9CE] focus:ring-4 focus:ring-[#6AD9CE]/20 transition-all duration-300 text-gray-900 placeholder-gray-500 text-base outline-none"
            />
            {
                errors.phone && <div className='flex justify-start items-center gap-1 text-sm text-red-500 mx-1 capitalize'>
                    <IoIosWarning /> {errors.phone.message}
                </div>
            }
            <label htmlFor='email' className="hover:text-purple-600 flex items-center text-xl gap-2 font-semibold text-gray-700 mb-2 group-focus-within:text-purple-600 transition-colors duration-300">
                <MdEmail />
                <span className='capitalize'>
                    Email Của Bạn
                </span>
            </label>
            <input
                id="email"
                {...register("email", rules.email)}
                type="email"
                placeholder="Email ( Có thể bỏ trống )"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-purple-600 focus:ring-4 focus:ring-purple-600/20 transition-all duration-300 text-gray-900 placeholder-gray-500 text-base outline-none"
            />
            {
                errors.email && <div className='flex justify-start items-center gap-1 text-sm text-red-500 mx-1 capitalize'>
                    <IoIosWarning /> {errors.email.message}
                </div>
            }

            <label htmlFor='source' className="hover:text-green-600 flex items-center text-xl gap-2 font-semibold text-gray-700 mb-2 group-focus-within:text-green-600 transition-colors duration-300">
                <FaQuestion />
                <span className='capitalize'>
                    Bạn Biết Chúng Tôi qua đâu
                </span>
            </label>
            <input
                id="source"
                {...register("source")}
                type="text"
                placeholder="Bạn Biết Chúng Tôi qua đâu (Có Thể Bỏ Trống)"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-green-600 focus:ring-4 focus:ring-green-600/20 transition-all duration-300 text-gray-900 placeholder-gray-500 text-base outline-none"
            />
            <div className='smoothly-scale'>
                <PrimaryButton isLoading={isLoading} type='submit' className='w-full py-4'  >
                    Đăng ký tham gia ngay!
                </PrimaryButton>
            </div>
        </form>
    )
}

export default ContactForm