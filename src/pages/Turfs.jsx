import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Turfs() {
  const [turfs, setTurfs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:5000/api/turfs')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load turfs')
        return res.json()
      })
      .then((data) => {
        setTurfs(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError('Could not connect to database server.')
        setLoading(false)
      })
  }, [])

  const handleBookNow = (turf) => {
    navigate('/booking', { state: { turf } })
  }

  return (
    <div>
      <div className="banner-header">
        <h1>Find & Book Local Sports Grounds</h1>
        <p>Select an arena below to reserve your hourly box cricket or football slot.</p>
      </div>

      {loading && <p style={{ textAlign: 'center' }}>Loading arenas from MySQL database...</p>}
      {error && <p style={{ textAlign: 'center', color: '#dc2626' }}>{error}</p>}

      {!loading && !error && (
        <>
          <div className="section-title">Available Arenas ({turfs.length})</div>
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
        </>
      )}
    </div>
  )
}