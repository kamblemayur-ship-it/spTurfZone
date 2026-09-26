import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Turfs from './pages/Turfs'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import './App.css'

export default function App() {
  return (
    <div className="app-container">
      <Navigation />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/turfs" element={<Turfs />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}