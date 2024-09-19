import AboutPage from './landing_page/about/AboutPage';
import HomePage from './landing_page/home/HomePage'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './landing_page/home/Navbar';
import Footer from './landing_page/Footer';
import Signup from './landing_page/signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<AboutPage />} />

        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
