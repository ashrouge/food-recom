import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Populer from '../components/Populer'
import Footer from '../components/Footer'
import { useDataContext } from '../context/DataContext'


const Index = () => {
  const { allData } = useDataContext();
  const data = allData
  return (
    <div>
      <Navbar />
      <Hero />
      <Populer data= {data} />
      <Footer />
    </div>
  )
}

export default Index