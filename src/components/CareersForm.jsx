import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ROLES = [
  "Senior Graphic Designer",
  "Social Media Strategist",
  "Senior Video Editor",
  "UI/UX Designer",
  "Website Developer",
  "Digital Marketing Executive",
  "Other"
]

const CareersForm = () => {
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formRef.current) return
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CAREERS,
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
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <label className="space-y-1 block w-full">
        <span className="text-xs text-white/80 tracking-wide">FULL NAME <span className="text-[#f7e839]">*</span></span>
        <input name="full_name" type="text" placeholder="Enter your full name" className="w-full p-3 border border-white/10 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7e839]/50" required />
      </label>
      <div className="grid md:grid-cols-2 gap-5">
        <label className="space-y-1 block w-full">
          <span className="text-xs text-white/80 tracking-wide">EMAIL ADDRESS <span className="text-[#f7e839]">*</span></span>
          <input name="email" type="email" placeholder="you@email.com" className="w-full p-3 border border-white/10 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7e839]/50" required />
        </label>
        <label className="space-y-1 block w-full">
          <span className="text-xs text-white/80 tracking-wide">PHONE NUMBER <span className="text-[#f7e839]">*</span></span>
          <input name="phone" type="tel" placeholder="+91 98765 43210" className="w-full p-3 border border-white/10 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7e839]/50" required />
        </label>
      </div>
      <label className="space-y-1 block w-full">
        <span className="text-xs text-white/80 tracking-wide">PORTFOLIO LINK <span className="text-[#f7e839]">*</span></span>
        <input name="portfolio" type="url" placeholder="https://your-portfolio.com" className="w-full p-3 border border-white/10 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7e839]/50" required />
      </label>
      <label className="space-y-1 block w-full">
        <span className="text-xs text-white/80 tracking-wide">ROLE APPLYING FOR <span className="text-[#f7e839]">*</span></span>
        <select
          name="role"
          className="w-full p-3 border border-white/10 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7e839]/50 dark-select"
          required
          defaultValue=""
        >
          <option value="" disabled className="bg-[#1a1f26] text-white">Select a role</option>
          {ROLES.map((role) => (
            <option key={role} value={role} className="bg-[#1a1f26] text-white">
              {role}
            </option>
          ))}
        </select>
      </label>
      <label className="space-y-1 block w-full">
        <span className="text-xs text-white/80 tracking-wide">UPLOAD RESUME (PDF/DOC) <span className="text-[#f7e839]">*</span></span>
        <input name="resume" type="file" accept=".pdf,.doc,.docx" className="w-full file:mr-4 file:rounded file:border-0 file:bg-[#f7e839] file:text-[#11181f] file:font-semibold file:px-4 file:py-2 p-2 border border-white/10 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f7e839]/50" required />
      </label>
      <div className="pt-1">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="btn-primary btn-shine w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
        </button>
      </div>
      
      {submitStatus === 'success' && (
        <div className="text-center p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-green-400 font-medium">✅ Application submitted successfully! We'll review your application and get back to you soon.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="text-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-400 font-medium">❌ Failed to submit application. Please try again or contact us directly.</p>
        </div>
      )}
    </form>
  )
}

export default CareersForm
