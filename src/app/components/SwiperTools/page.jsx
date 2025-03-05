import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const slides = [
  {
    title: 'Slide 1',
    text: 'Ini adalah konten dari slide pertama.',
    image: 'https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$',
  },
  {
    title: 'Slide 2',
    text: 'Ini adalah konten dari slide kedua.',
    image: 'https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$',
  },
  {
    title: 'Slide 3',
    text: 'Ini adalah konten dari slide ketiga.',
    image: 'https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$',
  },
];

export default function SwiperComponent() {
  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className=" w-[200px] rounded-md shadow-xl z-[100] relative cursor-pointer snap-start shrink-0  bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
      <div className=" uppercase text-center leading-none z-40">
        {/* <p
          style={{
            WebkitTextStroke: "1px rgb(207, 205, 205)",
            WebkitTextFillColor: "transparent",
          }}
          className="z-10 font-bold text-lg -mb-5 tracking-wider text-gray-500"
        >
          New Product
        </p> */}
        <p className="font-bold mt-5 text-xl tracking-wider text-[#495c48] z-30">
          New Product
        </p>
      </div>
      <div className=" m-4  relative z-20 after:absolute after:h-1 after:w-full after:opacity-0 after:bg-[#7b956a] after:top-8 after:left-0 after:group-hover:opacity-100 after:translate-x-1/2 after:translate-y-1/2 after:-z-20 after:group-hover:w-full after:transition-all after:duration-300 after:group-hover:origin-right after:group-hover:-translate-x-1/2 group-hover:translate-x-1/2 transition-all duration-300">
        <img src="/ConsoleAssets/ps5.png" alt="Product" className=" h-full " />
        <div className="tooltips absolute top-0 left-0 -translate-x-[10%] p-2 flex flex-col items-start gap-10 transition-all duration-300 group-hover:-translate-x-full">
          <p className="text-[#7b956a] font-semibold text-xl uppercase group-hover:delay-1000 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
            Toner
          </p>
          <ul className="flex flex-col items-start gap-2">
            {[
              "Hydration",
              "Protect Skin Barrier",
              "Reduce Wrinkles",
              "Anti Inflammatory",
            ].map((item, index) => (
              <li
                key={index}
                className={`inline-flex gap-2 items-center justify-center group-hover:delay-$
                  {200 + index * 50} transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500`}
              >
                <svg
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="3"
                  className="stroke-[#495c48]"
                  stroke="#000000"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="10"
                  width="10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <p className="text-xs font-semibold text-[#495c48]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
