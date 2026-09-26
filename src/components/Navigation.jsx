import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <header className="navbar">
      <div className="nav-brand">
        <NavLink to="/">Sports<span>Turf</span></NavLink>
      </div>
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
        <NavLink to="/turfs" className={({ isActive }) => (isActive ? 'active' : '')}>Turfs & Pricing</NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
      </nav>
    </header>
  )
}