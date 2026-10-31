import './App.css'
import { Navbar } from './components/Navbar'
import { Section } from './components/Section'
import { Footer } from './components/Footer'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Home } from './pages/Home'
import { Beats } from './pages/Beats'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/beats' element={<Beats/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
