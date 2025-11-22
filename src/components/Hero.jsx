export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-[10%] bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.15),transparent_40%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Memorable Catering for Every Occasion
          </h1>
          <p className="mt-5 text-lg text-slate-700 max-w-xl">
            Fresh, seasonal menus crafted by chefs and delivered with care. From intimate gatherings to large events, we make it effortless and delicious.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#menu" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-medium shadow hover:bg-emerald-700">
              Explore Menu
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-slate-800 font-medium hover:bg-slate-50">
              Get a Quote
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 max-w-lg">
            <div>
              <dt className="text-sm text-slate-600">Events Served</dt>
              <dd className="text-3xl font-bold text-slate-900">1,200+</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-600">5-Star Reviews</dt>
              <dd className="text-3xl font-bold text-slate-900">800+</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10">
            <img
              src="https://images.unsplash.com/photo-1541542684-4a01846a0f06?q=80&w=1968&auto=format&fit=crop"
              alt="Beautifully plated catering dishes"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 ring-1 ring-slate-900/10 hidden sm:block">
            <p className="text-sm font-medium text-slate-800">Custom menus • Dietary options • Full-service staff</p>
          </div>
        </div>
      </div>
    </section>
  )
}
