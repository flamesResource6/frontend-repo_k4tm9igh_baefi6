import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuShowcase from './components/MenuShowcase'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <MenuShowcase />
        <Gallery />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Blue Flame Catering. All rights reserved.</p>
            <div className="text-sm text-slate-600">Delicious. Reliable. Memorable.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
