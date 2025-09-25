const Testimonial = ({ name, role = '', company = '', quote, avatarUrl }) => (
  <div className="relative h-full bg-white/5 border border-white/10 rounded-lg p-6 hover-lift hover-accent">
    <svg className="absolute -top-3 -left-1 opacity-20" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h5v10H5V9a2 2 0 012-2zm10 0h5v10h-7V9a2 2 0 012-2z" fill="#f7e839"/></svg>
    <p className="text-white/80 leading-7">{quote}</p>
    <div className="mt-5 flex items-center gap-3">
      {avatarUrl ? <img src={avatarUrl} alt={name} className="h-10 w-10 rounded-full object-cover border border-white/10" /> : null}
      <div>
        <div className="text-white font-semibold text-sm">{name}</div>
        {(role || company) ? <div className="text-white/60 text-xs">{role}{role && company ? ' • ' : ''}{company}</div> : null}
      </div>
    </div>
  </div>
)

export default Testimonial


