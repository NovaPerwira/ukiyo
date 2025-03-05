import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import SplitText from '../SplitText/page';
import BlurText from "../BlurText/page";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Swiper3D = () => {
  const images = [
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
    "https://upload.wikimedia.org/wikipedia/en/d/df/Resident_Evil_4_remake_cover_art.jpg",
    "https://upload.wikimedia.org/wikipedia/en/d/df/Resident_Evil_4_remake_cover_art.jpg",
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
    "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$800px--t$",
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900">
      {/* Header */}
      <div className="w-full py-6 text-center text-white text-3xl  bg-transparent">
      <BlurText
        text="Explore Our Game Genres"
        delay={150}
        animateBy="words"
        direction="top"      
        className="text-2xl md:text-4xl font-bold text-orange-500 justify-center uppercase leading-tight"
        />

        <SplitText
        text="Start your gaming journey today"
        className="text-white text-lg mt-4"
        delay={50}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        />
      </div>
      

      {/* Swiper Container */}
      <div className="mt-10 w-full flex justify-center">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true} // memastikan gambar tetap di tengah
          slidesPerView="2.5"
          spaceBetween={40}

          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="w-screen" 
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            },
            640: {  
              slidesPerView: 2, 
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-80 w-80 rounded-xl overflow-hidden">
                <img
                  src={image}
                  alt={`Card ${index + 1}`}
                  className="h-full w-full object-cover rounded-xl" // Menggunakan object-cover agar gambar tetap proporsional
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Swiper3D;
