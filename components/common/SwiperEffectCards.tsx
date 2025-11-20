import Image from 'next/image';
import { Autoplay, EffectCards } from 'swiper/modules';
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import PrimaryButton from '../button/PrimaryButton';

type TypeEspertos = {
    avatar: string
    name: string
    description: string
    href: string
}

const espertos = [
    {
        avatar: "/assets/shared/avatar/ThinhPhat.webp",
        name: "Thịnh Phát",
        description: "Trader 8 year experience  - Forex / Crypto Coacher",
        href: "https://zalo.me/0925887536"
    },
    {
        avatar: "/assets/shared/avatar/mimi.webp",
        name: "Mimi",
        description: "Trader 5 year experience  - Crypto Coacher",
        href: "https://zalo.me/0794229302"
    },
    {
        avatar: "/assets/shared/avatar/hieutrinh.webp",
        name: "Hiếu Trịnh",
        description: "Trader 6 year experience  - Forex / Crypto Coacher",
        href: "https://zalo.me/0589344778"
    },
    {
        avatar: "/assets/shared/avatar/quocminh.webp",
        name: "Quốc Minh",
        description: "Trader 5 year experience  - Crypto - Forex Coacher / Speaker",
        href: "https://zalo.me/0925887549"
    },
    {
        avatar: "/assets/shared/avatar/den.jpg",
        name: "Thợ Trader",
        description: "Trader 5 year experience  - Crypto Coacher / Speaker",
        href: "https://zalo.me/0798378625"
    },

]
const shuffle = (array: Array<TypeEspertos>) => {
    let currentIndex = array.length;
    while (currentIndex != 0) {

        const randomIndex = Math.floor(Math.random() * currentIndex);
        console.log(randomIndex)
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array

}

const SwiperEffectCards = () => {
    const newArr = shuffle(espertos)
    return (
        <Swiper
            pagination={true}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
            loop={true}
            spaceBetween={30}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
        >
            {
                newArr.map((item, index) => {
                    return (
                        <SwiperSlide key={item.name + index}>
                            <a href={item.href} target='_blank' className='bg-black backdrop-blur-md rounded-4xl flex flex-col gap-2 p-5 '>
                                <div className='overflow-hidden max-h-[500px] relative '>
                                    <Image
                                        className='w-full bg-cover overflow-hidden rounded-4xl'
                                        src={item.avatar}
                                        width={1280}
                                        height={720}
                                        alt='avatar'
                                    />
                                </div>
                                <div className='text-white text-center text-4xl'>
                                    {item.name}
                                </div>
                                <div className='text-gray-500 text-center '>
                                    {item.description}
                                </div>
                                <PrimaryButton className='text-white'>
                                    Liên Hệ Ngay !
                                </PrimaryButton>
                            </a>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default SwiperEffectCards