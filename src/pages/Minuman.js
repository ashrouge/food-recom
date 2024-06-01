import React from 'react'
import Navbar from '../components/Navbar'
import DrinkCatalogue from '../components/DrinkCatalogue'
import { useDataContext } from '../context/DataContext'
import Footer from '../components/Footer'

const Minuman = () => {
  const { allData } = useDataContext();
  const data = allData
  const drinkData = data ? data.filter(drink => drink.jenis === 'minuman')
    : [];
  console.log(drinkData); 
  return (
    <div>
      <Navbar />
      <DrinkCatalogue drinkData = {drinkData} />
      <Footer />
    </div>
  )
}

export default Minuman