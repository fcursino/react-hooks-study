import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Useeffect from './pages/useEffect'
import Usetransition from './pages/useTransition'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/useeffect' element={<Useeffect/>} />
        <Route path='/usetransition' element={<Usetransition />} />
      </Routes>
    </Router>
  )
}

export default App
