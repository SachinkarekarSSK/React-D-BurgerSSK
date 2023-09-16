import React,{useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MenuSection from './components/MenuSection'
import ProductMenu from './components/ProductMenu'

function App() {
  const [burgersorDrinks, setburgersorDrinks] = useState(true)

  function drinks(){
    setburgersorDrinks(false)
  }

  function burgers(){
    setburgersorDrinks(true)
  }

  return (
    <>
      <Navbar />
      <Home />
      <MenuSection drinks = {drinks} burgers={burgers} />

      <ProductMenu burgersorDrinks={burgersorDrinks}/>
    </>
  )
}

export default App
