import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex'>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <p>teste</p>
    </div>
    </>
  )
}

export default App
