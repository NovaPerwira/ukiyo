'use client'
import CircularGalery from '../components/CircularGalery/page'
import Navbar from '../components/Navbar/page'
import BlurText from '../components/BlurText/page'
import SplitText from '../components/SplitText/page'
import ProductSlider from '../components/ProductSlider/page'

export default function Games () {
  const handleAnimationComplete = () => {
    console.log("Animation completed");
  };

  return (
    <>
      <Navbar />

      <div className="relative h-[60vh] w-screen flex flex-col justify-center items-center text-center">
        {/* Background Video */}
        

        <div className="relative z-10  px-4 justify-center">
          <BlurText
            text="THE MOST FINEST FAMILY FRIENDLY GAMING SPACE"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl md:text-6xl font-bold text-orange-500 justify-center uppercase leading-tight"
          />

          <SplitText
            text="Ikuzo Playstation | Jl. Kosar, Pasir Endah, Ujung Berung, Bandung"
            className="text-white text-lg mt-4"
            delay={50}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
      </div>

        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGalery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>
      
        <ProductSlider />
    </>
  )
}
