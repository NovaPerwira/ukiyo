import Image from 'next/image'
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/parallax';
import 'swiper/css/mousewheel';
import SplitText from '../SplitText/page';

const products = [
  {
    id: 1,
    name: "PS5 Console",
    image: "/ConsoleAssets/ps5.png",

  },
  {
    id: 2,
    name: "PS5 Pro",
    image: "/ConsoleAssets/ps5.png",
  },
  {
    id: 3,
    name: "DualSense Wireless Controller",
    image: "/ConsoleAssets/ps5.png",
  },
  {
    id: 4,
    name: "PULSE Elite Wireless Headset",
    image: "/ConsoleAssets/ps5.png",
  },
  {
    id: 5,
    name: "PULSE Explore Wireless Earbuds",
    image: "/ConsoleAssets/ps5.png",
  },
  {
    id: 6,
    name: "DualSense Edge",
    image: "/ConsoleAssets/ps5.png",
  },
];

export default function ConsoleCard() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="flex flex-col  items-center p-6 w-full mx-6%">
       <div className="flex flex-col lg:flex-row-reverse items-center lg:items-center w-full">
        {/* Container untuk Gambar */}
        <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Container untuk Teks */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          {/* <h1 className="text-2xl font-bold" data-swiper-parallax="-100">
            {selectedProduct.name}
          </h1> */}
          <SplitText
        text={selectedProduct.name}
        className="text-4xl text-black font-bold"
        delay={50}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
        
        />
          <p className="text-gray-600 mb-6" data-swiper-parallax="-200">
            Experience an all-new generation of incredible PlayStation games.
          </p>
          <div
            className="mt-6 flex gap-4 justify-center lg:justify-start"
            data-swiper-parallax="-300"
          >
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Find out more
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
              Buy now
            </button>
          </div>
        </div>
      </div>

      <div className="w-full order-first lg:order-last mt-6 lg:mt-12 lg:mt-20">
        <Swiper
          modules={[Parallax, Mousewheel]}
          spaceBetween={20}
          slidesPerView={3}
          loop={false}
          parallax={true}
          mousewheel={{ forceToAxis: true }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <button
                className={`p-2 border-2 rounded-lg ${
                  selectedProduct.id === product.id ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => setSelectedProduct(product)}
                data-swiper-parallax="-100"
              >
                <img src={product.image} alt={product.name} className="w-36 object-contain" />
                <p className='text-center text-black mt-2 font-medium'>{product.name}</p>
              </button>
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}



// import Image from 'next/image'
// import React from "react";


// const CardConsole = () => {
//   return (
//     <div className=" w-[300px] rounded-md cursor-pointer   bg-white flex flex-col items-center justify-center  duration-300 group">
//       <div className=" uppercase text-center leading-none z-40">
//         {/* <p
//           style={{
//             WebkitTextStroke: "1px rgb(207, 205, 205)",
//             WebkitTextFillColor: "transparent",
//           }}
//           className="z-10 font-bold text-lg -mb-5 tracking-wider text-gray-500"
//         >
//           New Product
//         </p> */}
//         <p className="font-bold mt-5 text-xl tracking-wider text-[#495c48] z-30">
//           New Product
//         </p>
//       </div>
//       <div className=" m-4  relative z-20 after:absolute after:h-1 after:w-full after:opacity-0 after:bg-[#7b956a] after:top-8 after:left-0 after:group-hover:opacity-100 after:translate-x-1/2 after:translate-y-1/2 after:-z-20 after:group-hover:w-full after:transition-all after:duration-300 after:group-hover:origin-right after:group-hover:-translate-x-1/2 group-hover:translate-x-1/2 transition-all duration-300">
//         <img src="/ConsoleAssets/ps5.png" alt="Product" className=" h-full " />
//         <div className="tooltips absolute top-0 left-0 -translate-x-[10%] p-2 flex flex-col items-start gap-10 transition-all duration-300 group-hover:-translate-x-full">
//           <p className="text-[#7b956a] font-semibold text-xl uppercase group-hover:delay-1000 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
//             Toner
//           </p>
//           <ul className="flex flex-col items-start gap-2">
//             {[
//               "Hydration",
//               "Protect Skin Barrier",
//               "Reduce Wrinkles",
//               "Anti Inflammatory",
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 className={`inline-flex gap-2 items-center justify-center group-hover:delay-$
//                   {200 + index * 50} transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500`}
//               >
//                 <svg
//                   strokeLinejoin="round"
//                   strokeLinecap="round"
//                   strokeWidth="3"
//                   className="stroke-[#495c48]"
//                   stroke="#000000"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   height="10"
//                   width="10"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
//                   <polyline points="22 4 12 14.01 9 11.01"></polyline>
//                 </svg>
//                 <p className="text-xs font-semibold text-[#495c48]">{item}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardConsole;
