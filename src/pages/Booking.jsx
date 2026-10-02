import React, { useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'

export default function Booking() {
  const location = useLocation()
  const navigate = useNavigate()
  const turf = location.state?.turf

  const [booked, setBooked] = useState(false)
  const [bookingId, setBookingId] = useState('')
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)

  const [hours, setHours] = useState(1)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [slot, setSlot] = useState('')

  if (!turf) {
    return (
      <div className="banner-header">
        <h2>No Turf Selected</h2>
        <p>Please select an arena first to reserve a slot.</p>
        <Link to="/turfs" className="btn-green" style={{ marginTop: '16px' }}>
          Back to Turfs
        </Link>
      </div>
    )
  }

  const totalAmount = turf.price * hours

  const handleBooking = async (e) => {
    e.preventDefault()
    setServerError('')
    setLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          turf_id: turf.id,
          customer_name: name,
          phone: phone,
          booking_date: date,
          time_slot: slot,
          hours: hours,
          total_amount: totalAmount
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Booking failed')
      }

      setBookingId(data.bookingId)
      setBooked(true)
    } catch (err) {
      setServerError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="banner-header">
        <h1>{booked ? 'Booking Receipt' : 'Book Your Slot'}</h1>
        <p>{booked ? 'Your slot reservation is confirmed.' : 'Complete the form below to lock your match reservation.'}</p>
      </div>

      <div className="turf-card">
        {booked ? (
          <div>
            <div className="success-note" style={{ marginBottom: '18px' }}>
              ✓ Reservation Saved to Database!
            </div>
            
            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '20px' }}>
              <p style={{ marginBottom: '8px' }}><strong>Booking ID:</strong> <span style={{ color: '#166534', fontWeight: 'bold' }}>{bookingId}</span></p>
              <p style={{ marginBottom: '8px' }}><strong>Arena:</strong> {turf.name}</p>
              <p style={{ marginBottom: '8px' }}><strong>Customer Name:</strong> {name}</p>
              <p style={{ marginBottom: '8px' }}><strong>Contact:</strong> {phone}</p>
              <p style={{ marginBottom: '8px' }}><strong>Date & Slot:</strong> {date} ({slot})</p>
              <p style={{ marginBottom: '8px' }}><strong>Duration:</strong> {hours} Hour{hours > 1 ? 's' : ''}</p>
              <p style={{ margin: 0 }}><strong>Total Paid:</strong> ₹{totalAmount}</p>
            </div>

            <button 
              className="btn-green" 
              style={{ width: '100%' }} 
              onClick={() => navigate('/turfs')}
            >
              Book Another Arena
            </button>
          </div>
        ) : (
          <div>
            <div>
              <h3>{turf.name}</h3>
              <span className="badge">{turf.type}</span>
              <p className="card-location">
                <strong>Location:</strong> {turf.location}
              </p>
              <p className="price-tag" style={{ marginBottom: '14px' }}>
                Total: ₹{totalAmount} <span>({hours} hr @ ₹{turf.price}/hr)</span>
              </p>
            </div>

            {serverError && (
              <div style={{ background: '#fee2e2', color: '#991b1b', padding: '10px 14px', borderRadius: '6px', marginBottom: '16px', fontSize: '0.9rem' }}>
                {serverError}
              </div>
            )}

            <form className="booking-form" onSubmit={handleBooking}>
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                required 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />

              <label>Mobile Number</label>
              <input 
                type="tel" 
                placeholder="Enter mobile number" 
                required 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
              />

              <label>Duration</label>
              <select value={hours} onChange={(e) => setHours(Number(e.target.value))}>
                <option value={1}>1 Hour</option>
                <option value={2}>2 Hours</option>
                <option value={3}>3 Hours</option>
              </select>

              <label>Match Date</label>
              <input 
                type="date" 
                required 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
              />

              <label>Time Slot</label>
              <select required value={slot} onChange={(e) => setSlot(e.target.value)}>
                <option value="" disabled>Select Starting Slot</option>
                <option>06:00 AM - 07:00 AM</option>
                <option>05:00 PM - 06:00 PM</option>
                <option>06:00 PM - 07:00 PM</option>
                <option>07:00 PM - 08:00 PM</option>
                <option>08:00 PM - 09:00 PM</option>
              </select>

              <div className="modal-actions" style={{ marginTop: '16px' }}>
                <button type="submit" className="btn-green" style={{ flex: 1 }} disabled={loading}>
                  {loading ? 'Saving...' : 'Confirm Booking'}
                </button>
                <button type="button" className="btn-secondary" onClick={() => navigate('/turfs')}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}