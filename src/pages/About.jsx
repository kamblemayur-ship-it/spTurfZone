import React from 'react'

export default function About() {
  const arenaSpecs = [
    {
      id: 1,
      tag: "Standards",
      title: "Verified Ground Specs",
      desc: "Every turf listed details turf dimensions, lighting, and sports supported."
    },
    {
      id: 2,
      tag: "Pricing",
      title: "Transparent Rates",
      desc: "No hidden charges — straight hourly rates for day and floodlight evening matches."
    },
    {
      id: 3,
      tag: "Support",
      title: "Direct Contact",
      desc: "Reach ground caretakers directly for custom tournament bookings."
    }
  ]

  const whyChooseUs = [
    {
      id: 1,
      title: "Thane & Kalyan Coverage",
      desc: "Handpicked grounds from Majiwada, Tikuji-Ni-Wadi, and Dombivli MIDC."
    },
    {
      id: 2,
      title: "Standard Hourly Pricing",
      desc: "Transparent prices with no platform surcharges or hidden convenience fees."
    },
    {
      id: 3,
      title: "Immediate Booking Confirmations",
      desc: "Select your preferred date and time slot to lock in your match instantly."
    }
  ]

  return (
    <div>
      {/* Top Banner Header */}
      <div className="banner-header">
        <h1>About SportsTurf</h1>
        <p>
          SportsTurf is a dedicated local portal created to eliminate match scheduling confusion for sports enthusiasts in Thane, Kalyan, and Dombivli.
        </p>
      </div>

      {/* First Section: Why Choose Our Arena Network */}
      <div className="section-title">Why Choose Our Arena Network</div>
      <div className="about-grid" style={{ marginBottom: '36px' }}>
        {arenaSpecs.map((item) => (
          <div key={item.id} className="info-card">
            <div>
              <span className="badge">{item.tag}</span>
              <h3>{item.title}</h3>
              <p className="card-location" style={{ marginBottom: 0 }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Second Section: Why SportsTurf? */}
      <div className="section-title">Why SportsTurf?</div>
      <div className="about-grid">
        {whyChooseUs.map((item) => (
          <div key={item.id} className="info-card">
            <div>
              <h3>{item.title}</h3>
              <p className="card-location" style={{ marginBottom: 0 }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}