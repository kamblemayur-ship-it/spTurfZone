import React from 'react'

const servicesData = [
  { id: "01", title: "Hourly Slot Reservation", desc: "Instant booking for recreational cricket and football matches." },
  { id: "02", title: "Floodlight Night Matches", desc: "Evenly lit stadiums fitted with industrial LED sports lights." },
  { id: "03", title: "Tournament Coordination", desc: "Multi-slot reservations, umpire coordination, and fixtures management." },
  { id: "04", title: "Kit & Gear Access", desc: "Cricket bats, footballs, bibs, and first-aid kits on-site." }
]

export default function Services() {
  return (
    <section className="page">
      <h2>Our Services</h2>
      <p className="page-desc">Comprehensive sports facilities and services across our registered arenas.</p>

      <div className="grid-cards">
        {servicesData.map((s) => (
          <div key={s.id} className="card">
            <span className="service-id">{s.id}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}