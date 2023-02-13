import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='text-3xl bg-gray-700 py-4 px-2'>Welcome to the portfolio</h1>
    </div>
  )
}

export default App
