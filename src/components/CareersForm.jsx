import { useRef } from 'react'

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

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(formRef.current || undefined)
    const name = form.get('full_name')
    alert(`Thanks ${name}! Your application was captured.`)
    if (formRef.current) formRef.current.reset()
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
        <button type="submit" className="btn-primary btn-shine w-full md:w-auto">Submit Application</button>
      </div>
    </form>
  )
}

export default CareersForm
