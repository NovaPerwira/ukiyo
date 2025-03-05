import { useState } from "react";
import { FaGamepad, FaHamburger, FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const games = [
  { name: "FIFA 24", image: "/images/fifa24.jpg" },
  { name: "GTA V", image: "/images/gtav.jpg" },
  { name: "Call of Duty", image: "/images/cod.jpg" },
];

const foods = [
  { name: "Burger Spesial", image: "/images/burger.jpg", price: "Rp 25.000" },
  { name: "French Fries", image: "/images/fries.jpg", price: "Rp 15.000" },
  { name: "Milkshake Coklat", image: "/images/milkshake.jpg", price: "Rp 20.000" },
];

const bikes = [
  { name: "IF Mode", image: "/images/bike1.jpg", price: "$2850", description: "A stylish and efficient folding bike designed for urban riders." },
  { name: "X-Trail", image: "/images/bike2.jpg", price: "$3200", description: "A robust off-road bike with superior suspension and durability." },
  { name: "Speedster", image: "/images/bike3.jpg", price: "$2500", description: "A lightweight bike built for speed and agility on city roads." },
];

export default function Home() {
  const [selectedBike, setSelectedBike] = useState(null);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between p-4 bg-gray-800">
        <h1 className="text-2xl font-bold">GameZone Rental</h1>
        <div className="flex gap-4">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#games" className="hover:text-yellow-400">Games</a>
          <a href="#menu" className="hover:text-yellow-400">Menu</a>
          <a href="#reservation" className="hover:text-yellow-400">Reservation</a>
        </div>
      </nav>
      
      {/* Bike Section */}
      <section className="py-12 text-center">
        <h3 className="text-2xl font-semibold">Folding Bikes</h3>
        <div className="flex justify-center gap-6 mt-6 px-10">
          {bikes.map((bike) => (
            <motion.div 
              key={bike.name} 
              className="bg-gray-800 p-4 rounded-xl w-64 cursor-pointer"
              onClick={() => setSelectedBike(bike)}
              whileHover={{ scale: 1.05 }}
            >
              <img src={bike.image} alt={bike.name} className="w-full h-40 object-cover rounded" />
              <p className="mt-2 text-lg">{bike.name}</p>
              <p className="text-yellow-400">{bike.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Bike Detail Modal with Transition */}
      <AnimatePresence>
        {selectedBike && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white text-black p-6 rounded-lg w-96"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <h2 className="text-xl font-bold">{selectedBike.name}</h2>
              <img src={selectedBike.image} alt={selectedBike.name} className="w-full h-40 object-cover rounded mt-2" />
              <p className="mt-2">{selectedBike.description}</p>
              <p className="text-yellow-600 font-semibold mt-2">{selectedBike.price}</p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={() => setSelectedBike(null)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center">
        <p>&copy; 2025 GameZone Rental. All rights reserved.</p>
      </footer>
    </div>
  );
}
