export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1969&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1950&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2070&auto=format&fit=crop",
  ]

  return (
    <section id="gallery" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Event Gallery</h2>
          <p className="mt-3 text-slate-600">A look at our recent events and dishes</p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((src, idx) => (
            <figure key={idx} className="relative overflow-hidden rounded-xl group">
              <img
                src={src}
                alt={`Catering photo ${idx + 1}`}
                className="h-40 sm:h-56 md:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
