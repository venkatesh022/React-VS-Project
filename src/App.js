import React from 'react'
import Navbar from './MPA/Navbar'
import './App.css';
import Home from './MPA/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './MPA/About';
import Countries from './MPA/Countries';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/countries' element={<Countries />} />
      </Routes> 
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App