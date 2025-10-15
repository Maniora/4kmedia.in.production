import { useRef, useState } from 'react'
import Toast from './Toast'
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

// Validation helper functions
const isValidEmail = (email) => {
  // Basic RFC 5322 compliant email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
const isValidPhone = (phone) => /^\d{10}$/.test(phone)
const isValidUrl = (url) => {
  try {
    // URL must contain .com, .in, .net, .org, .co, .io, .me, .site, .app, etc.
    const tlds = [
      '.com', '.in', '.net', '.org', '.co', '.io', '.me', '.site', '.app', '.ai', '.dev', '.info', '.biz', '.xyz', '.us', '.ca', '.uk', '.au', '.gov', '.edu'
    ]
    let u = new URL(url)
    return tlds.some(tld => u.hostname.endsWith(tld))
  } catch {
    return false
  }
}

const CareersForm = () => {
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [toast, setToast] = useState({ open: false, message: '', variant: 'success' })
  const [fieldErrors, setFieldErrors] = useState({})

  const sanitizePhoneInput = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10)
    e.target.value = digitsOnly
  }

  const validateFields = (form) => {
    const errors = {}

    // full name
    const fullName = form.full_name.value.trim()
    if (!fullName) errors.full_name = 'Full Name is required.'

    // email
    const email = form.email.value.trim()
    if (!isValidEmail(email)) errors.email = 'Please enter a valid email address.'

    // phone
    const phone = form.phone.value.trim()
    if (!isValidPhone(phone)) errors.phone = 'Enter a valid 10-digit phone number.'

    // portfolio
    const portfolio = form.portfolio.value.trim()
    if (!isValidUrl(portfolio)) errors.portfolio = 'Portfolio link should be a valid URL ending in .com, .in, .net etc.'

    // role
    const role = form.role.value
    if (!role) errors.role = 'Please select a role.'

    // resume
    const resume = form.resume.value.trim()
    if (!isValidUrl(resume)) errors.resume = 'Resume link should be a valid URL ending in .com, .in, .net etc.'

    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formRef.current) return

    const errors = validateFields(formRef.current)
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) {
      setToast({ open: true, message: Object.values(errors)[0], variant: 'error' })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    // Validate required EmailJS env variables at runtime
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CAREERS
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS configuration. Check .env variables.', {
        serviceIdPresent: !!serviceId,
        templateIdPresent: !!templateId,
        publicKeyPresent: !!publicKey,
      })
      setToast({ open: true, message: 'Email service not configured. Please try later.', variant: 'error' })
      setIsSubmitting(false)
      return
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        { publicKey }
      )
      setSubmitStatus('success')
      formRef.current.reset()
      setToast({ open: true, message: 'Application submitted successfully!', variant: 'success' })
      setFieldErrors({})
    } catch (err) {
      console.error('EmailJS Error:', err)
      setSubmitStatus('error')
      setToast({ open: true, message: 'Failed to submit application. Please try again.', variant: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const getFieldErrorClass = (field) =>
    fieldErrors[field]
      ? 'border-red-500 focus:ring-red-400'
      : 'border-white/10 focus:ring-[#f7e839]/50'

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Recipient for EmailJS pulled from env */}
      <input type="hidden" name="to_email" value={import.meta.env.VITE_CAREERS_EMAIL} />
      <label className="space-y-1 block w-full">
        <span className="text-xs text-white/80 tracking-wide">
          FULL NAME <span className="text-[#f7e839]">*</span>
        </span>
        <input
          name="full_name"
          type="text"
          placeholder="Enter your full name"
          className={`w-full p-3 border bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 ${getFieldErrorClass('full_name')}`}
          required
        />
        {fieldErrors.full_name && <span className="text-xs text-red-500">{fieldErrors.full_name}</span>}
      </label>
      <div className="grid md:grid-cols-2 gap-5">
        <label className="space-y-1 block w-full">
          <span className="text-xs text-white/80 tracking-wide">
            EMAIL ADDRESS <span className="text-[#f7e839]">*</span>
          </span>
          <input
            name="email"
            type="email"
            placeholder="you@email.com"
            className={`w-full p-3 border bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 ${getFieldErrorClass('email')}`}
            required
            autoComplete="email"
          />
          {fieldErrors.email && <span className="text-xs text-red-500">{fieldErrors.email}</span>}
        </label>
        <label className="space-y-1 block w-full">
          <span className="text-xs text-white/80 tracking-wide">
            PHONE NUMBER <span className="text-[#f7e839]">*</span>
          </span>
          <input
            name="phone"
            type="tel"
            placeholder="9989958238"
            className={`w-full p-3 border bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 ${getFieldErrorClass('phone')}`}
            inputMode="numeric"
            autoComplete="tel"
            pattern="\d{10}"
            maxLength={10}
            onInput={sanitizePhoneInput}
            title="Please enter a valid 10-digit phone number"
            required
          />
          {fieldErrors.phone && <span className="text-xs text-red-500">{fieldErrors.phone}</span>}
        </label>
      </div>
      <label className="space-y-1 block w-full">
        <span className="text-xs text-white/80 tracking-wide">
          PORTFOLIO LINK <span className="text-[#f7e839]">*</span>
        </span>
        <input
          name="portfolio"
          type="url"
          placeholder="https://your-portfolio.com"
          className={`w-full p-3 border bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 ${getFieldErrorClass('portfolio')}`}
          required
        />
        {fieldErrors.portfolio && <span className="text-xs text-red-500">{fieldErrors.portfolio}</span>}
      </label>
      <label className="space-y-1 block w-full">
        <span className="text-xs text-white/80 tracking-wide">
          ROLE APPLYING FOR <span className="text-[#f7e839]">*</span>
        </span>
        <select
          name="role"
          className={`w-full p-3 border bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 dark-select ${getFieldErrorClass('role')}`}
          required
          defaultValue=""
        >
          <option value="" disabled className="bg-[#1a1f26] text-white">
            Select a role
          </option>
          {ROLES.map((role) => (
            <option key={role} value={role} className="bg-[#1a1f26] text-white">
              {role}
            </option>
          ))}
        </select>
        {fieldErrors.role && <span className="text-xs text-red-500">{fieldErrors.role}</span>}
      </label>
      <label className="space-y-1 block w-full">
        <span className="text-xs text-white/80 tracking-wide">
          RESUME LINK (Google Drive/Dropbox) <span className="text-[#f7e839]">*</span>
        </span>
        <input
          name="resume"
          type="url"
          placeholder="https://drive.google.com/your-resume"
          className={`w-full p-3 border bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 ${getFieldErrorClass('resume')}`}
          required
        />
        {fieldErrors.resume && <span className="text-xs text-red-500">{fieldErrors.resume}</span>}
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
      
      <Toast open={toast.open} onClose={() => setToast((t) => ({ ...t, open: false }))} message={toast.message} variant={toast.variant} />
    </form>
  )
}

export default CareersForm
