import React,{useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MenuSection from './components/MenuSection'
import ProductMenu from './components/ProductMenu'
import CustomizeSection from './components/CustomizeSection'
import SkeletonLodingCard from './components/SkeletonLoadingCard'

function App() {
  const [burgersorDrinks, setburgersorDrinks] = useState(true)
  const [BorD, setBorD] = useState("Burger's")
  const [isLoading, setisLoading] = useState(true)

  function drinks(){
    setburgersorDrinks(false)
    setBorD("Drink's")
  }

  function burgers(){
    setburgersorDrinks(true)
    setBorD("Burger's")
  }

  

  return (
    <>
      <Navbar />
      <Home />
      <MenuSection drinks = {drinks} burgers={burgers} />

      <ProductMenu burgersorDrinks={burgersorDrinks} title={BorD}/>
      <CustomizeSection />

    </>
  )
}

export default App
