// React component (Home.js)
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

export default function Home() {
  const loadData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/foodData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const [foodItems, foodCategory] = await response.json();
      console.log(foodItems, foodCategory);
      // Update state or perform other actions with the data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <Cards />
      <Footer />
    </div>
  );
}
