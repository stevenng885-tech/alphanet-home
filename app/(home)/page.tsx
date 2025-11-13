"use client"
import PrimaryButton from "@/components/button/PrimaryButton";
import ContactForm from "@/components/common/ContactForm";
import Image from "next/image";
import { FaFacebookF, FaPhoneAlt, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoStar } from "react-icons/io5";
import SwiperEffectCards from "@/components/common/SwiperEffectCards";
import SplitText from "@/components/animation/text/SplitText";
import CountUp from "@/components/animation/text/Count";
import AnimatedContent from "@/components/animation/common/AnimatedContent";
import Galaxy from "@/components/animation/background/Galaxy";

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

const feedbacks = [
  {
    avatar: "/assets/shared/avatar_1.webp",
    comment: "“Tham gia AlphaNet mới hiểu thế nào là kỷ luật và logic trong trading, học được nhiều thứ hơn cả mong đợi.”"
  },
  {
    avatar: "/assets/shared/avatar_2.webp",
    comment: "“Từ ngày vào nhóm, mình thấy cách nhìn thị trường khác hẳn – không còn vào lệnh cảm tính như trước nữa.”"
  },
  {
    avatar: "/assets/shared/avatar_3.webp",
    comment: "“Cộng đồng thật sự chất lượng, chia sẻ thực chiến, không màu mè. Cảm ơn anh em AlphaNet rất nhiều.”"
  },
  {
    avatar: "/assets/shared/avatar_4.webp",
    comment: "“Không phải tín hiệu nào cũng thắng, nhưng điều quý nhất là học được cách tư duy của trader chuyên nghiệp.”"
  },
  {
    avatar: "/assets/shared/avatar_5.webp",
    comment: "“AlphaNet giúp mình đi từ người chơi cảm tính thành người hiểu rõ rủi ro – lợi nhuận. Đúng là môi trường đáng để gắn bó lâu dài.”"
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full min-h-screen flex justify-center items-center overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 bottom-0  bg-black w-full min-h-screen">
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.5}
            glowIntensity={0.5}
            saturation={0.1}
            hueShift={240}
          />
        </div>
        <div className="container mx-auto flex flex-col py-40 sm:py-30 lg:py-20 xl:py-10 lg:grid grid-cols-3 gap-10 relative">
          <div className="flex flex-col gap-7 text-white col-span-2 text-center items-center lg:items-start lg:text-left">
            <h1 className="flex flex-col gap-7 text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              <SplitText
                text="Alpha Net"
                className=" text-[#FF6F61] text-center! lg:text-left!"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
              />
              <SplitText
                text="Bí Quyết Làm Giàu Từ Crypto"
                className=" text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white"
                delay={100}
                duration={0.7}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
            </h1>
            <div className="flex flex-col gap-7 text-base sm:text-lg lg:text-xl text-white max-w-2xl mx-auto lg:mx-0">
              <p>
                🚀 Chia sẻ chiến lược giao dịch, phân tích kỹ thuật và tín hiệu thị trường Crypto.
              </p>
              <p>
                📈 Cập nhật liên tục 24/7, đồng hành cùng trader Việt tối đa hóa lợi nhuận và x10 hiệu quả đầu tư!
              </p>
            </div>
            <div>
              <div className="flex gap-5 text-xl ">
                {
                  contacts.map((order, index) => {
                    return (
                      <a
                        href={order.href}
                        key={order.href + index}
                        target='_blank'
                        className={`cursor-pointer border rounded p-2 flex justify-center items-center text-2xl  ${order.style}`}
                      >
                        {order.icon}
                      </a>
                    )
                  })
                }
              </div>
            </div>
            <a href="#register">
              <PrimaryButton className="text-2xl px-8 py-4">
                Tham gia Alpha Net
              </PrimaryButton>
            </a>
            <div className="flex gap-5">
              <div className="text-center w-fit">
                <p className="text-4xl">
                  <CountUp
                    from={0}
                    to={5000}
                    separator=","
                    direction="up"
                    duration={0.2}
                    className="count-up-text"
                  />
                  +
                </p>
                <p>Thành Viên</p>
              </div>

              <div className="text-center w-fit">
                <p className="text-4xl">
                  <CountUp
                    from={0}
                    to={95}
                    separator=","
                    direction="up"
                    duration={0.2}
                    className="count-up-text"
                  />
                  %
                </p>
                <p>Độ Chính xác</p>
              </div>
              <div className="text-center w-fit">
                <p className="text-4xl">
                  <CountUp
                    from={0}
                    to={50}
                    separator=","
                    direction="up"
                    duration={0.2}
                    className="count-up-text"
                  />
                  +
                </p>
                <p>Bot Giao Dịch</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <SwiperEffectCards />
          </div>
        </div>
      </section>
      <section className="overflow-hidden container mx-auto py-20">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <div className="text-center flex flex-col gap-5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 uppercase tracking-widest mb-3 relative inline-block">
              MẠNG XÃ HỘI
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF6F61] to-transparent"></div>
            </h1>
            <div className="flex items-center justify-center">
              <div className="w-8 h-px bg-[#FF6F61]">
              </div>
              <div className="mx-3 w-2 h-2 bg-[#FF6F61] rounded-full">
              </div>
              <div className="w-8 h-px bg-[#FF6F61]">
              </div>
            </div>
            <div className="text-base sm:text-lg text-[#666666] mb-12 max-w-2xl mx-auto">
              THEO DÕI ALPHA NET QUA CÁC TRANG MẠNG XÃ HỘI
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {
                contacts.map((order, index) => {
                  return (
                    <a
                      key={order.href + index}
                      href={order.href}

                      target='_blank'
                      className={`space-y-2 w-full cursor-pointer uppercase flex flex-col border rounded-2xl py-10 px-14 justify-center items-center text-white ${order.style}`}
                    >
                      <span className="text-2xl sm:text-xl">
                        {order.icon}
                      </span>
                      <p className="font-bold text-sm sm:text-base">{order.title}</p>
                    </a>
                  )
                })
              }
            </div>
          </div>
        </AnimatedContent>
      </section>

      <section id="register" className="overflow-hidden py-20 bg-linear-to-br from-(--fourth) to-(--fiveth)">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <div className="container mx-auto flex justify-center">
            <div className="flex flex-col text-center gap-7 items-center max-w-3xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 drop-shadow-lg">
                🚀 ĐĂNG KÝ NHẬN TÍN HIỆU
              </h2>
              <p className="text-base sm:text-lg text-gray-800 max-w-2xl mx-auto drop-shadow-md">Để lại thông tin để nhận tín hiệu và chiến lược độc quyền từ Alpha Net!</p>
              <div className="w-full shadow-2xl/50 p-10 rounded-4xl bg-white flex flex-col gap-5 ">
                <ContactForm />
                <span className="text-sm text-gray-500 text-center">
                  🔒 Thông tin của bạn được bảo mật tuyệt đối. Chúng tôi cam kết không chia sẻ với bên thứ 3.
                </span>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <div className="shadow-2xl/50 rounded-2xl flex flex-col gap-2 items-center p-5 bg-white">
                  <div className="p-2 bg-linear-to-br from-yellow-300 to-yellow-600 rounded-xl flex items-center justify-center shadow-inner">
                    <Image
                      alt="icon"
                      width={50}
                      height={50}
                      src="/assets/svg/signal.svg"
                    />
                  </div>
                  <p className="font-bold text-gray-800 mb-2 text-lg">Tín Hiệu Nhanh</p>
                  <p className="text-gray-600 text-sm font-medium">Nhận tín hiệu trong vòng 5 phút</p>
                </div>
                <div className="shadow-2xl/50 rounded-2xl flex flex-col gap-2 items-center p-5 bg-white">
                  <div className="p-2 bg-linear-to-br from-green-300 to-green-600 rounded-xl flex items-center justify-center shadow-inner">
                    <Image
                      alt="icon"
                      width={50}
                      height={50}
                      src="/assets/svg/win.svg"
                    />
                  </div>
                  <p className="font-bold text-gray-800 mb-2 text-lg">Độ Chính Xác Cao</p>
                  <p className="text-gray-600 text-sm font-medium">95% tín hiệu sinh lời</p>
                </div>
                <div className="shadow-2xl/50 rounded-2xl flex flex-col gap-2 items-center p-3 bg-white">
                  <div className="p-2 bg-linear-to-br from-purple-300 to-purple-600 rounded-xl flex items-center justify-center shadow-inner">
                    <Image
                      alt="icon"
                      width={50}
                      height={50}
                      src="/assets/svg/crown.svg"
                    />
                  </div>
                  <p className="font-bold text-gray-800 mb-2 text-lg">Hoàn Toàn Miễn Phí</p>
                  <p className="text-gray-600 text-sm font-medium">Không phí ẩn, không cam kết</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>

      </section>

      <section className="overflow-hidden container mx-auto py-20">
        <AnimatedContent
          distance={100}
          direction="vertical"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          <div className="flex flex-col gap-5">
            <div className="text-center flex flex-col gap-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                💬 Phản Hồi Trader
              </h1>
              <p className="text-lg sm:text-xl text-[#666666] max-w-3xl mx-auto">
                Những chia sẻ thật từ cộng đồng trader đã thành công với chiến lược và tín hiệu từ Alpha Net
              </p>
            </div>
            <div className="">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={{
                  1: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
                modules={[Autoplay, Navigation]}
              >
                {
                  feedbacks.map((item, index) => {
                    return (
                      <SwiperSlide key={item.comment + index}>
                        <div className="h-full flex flex-col items-center gap-3 border rounded-xl border-gray-300 justify-center p-5">
                          <div className="rounded-full overflow-hidden w-fit">
                            <Image
                              alt="avatar"
                              src={item.avatar}
                              width={70}
                              height={70}
                            />
                          </div>
                          <div className="">
                            {item.comment}
                          </div>
                          <div className="flex gap-1 text-yellow-300">
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>
            <div className="text-center flex flex-col gap-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                🚀 Bạn muốn thành công như họ?
              </h1>
              <p className="text-lg sm:text-xl text-[#666666] max-w-3xl mx-auto">
                Tham gia cộng đồng Alpha Net ngay hôm nay để nhận được những chiến lược và tín hiệu trading chất lượng cao!
              </p>

              <div className="flex justify-center">
                <a href="#register">
                  <PrimaryButton>
                    Tham Gia Ngay
                  </PrimaryButton>
                </a>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>
    </div>
  );
}
