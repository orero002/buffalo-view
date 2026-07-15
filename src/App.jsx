import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import DrinksPage from './pages/DrinksPage'
import BookingPage from './pages/BookingPage'

function App() {
  return (
    <div className="min-h-screen bg-[#111415] text-[#e1e2e4]">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drinks" element={<DrinksPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
