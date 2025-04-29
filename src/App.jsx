import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import AddActivity from './pages/AddActivity'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preferiti" element={<Favorites />} />
        <Route path="/nuova" element={<AddActivity />} />
      </Routes>
    </Router>
  )
}

export default App
