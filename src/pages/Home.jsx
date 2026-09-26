import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const stats = [
    { id: 1, number: "9+", label: "Verified Turfs", detail: "Thane, Kalyan & Dombivli" },
    { id: 2, number: "₹0", label: "Convenience Fee", detail: "Direct arena hourly pricing" },
    { id: 3, number: "Instant", label: "Slot Confirmation", detail: "Live booking receipt issued" }
  ]

  return (
    <div>
      <div className="hero-card">
        <h1>Book Box Cricket & Football Turfs</h1>
        <p>
          Explore verified turf arenas across Thane, Kalyan, and Dombivli with live pricing and slot reservations.
        </p>
        <div className="hero-actions">
          <Link to="/turfs" className="btn-green">Browse Arenas</Link>
          <Link to="/contact" className="btn-secondary">Get In Touch</Link>
        </div>
      </div>

      <div className="section-title">Platform Highlights</div>
      <div className="about-grid">
        {stats.map((stat) => (
          <div key={stat.id} className="info-card" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', color: '#166534', marginBottom: '4px' }}>
              {stat.number}
            </h2>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>{stat.label}</h3>
            <p className="card-location" style={{ marginBottom: 0 }}>
              {stat.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}