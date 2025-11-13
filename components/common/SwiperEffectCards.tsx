import Image from 'next/image';
import { Autoplay, EffectCards } from 'swiper/modules';
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';

const espertos = [
    {
        avatar: "/assets/shared/avatar/hieutrinh.jpg",
        name: "Hiếu Trịnh",
        description: "Trader 6 year experience  - Forex / Crypto Coacher",
        href: "https://zalo.me/0589344778"
    },
    {
        avatar: "/assets/shared/avatar/quocminh.jpg",
        name: "Quốc Minh",
        description: "Trader 5 year experience  - Crypto - Forex Coacher / Speaker",
        href: "https://zalo.me/0925887549"
    },
    {
        avatar: "/assets/shared/avatar/mimi.jpg",
        name: "Mimi",
        description: "Trader 5 year experience  - Crypto Coacher",
        href: "https://zalo.me/0794229302"
    },
    {
        avatar: "/assets/shared/avatar/ThinhPhat1.jpg",
        name: "Thịnh Phát",
        description: "Trader 8 year experience  - Forex / Crypto Coacher",
        href: "https://zalo.me/0925887536"
    },
]

const SwiperEffectCards = () => {
    return (
        <Swiper
            effect={'flip'}
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
                espertos.map((item, index) => {
                    return (
                        <SwiperSlide key={item.name + index}>
                            <a href={item.href} target='_blank' className='bg-black rounded-4xl flex flex-col gap-2 pb-2'>
                                <div className='overflow-hidden max-h-[500px]'>
                                    <Image
                                        className='w-full bg-cover overflow-hidden rounded-4xl '
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
                            </a>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default SwiperEffectCards