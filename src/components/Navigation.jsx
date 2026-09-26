import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <header className="navbar">
      <div className="nav-brand">
        <NavLink to="/">🦗SportsTurf Booking Portal</NavLink>
      </div>
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/turfs" className={({ isActive }) => (isActive ? 'active' : '')}>Turfs & Pricing</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink>
      </nav>
    </header>
  )
}