import React from "react";
import BlurText from "../BlurText/page";
import SplitText from '../SplitText/page';

const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  

const HeroSection = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col justify-center items-center text-center">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src="/path-to-your-video.mp4" // Ganti dengan path video yang sesuai
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 px-4 justify-center">
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
      
      {/* Scroll Down Animation */}
      <div className="absolute bottom-10 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">SCROLL DOWN</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
