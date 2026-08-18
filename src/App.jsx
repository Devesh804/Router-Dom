import React from 'react'
import {Route, Routes} from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact'
import Navbar from './components/Navbar';
import Men from './Pages/Men'
import Women from './Pages/Women'

const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/contact/Men' element={<Men />} />
            <Route path='/contact/Women' element={<Women />} />
        </Routes>
    </div>
  )
}

export default App