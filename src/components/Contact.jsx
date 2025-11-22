import { useState } from "react"

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      setStatus("Sending...")
      const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"
      const res = await fetch(`${baseUrl}/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Failed to submit")
      setStatus("Thanks! We'll be in touch shortly.")
      e.currentTarget.reset()
    } catch (err) {
      setStatus("Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Request a Quote</h2>
            <p className="mt-3 text-slate-600">
              Tell us about your event and we’ll craft a tailored menu and plan.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm text-slate-600">Name</label>
                  <input name="name" required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-slate-600">Email</label>
                  <input type="email" name="email" required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm text-slate-600">Event Date</label>
                <input type="date" name="date" required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
              </div>
              <div className="space-y-1">
                <label className="text-sm text-slate-600">Guests</label>
                <input type="number" min="1" name="guests" required className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
              </div>
              <div className="space-y-1">
                <label className="text-sm text-slate-600">Details</label>
                <textarea name="details" rows="4" className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
              </div>
              <button className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-medium shadow hover:bg-emerald-700">
                Send Request
              </button>
            </form>
            {status && <p className="mt-4 text-sm text-slate-700">{status}</p>}
          </div>

          <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1950&auto=format&fit=crop"
              alt="Catering team preparing a table"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900">We cover the details</h3>
              <p className="mt-2 text-slate-600 text-sm">
                Licensed and insured • Vegan/Gluten-free options • Equipment rentals • Staffed events
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
