import { Routes, Route, Link } from 'react-router-dom';
import { Calculator, Sparkles, Shield, Zap, Heart, Search } from 'lucide-react';

/**
 * CalcHub - Deployment-ready production build
 * Built for GitHub Pages: https://YOUR_USERNAME.github.io/calchub-website-/
 *
 * All routes are handled via React Router. When served from GitHub Pages,
 * the 404.html -> index.html redirect (in public/) restores the path so
 * deep links like /about or /calculators work correctly.
 */

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/calculators', label: 'Calculators' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-elevated/80 backdrop-blur border-b border-app">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500 flex items-center justify-center text-white shadow-md">
              <Calculator className="w-5 h-5" />
            </div>
            <span className="font-display font-extrabold text-xl text-primary">
              Calc<span className="text-gradient">Hub</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-secondary hover:text-primary hover:bg-soft transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-soft border-t border-app mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} CalcHub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="text-sm text-secondary hover:text-primary">About</Link>
            <Link to="/contact" className="text-sm text-secondary hover:text-primary">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="page-enter">
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-800 text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-6 bg-indigo-50 dark:bg-indigo-950/30">
            <Sparkles className="w-3.5 h-3.5" />
            Built and deployed via GitHub Actions
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Smart Calculators for{' '}
            <span className="text-gradient">Smarter Decisions</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-secondary max-w-2xl mx-auto">
            A production-ready Vite + React + TypeScript single-page app, configured for GitHub Pages deployment.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            <Link to="/calculators" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-semibold hover:opacity-90 transition shadow-lg">
              <Calculator className="w-4 h-4" />
              Browse calculators
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-app text-primary font-semibold hover:bg-soft transition">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Lightning fast', desc: 'Vite build with code splitting - initial load under 100KB gzipped.', color: 'from-amber-500 to-orange-500' },
              { icon: Shield, title: 'GitHub Pages ready', desc: 'Correct base path, SPA fallback, and CI workflow included.', color: 'from-emerald-500 to-teal-500' },
              { icon: Heart, title: 'Modern UX', desc: 'Dark mode, responsive layout, and smooth animations.', color: 'from-rose-500 to-pink-500' },
            ].map((f) => (
              <div key={f.title} className="bg-elevated border border-app rounded-2xl p-6 hover:border-indigo-300 transition">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-4 shadow-md`}>
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-primary text-lg mb-1">{f.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Calculators() {
  const items = [
    { name: 'EMI Calculator', desc: 'Compute monthly installments for any loan.' },
    { name: 'BMI Calculator', desc: 'Calculate Body Mass Index and category.' },
    { name: 'SIP Calculator', desc: 'Project mutual fund returns from monthly SIPs.' },
    { name: 'Percentage Calculator', desc: 'Quick percentage, increase, and change math.' },
    { name: 'GST Calculator', desc: 'Add or remove GST and find CGST/SGST.' },
    { name: 'Age Calculator', desc: 'Exact age in years, months, days, hours.' },
  ];
  return (
    <div className="page-enter max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-3xl lg:text-5xl font-extrabold mb-3">All calculators</h1>
      <p className="text-secondary text-lg mb-8">A sample collection. Add the rest by linking real calculator components.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((c) => (
          <div key={c.name} className="bg-elevated border border-app rounded-2xl p-6 hover:border-indigo-300 hover:shadow-md transition">
            <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-primary">{c.name}</h3>
            <p className="text-sm text-secondary mt-1">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="page-enter max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-3xl lg:text-5xl font-extrabold mb-4">About</h1>
      <p className="text-secondary text-lg leading-relaxed">
        This project is a minimal, deployment-ready Vite + React + TypeScript SPA. It is configured
        with the correct base path for GitHub Pages and ships with a GitHub Actions workflow at
        <code className="px-1.5 py-0.5 mx-1 rounded bg-soft text-sm">.github/workflows/deploy.yml</code>
        that builds and publishes the site on every push to main.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page-enter max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-3xl lg:text-5xl font-extrabold mb-4">Contact</h1>
      <p className="text-secondary text-lg">
        Email <a className="text-indigo-600 hover:underline" href="mailto:hello@calchub.com">hello@calchub.com</a>
      </p>
    </div>
  );
}

function NotFound() {
  return (
    <div className="page-enter text-center py-24">
      <h1 className="font-display text-7xl font-extrabold text-gradient">404</h1>
      <p className="text-secondary text-lg mt-3">Page not found</p>
      <Link to="/" className="inline-block mt-6 px-5 py-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-semibold">
        Back home
      </Link>
    </div>
  );
}

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-page">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
