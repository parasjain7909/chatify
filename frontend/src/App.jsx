import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {

  const testApi = async () => {
    const res = await axios.get("https://chatify-f1hw.onrender.com/api/login")
    alert(res.data)
  }

  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Chatify Test</h1>

      <button onClick={testApi}>
        Test Backend
      </button>

      <br /><br />

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>g
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  )
}

export default App