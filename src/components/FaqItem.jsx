import { useRef, useState, useEffect } from 'react'

const FaqItem = ({ question, answer, delay = 0, defaultOpen = false, open: controlledOpen, onToggle }) => {
  const isControlled = typeof controlledOpen === 'boolean'
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const open = isControlled ? controlledOpen : uncontrolledOpen
  const contentRef = useRef(null)
  const [maxH, setMaxH] = useState('0px')

  useEffect(() => {
    const h = contentRef.current ? contentRef.current.scrollHeight : 0
    setMaxH(open ? `${h}px` : '0px')
  }, [open, answer])

  const handleClick = () => {
    if (isControlled) {
      onToggle && onToggle()
    } else {
      setUncontrolledOpen((v) => !v)
    }
  }

  return (
    <div
      className="bg-white/5 border border-white/10 rounded overflow-hidden animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        type="button"
        className="w-full text-left px-4 py-4 flex items-center justify-between hover:bg-white/[0.04] transition"
        onClick={handleClick}
        aria-expanded={open}
      >
        <span className="font-semibold pr-4">{question}</span>
        <svg
          className={`w-4 h-4 text-white/70 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: maxH }}
        className="px-4 text-white/80 text-sm leading-6 border-t border-white/10 overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <div className="py-3">{answer}</div>
      </div>
    </div>
  )
}

export default FaqItem


