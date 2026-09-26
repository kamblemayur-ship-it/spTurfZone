import React, { useState, useRef } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const nameInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    e.target.reset()
  }

  const focusInput = () => {
    nameInputRef.current?.focus()
  }

  return (
    <section className="page contact-grid">
      <div>
        <h2>Contact Us</h2>
        <p className="page-desc">Got a question or hosting a corporate sports league?</p>
        <div className="contact-info">
          <p>📞 +91 98201 44521</p>
          <p>✉️ support@sportsturf.in</p>
          <p>📍 Thane West, Maharashtra</p>
        </div>
        <button type="button" className="btn btn-secondary" onClick={focusInput} style={{ marginTop: '15px' }}>
          Focus Name Field (useRef)
        </button>
      </div>

      <form onSubmit={handleSubmit} className="form-layout card">
        <input ref={nameInputRef} type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Phone Number" required />
        <textarea rows="4" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
        {submitted && <p className="success-text">Message sent successfully!</p>}
      </form>
    </section>
  )
}