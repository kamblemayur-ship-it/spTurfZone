import React, { useState, useRef } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const nameInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const focusNameInput = () => {
    nameInputRef.current?.focus()
  }

  return (
    <div className="contact-wrapper">
      <div className="banner-header">
        <h1>Contact Us</h1>
        <p>Have questions or looking to host a tournament? Reach out to us.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Top: Send a Message Card */}
        <div className="contact-form-card">
          <h3>Send a Message</h3>
          {submitted ? (
            <div className="success-note" style={{ marginTop: '16px' }}>
              Thank you! Your message has been received.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <label>Full Name</label>
              <input 
                ref={nameInputRef} 
                type="text" 
                placeholder="Enter your name" 
                required 
              />

              <label>Email Address</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
              />

              <label>Phone Number</label>
              <input 
                type="tel" 
                placeholder="Enter 10-digit number" 
                required 
              />

              <label>Your Message</label>
              <textarea 
                rows="4" 
                placeholder="Type your match or arena query..." 
                required
              ></textarea>

              <button type="submit" className="btn-green" style={{ marginTop: '8px' }}>
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Bottom: Get In Touch Card */}
        <div className="contact-info-card">
          <h3>Get In Touch</h3>
          <p className="contact-subtext">Direct coordinates for ground inquiries and support:</p>
          
          <div className="contact-details">
            <p><strong>📞 Phone:</strong> +91 98201 44521</p>
            <p><strong>✉️ Email:</strong> support@sportsturf.in</p>
            <p><strong>📍 Location:</strong> Thane West, Maharashtra</p>
          </div>

        </div>
      </div>
    </div>
  )
}