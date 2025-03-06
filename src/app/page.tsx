'use client'
import Navbar from './components/Navbar/page'
import Swiper3D from './components/Swiper3D/page'
import SwiperRoom from './components/SwiperRoom/page'
import Carousel from './components/Carousel/page'
import ReservationForm from './components/ReservationForm/page'
import HeroSection from './components/HeroSection/page'
import FoodMenu from './components/FoodSection/page'
import CircularGalery from './components/CircularGalery/page'
import BlurText from './components/BlurText/page'
import SplitText from './components/SplitText/page'
import CardConsole from './components/cardPS/page'
import SwiperComponent from './components/SwiperTools/page'

export default function Home() {
  return (
    <div className='overflow-x-auto bg-white'>
    
    <Navbar />
    <HeroSection />
    <CardConsole />
    <Swiper3D />
    
    
    
   <SwiperRoom />
   
   {/* <ReservationForm /> */}
   <FoodMenu />
   <div style={{ height: '600px', position: 'relative' }}>
      <CircularGalery bend={3} textColor="#ffffff" borderRadius={0.05} />
    </div>

   

    <div style={{ height: '600px', position: 'relative' }}>
      <Carousel
        baseWidth={300}
        autoplay={true}
        autoplayDelay={3000}
        pauseOnHover={true}
        loop={true}
        round={false}
      />
      
      <Carousel
        baseWidth={300}
        autoplay={true}
        autoplayDelay={3000}
        pauseOnHover={true}
        loop={true}
        round={false}
      />

      <Carousel
        baseWidth={300}
        autoplay={true}
        autoplayDelay={3000}
        pauseOnHover={true}
        loop={true}
        round={false}
      />
    </div>
    
    <div className="">
      <div className=" ">
        
          {/* <CardConsole /> */}
          {/* <CardConsole /> */}
          
        
      </div>
    </div>

    <SwiperComponent />    
    </div>
    
  );
}
