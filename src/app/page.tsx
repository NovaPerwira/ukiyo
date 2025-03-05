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
    <div className='overflow-x-auto'>
    
    <Navbar />
    <HeroSection />
    <Swiper3D />
    
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
      <div className="flex flex-wrap justify-between sm:justify-between  container mx-10% ">
        
          <CardConsole />
          <CardConsole />
          <CardConsole />
        
      </div>
    </div>

    <SwiperComponent />    
    </div>
    
  );
}
