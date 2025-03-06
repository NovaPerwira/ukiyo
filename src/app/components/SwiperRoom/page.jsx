"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Data gambar yang berbeda untuk setiap slide

const SwiperRoom = () => {

  const images = [
    "https://i.pinimg.com/736x/c4/9a/9d/c49a9d98f0910e11f129b0f73d531dc7.jpg",
    "https://i.pinimg.com/736x/c4/9a/9d/c49a9d98f0910e11f129b0f73d531dc7.jpg",
    "https://i.pinimg.com/736x/c4/9a/9d/c49a9d98f0910e11f129b0f73d531dc7.jpg",
    "https://i.pinimg.com/736x/c4/9a/9d/c49a9d98f0910e11f129b0f73d531dc7.jpg",
    "https://i.pinimg.com/736x/c4/9a/9d/c49a9d98f0910e11f129b0f73d531dc7.jpg",
  ];
  
  return (
    <div className="flex justify-center items-center h-screen  box-border w-screen overflow-hidden">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2.5} // Menampilkan 2.5 slide
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false, // Matikan bayangan dari efek coverflow
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { 
            slidesPerView: 1, // 1 slide di mobile
            // spaceBetween: 10,
          },
          768: { 
            slidesPerView: 2, // Menampilkan 2.5 slide di tablet
            spaceBetween: 20,
          },
          1024: { 
            slidesPerView: 2.5, // Menampilkan 2.5 slide di desktop
            spaceBetween: 30,
          },
        }}
        modules={[EffectCoverflow, Pagination]}
        className="w-screen pt-8"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative overflow-hidden rounded-xl">
            <div className="relative shadow-lg overflow-hidden">
              <img
                src={image} // Setiap gambar berbeda
                alt={`Ruangan ${index + 1}`}
                className="object-cover w-full h-80 aspect-w-16 aspect-h-9 " // Gambar lebih besar
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperRoom;
