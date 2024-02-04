import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Getdata from './state/fetchdata'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Getdata>
        <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        </Router>
      </Getdata>
    </>
  )
}

export default App
