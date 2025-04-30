import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import AddActivity from './pages/AddActivity'
import Info from './pages/Info';
import Privacy from './pages/Privacy';


function App() {
  return (
    <BrowserRouter basename="/Giocabimbo">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preferiti" element={<Favorites />} />
        <Route path="/nuova" element={<AddActivity />} />
        <Route path="/info" element={<Info />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
