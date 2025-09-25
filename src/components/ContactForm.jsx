import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const formRef = useRef(null)

  const sendEmail = async (e) => {
    e.preventDefault()
    if (!formRef.current) return
    try {
      await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, { publicKey: 'YOUR_PUBLIC_KEY' })
      alert('Message sent!')
      formRef.current.reset()
    } catch (err) {
      alert('Error sending message')
    }
  }

  return (
    <form ref={formRef} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto" id="contact-form">
      <div className="flex flex-col gap-2">
        <label className="text-sm text-white/80">Your Name *</label>
        <input type="text" name="user_name" placeholder="Enter your full name" className="p-3 border border-white/10 bg-white/5 text-white rounded" required />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm text-white/80">Email Address *</label>
        <input type="email" name="user_email" placeholder="your@email.com" className="p-3 border border-white/10 bg-white/5 text-white rounded" required />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-white/80">Phone Number</label>
        <input type="tel" name="user_phone" placeholder="+91 99899 58238" className="p-3 border border-white/10 bg-white/5 text-white rounded" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm text-white/80">Service Interested *</label>
        <select name="service" className="p-3 border border-white/10 bg-white/5 text-white rounded" required>
          <option value="" disabled selected>Select a service</option>
          <option>SEO</option>
          <option>Paid Media</option>
          <option>Content Studio</option>
          <option>Analytics & CRO</option>
          <option>Web Design & Build</option>
          <option>Social Media Management</option>
        </select>
      </div>

      <div className="md:col-span-2 flex flex-col gap-2">
        <label className="text-sm text-white/80">Project Details *</label>
        <textarea name="message" placeholder="Tell us about your project, goals, and how we can help you achieve success..." rows="6" className="p-3 border border-white/10 bg-white/5 text-white rounded" required />
      </div>

      <div className="md:col-span-2 flex justify-center">
        <button type="submit" className="btn-primary flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 12l18-9-6 18-4-6-8-3z" stroke="#11181f" strokeWidth="2"/></svg>
          Send Message
        </button>
      </div>
    </form>
  )
}

export default ContactForm


