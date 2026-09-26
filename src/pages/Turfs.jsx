import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialTurfs = [
  { id: 1, name: "Hatrics Football/Cricket Turf", location: "Resort, Near Tikuji Ni Wadi Rd, Thane (W)", price: 1200, type: "Multi-Sport" },
  { id: 2, name: "Friends Turf", location: "Mumbra Bypass Road, Govind Compound Behind M.G Bike Gallery", price: 800, type: "Box Cricket" },
  { id: 3, name: "7colours Turf - Multipurpose", location: "Unnathi Woods Rd, Thane", price: 1000, type: "Multi-Sport" },
  { id: 4, name: "HATRICS TURF MAJIWADA", location: "Rooftop, 6th Floor, High-Street Mall, Majiwada", price: 1400, type: "Box Cricket" },
  { id: 5, name: "Turf Titans", location: "Pipeline road, opp. Narayan Farmhouse", price: 1100, type: "Football" },
  { id: 6, name: "Smashin Turf", location: "Kala Talao Rd, opp. Anant Regency Phase 1", price: 1000, type: "Football" },
  { id: 7, name: "Chikankar's Turf", location: "54VQ+6R2, Kalyan-Dombivli", price: 850, type: "Box Cricket" },
  { id: 8, name: "Green field turf", location: "Rambaug Lane Number 4, Rambaug", price: 750, type: "Box Cricket" },
  { id: 9, name: "Camp Nou Sports Turf", location: "Opp. Marathi School, next to RUNWAL GARDENS", price: 1300, type: "Football" }
]

export default function Turfs() {
  const [turfs] = useState(initialTurfs)
  const navigate = useNavigate()

  const handleBookNow = (turf) => {
    // Navigate to the /booking route and pass the turf object
    navigate('/booking', { state: { turf } })
  }

  return (
    <div>
      <div className="banner-header">
        <h1>Find & Book Local Sports Grounds</h1>
        <p>Select an arena below to reserve your hourly box cricket or football slot.</p>
      </div>

      <div className="section-title">
        Available Arenas ({turfs.length})
      </div>

      <div className="turf-grid">
        {turfs.map((turf) => (
          <div key={turf.id} className="turf-card">
            <div>
              <h3>{turf.name}</h3>
              <span className="badge">{turf.type}</span>
              <p className="card-location">
                <strong>Location:</strong> {turf.location}
              </p>
            </div>
            
            <div className="card-footer">
              <div className="price-tag">
                ₹{turf.price}<span>/hr</span>
              </div>
              <button 
                className="btn-green"
                onClick={() => handleBookNow(turf)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}