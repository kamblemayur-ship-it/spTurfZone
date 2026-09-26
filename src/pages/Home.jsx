import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero-section">
      <span className="badge">ARENA BOOKING SIMPLIFIED</span>
      <h1>Book Box Cricket & Football Turfs</h1>
      <p>
        Explore verified turf arenas across Thane, Kalyan, and Dombivli with live pricing and slot reservations.
      </p>
      <div className="hero-actions">
        <Link to="/turfs" className="btn btn-primary">Browse Arenas</Link>
        <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
      </div>
    </section>
  )
}