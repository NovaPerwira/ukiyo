'use client'
import { useState } from "react";

const categories = ["Food", "Drinks"];
const menuItems = {
  Food: [
    { name: "Pasta", price: "$15.00", img: "pasta.png", rating: 5 },
    { name: "French Fries", price: "$15.00", img: "fries.png", rating: 4 },
    { name: "Chicken Shawarma", price: "$15.00", img: "shawarma.png", rating: 5 },
    { name: "Fish Curry", price: "$15.00", img: "fish_curry.png", rating: 4 },
  ],
  Drinks: [
    { name: "Coca Cola", price: "$5.00", img: "coca_cola.png", rating: 5 },
    { name: "Orange Juice", price: "$7.00", img: "orange_juice.png", rating: 4 },
    { name: "Lemonade", price: "$6.00", img: "lemonade.png", rating: 5 },
    { name: "Iced Coffee", price: "$8.00", img: "iced_coffee.png", rating: 4 },
  ],
};

export default function OurMenus() {
  const [selectedCategory, setSelectedCategory] = useState("Food");

  return (
    <div className="p-8 bg-gray-100 min-h-screen text-center">
      <h2 className="text-2xl font-bold mb-6">Our Regular Menu Pack</h2>
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {menuItems[selectedCategory].map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={item.img} alt={item.name} className="w-full h-32 object-cover mb-4" />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-yellow-500">{"⭐".repeat(item.rating)}</p>
            <p className="text-gray-700 font-bold">{item.price}</p>
            <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-lg">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
