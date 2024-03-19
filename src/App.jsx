import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Preloader from "./components/Preloader";

const App = () => {
  return (
    <div className='relative h-screen overflow-hidden border-2 border-purple-500 bg-[#030712]'>
    <Preloader />
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          {/* <Route path='/preloader' element={<Preloader />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App