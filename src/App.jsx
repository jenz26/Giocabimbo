import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import AddActivity from './pages/AddActivity'
import Navbar from './components/layout/Navbar'
import MobileBottomNav from './components/layout/MobileBottomNav'

function App() {
  return (
    <BrowserRouter basename="/Giocabimbo">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preferiti" element={<Favorites />} />
        <Route path="/nuova" element={<AddActivity />} />
      </Routes>
      <MobileBottomNav />
    </BrowserRouter>
  )
}

export default App
