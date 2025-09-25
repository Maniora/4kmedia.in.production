import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const sendEmail = async (e) => {
    e.preventDefault()
    if (!formRef.current) return
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      setSubmitStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS Error:', err)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
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
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 12l18-9-6 18-4-6-8-3z" stroke="#11181f" strokeWidth="2"/></svg>
              Send Message
            </>
          )}
        </button>
      </div>
      
      {submitStatus === 'success' && (
        <div className="md:col-span-2 text-center p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-green-400 font-medium">✅ Message sent successfully! We'll get back to you within 24 hours.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="md:col-span-2 text-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-400 font-medium">❌ Failed to send message. Please try again or contact us directly.</p>
        </div>
      )}
    </form>
  )
}

export default ContactForm


