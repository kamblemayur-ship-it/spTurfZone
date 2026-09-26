import React, { useState } from 'react'

const turfList = [
  { id: 1, name: "Hatrics Football/Cricket Turf", location: "Tikuji-Ni-Wadi, Thane", price: 1200, type: "Multi-Sport" },
  { id: 2, name: "Friends Turf", location: "Mumbra Bypass, Thane", price: 800, type: "Box Cricket" },
  { id: 3, name: "7colours Turf", location: "Unnathi Woods, Thane", price: 1000, type: "Multi-Sport" },
  { id: 4, name: "Turf Titans", location: "Pipeline Rd, Kalyan", price: 1100, type: "Football" },
  { id: 5, name: "Smashin Turf", location: "Kala Talao, Kalyan", price: 1000, type: "Football" },
  { id: 6, name: "Legends Arena", location: "MIDC, Dombivli", price: 900, type: "Box Cricket" }
]

export default function Turfs() {
  const [selectedTurf, setSelectedTurf] = useState(null)
  const [isBooked, setIsBooked] = useState(false)

  const handleBooking = (e) => {
    e.preventDefault()
    setIsBooked(true)
  }

  return (
    <section className="page">
      <h2>Available Arenas & Pricing</h2>
      <p className="page-desc">Select an arena to reserve a slot.</p>

      <div className="grid-cards">
        {turfList.map((turf) => (
          <div key={turf.id} className="card turf-card">
            <span className="pill">{turf.type}</span>
            <h3>{turf.name}</h3>
            <p className="location">📍 {turf.location}</p>
            <p className="rate">₹{turf.price} <span>/ hour</span></p>
            <button 
              className="btn btn-primary"
              onClick={() => { setSelectedTurf(turf); setIsBooked(false); }}
            >
              Book Slot
            </button>
          </div>
        ))}
      </div>

      {selectedTurf && (
        <div className="modal-overlay" onClick={() => setSelectedTurf(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedTurf(null)}>✕</button>
            <h3>Reserve: {selectedTurf.name}</h3>
            <p><strong>Location:</strong> {selectedTurf.location}</p>
            <p><strong>Rate:</strong> ₹{selectedTurf.price}/hr</p>

            {isBooked ? (
              <div className="success-box">
                ✅ Slot booked successfully for {selectedTurf.name}!
              </div>
            ) : (
              <form onSubmit={handleBooking} className="form-layout">
                <input type="text" placeholder="Your Name" required />
                <input type="tel" placeholder="Mobile Number" required />
                <input type="date" required />
                <select required defaultValue="">
                  <option value="" disabled>Select Time Slot</option>
                  <option>06:00 AM - 07:00 AM</option>
                  <option>05:00 PM - 06:00 PM</option>
                  <option>06:00 PM - 07:00 PM</option>
                  <option>07:00 PM - 08:00 PM</option>
                  <option>08:00 PM - 09:00 PM</option>
                </select>
                <button type="submit" className="btn btn-primary">Confirm Booking</button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  )
}