import { useState } from "react"
import logo from "./assets/logo.svg"   // ✅ your Optyp logo
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Optyp Logo" />
      </div>
      <h1>Welcome to OPTYP</h1>
      <p>Optimize Your Professionalism</p>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        This is your starter app for the OPTYP website.
      </p>
    </>
  )
}

export default App
