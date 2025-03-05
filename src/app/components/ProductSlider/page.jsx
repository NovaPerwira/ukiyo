"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import SplitText from '../SplitText/page';
import BlurText from "../BlurText/page";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const images = [
  "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
  "https://upload.wikimedia.org/wikipedia/en/d/df/Resident_Evil_4_remake_cover_art.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/df/Resident_Evil_4_remake_cover_art.jpg",
  "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
  "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
];

const ProductSlider = () => {
  return (
    <div className="flex pt-8 flex-col overflow-visible items-center h-screen bg-gray-900">
      {/* Header */}
      <div className="w-full py-6 text-center text-white">
        <BlurText
          text="Explore Our Game Genres"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-2xl md:text-4xl font-bold text-orange-500 uppercase"
        />

        <SplitText
          text="Start your gaming journey today"
          className="text-white text-lg mt-4 overflow-visible"
          delay={50}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>

      {/* Swiper Container */}
      <div className=" w-full h-screen overflow-visible flex justify-center">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={200}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="w-full z-10 overflow-visible"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.8 },
            1024: { slidesPerView: 2 },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center p-5 items-center h-full w-96 rounded-xl overflow-visible l transition-all duration-300 hover:scale-105">
                <img
                  src={image}
                  alt={`Game ${index + 1}`}
                  className="h-full w-full object-cover rounded-xl"
                />
                <img
                  src={image}
                  alt={`Game ${index + 1}`}
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
