import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
