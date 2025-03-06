'use client'
import React from "react";

import { useState, useEffect } from "react";

const FoodSection = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function fetchFoods() {
      // Contoh jika ingin mengambil dari API
      // const response = await fetch("/api/foods");
      // const data = await response.json();
      // setFoods(data);

      // Data statis sementara sebelum ada backend
      setFoods([
        { id: 1, name: "Tomato Salad", category: "Vegetable", price: 20, image: "/salad.png" },
        { id: 2, name: "Cheese Burger", category: "Fast Food", price: 15, image: "/burger.png" },
        { id: 3, name: "Spaghetti", category: "Pasta", price: 18, image: "/spaghetti.png" },
        { id: 4, name: "Fruit Bowl", category: "Dessert", price: 12, image: "/fruit-bowl.png" }
      ]);
    }
    fetchFoods();
  }, []);



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
      {foods.map((food) => (
        <div key={food.id} className="shadow-lg rounded-lg p-4 bg-white flex flex-col items-center">
          <img src={food.image} alt={food.name} className="w-32 h-32 object-cover rounded-full" />
          <h3 className="mt-4 text-lg font-semibold">{food.name}</h3>
          <p className="text-gray-500">{food.category}</p>
          <p className="mt-2 text-xl text-gray-950 font-bold">${food.price}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FoodSection;
