const ServicesCard = ({ title, description, imageUrl, icon }) => (
  <div className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover-lift hover-accent hover:ring-2 hover:ring-[#f7e839]/30 cursor-pointer">
    {imageUrl ? (
      <div className="relative hover-zoom">
        <img src={imageUrl} alt={title} className="w-full aspect-[16/9] object-cover transition group-hover:brightness-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition" />
        <div className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-black/40 border border-white/15 text-white/90">{title}</div>
      </div>
    ) : null}
    {!imageUrl && icon ? (
      <div className="p-5 pb-0">
        <div className="h-12 w-12 rounded-lg bg-white/5 border border-white/10 grid place-items-center text-[#f7e839]">
          {icon}
        </div>
      </div>
    ) : null}
    <div className="p-5">
      <h3 className="text-lg font-semibold mb-1 text-white">{title}</h3>
      <p className="text-white/75 text-sm leading-6">{description}</p>
      <div className="mt-4 text-[#f7e839] text-sm font-medium inline-flex items-center gap-2">
        View More... <span className="transition -translate-x-0 group-hover:translate-x-1">→</span>
      </div>
    </div>
  </div>
)

export default ServicesCard


