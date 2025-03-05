'use client'
import React from "react";

const FoodSection = () => {
  return (
    <div className="bg-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row flex flex-col-reverse">
        {/* Right Side - Image (Moves above on small screens) */}
        <div className="flex justify-center md:order-2 order-1">
          <img
            src="/chicken-dish.png"
            alt="Roasted Chicken"
            className="w-80 h-80 object-cover rounded-full border-4 border-orange-500"
          />
        </div>
        
        {/* Left Side */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900">
            It’s not just Food, It’s an Experience.
          </h1>
          <p className="mt-4 text-gray-600">Book a table and enjoy delicious meals.</p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md">
              View Menu
            </button>
          </div>
          <div className="mt-4 flex items-center justify-center md:justify-start gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
            </div>
            <p className="text-gray-700">5k+ Reviews by users</p>
          </div>
        </div>
      </div>
      
      {/* Food Items */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="shadow-lg rounded-lg p-4 bg-white flex flex-col items-center">
            <img
              src="/salad.png"
              alt="Tomato Salad"
              className="w-32 h-32 object-cover rounded-full"
            />
            <h3 className="mt-4 text-lg font-semibold">Tomato Salad</h3>
            <p className="text-gray-500">Vegetable</p>
            <p className="mt-2 text-xl text-gray-950 font-bold">$20</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodSection;
