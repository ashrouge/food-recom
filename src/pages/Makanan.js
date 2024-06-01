import React from 'react'
import Navbar from '../components/Navbar'
import FoodCatalogue from '../components/FoodCatalogue'
import Footer from '../components/Footer'
import { useDataContext } from '../context/DataContext'

const Makanan = () => {
  const { allData } = useDataContext();
  const data = allData
  const foodData = data ? data.filter(food => food.jenis === 'makanan')
    : [];
  console.log(foodData);  
  return (
    <div>
      <Navbar />
      <FoodCatalogue foodData={foodData} />
      <Footer />
    </div>
  )
}

export default Makanan