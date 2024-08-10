import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Useeffect from './pages/useEffect'
import Usetransition from './pages/useTransition'
import Usereducer from './pages/useReducer'
import Usestate from './pages/useState'
import Statelifting from './pages/stateLifting'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/useeffect' element={<Useeffect/>} />
        <Route path='/usetransition' element={<Usetransition />} />
        <Route path='/usereducer' element={<Usereducer />} />
        <Route path='/usestate' element={<Usestate />} />
        <Route path='/statelifting' element={<Statelifting />} />
      </Routes>
    </Router>
  )
}

export default App
