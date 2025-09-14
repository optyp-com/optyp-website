import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

// Import pages
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import Contact from "./pages/Contact"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Terms from "./pages/Terms"

function App() {
  return (
    <Router basename="/optyp-website">
      <header style={{ padding: "1rem", background: "#f9f9f9" }}>
        <nav>
          <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>
        </nav>
      </header>

      <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      <footer style={{ padding: "1rem", background: "#f1f1f1", textAlign: "center" }}>
        <p>© {new Date().getFullYear()} OPTYP — Optimize Your Professionalism</p>
      </footer>
    </Router>
  )
}

export default App
