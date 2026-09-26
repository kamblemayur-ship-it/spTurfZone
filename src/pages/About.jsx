import React from 'react'

export default function About() {
  return (
    <section className="page">
      <h2>About SportsTurf</h2>
      <p className="page-desc">
        SportsTurf is a dedicated local portal created to eliminate match scheduling confusion for sports enthusiasts in Thane, Kalyan, and Dombivli.
      </p>
      <div className="grid-cards">
        <div className="card">
          <h3>Verified Ground Specs</h3>
          <p>Every turf listed details turf dimensions, lighting, and sports supported.</p>
        </div>
        <div className="card">
          <h3>Transparent Rates</h3>
          <p>No hidden charges — straight hourly rates for day and floodlight evening matches.</p>
        </div>
        <div className="card">
          <h3>Direct Contact</h3>
          <p>Reach ground caretakers directly for custom tournament bookings.</p>
        </div>
      </div>
    </section>
  )
}