import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import Github from './components/Github'
import Journey from './components/Journey'
import './App.css'

function App() {

  return (
    <Routes>
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/github' element={<Github />}/>
      <Route path='/journey' element={<Journey />}/>
    </Route>
    </Routes>
  )
}

export default App
