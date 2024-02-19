import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/layout/NavBar/NavBar'

function App () {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<h1>Hola mundo</h1>} />
      </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
