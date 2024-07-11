
import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../Component/Pages/Home/Home'
import Plans from '../Component/Pages/Plans/Plans'
import Courses from '../Component/Pages/Courses/Course'
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'

import AboutUs from '../Component/Pages/AboutUs/AboutUs'
import Contact from '../Component/Pages/ContactUs/Contact'

import Support from '../Component/Pages/Support/Support'
import GetStarted from '../Component/Pages/GetStarted/GetStarted'

function LayoutRoutes() {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Services' element={<Plans/>} />
          <Route path='/Course' element={<Courses/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/support'  element={<Support/>} />
          <Route path='/getstarted'  element={<GetStarted/>} />
       </Routes>
      <Footer/>
    </Router>
  )
}

export default LayoutRoutes