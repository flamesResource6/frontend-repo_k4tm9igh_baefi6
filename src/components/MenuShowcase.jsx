export default function MenuShowcase() {
  const items = [
    {
      title: "Seasonal Salads",
      desc: "Bright, crisp, and colorful — made from local produce.",
      img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Gourmet Entrees",
      desc: "Chef-crafted mains that wow every guest.",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Decadent Desserts",
      desc: "Sweet finishes that feel like a celebration.",
      img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  return (
    <section id="menu" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Signature Selections</h2>
          <p className="mt-3 text-slate-600">A taste of what we can create for your event</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item.title} className="group rounded-2xl overflow-hidden bg-white shadow ring-1 ring-slate-200">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-slate-600 text-sm">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
