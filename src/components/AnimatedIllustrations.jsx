import React from 'react'

const AnimatedIllustrations = ({ density = 'md' }) => {
  const common = 'pointer-events-none absolute inset-0'
  const items = (
    <>
      <div className="absolute left-[6%] top-[18%] animate-float-slow">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="drop-shadow-illustration">
          <path d="M3 10v4a2 2 0 002 2h1l2 3 2-3h2l6-3V7l-6-3H9L6 3 5 6H5a2 2 0 00-2 2z" stroke="#f7e839" strokeWidth="1.4" fill="rgba(247,232,57,0.08)"/>
        </svg>
      </div>
      <div className="absolute right-[8%] top-[22%] animate-float">
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" className="drop-shadow-illustration">
          <path d="M6 4L2 8l4 4M18 4l4 4-4 4" stroke="#f7e839" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="absolute left-[10%] top-[58%] animate-float">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="drop-shadow-illustration">
          <path d="M12 12l7-7 2 2-7 7-2 5-2-2 5-2z" stroke="#f7e839" strokeWidth="1.4" fill="rgba(247,232,57,0.06)"/>
        </svg>
      </div>
      <div className="absolute right-[10%] bottom-[14%] animate-float-slow">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="drop-shadow-illustration">
          <path d="M4 18V6m6 12V9m6 9V4" stroke="#f7e839" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      </div>
    </>
  )
  return (
    <div className={common} aria-hidden>
      {items}
    </div>
  )
}

export default AnimatedIllustrations


