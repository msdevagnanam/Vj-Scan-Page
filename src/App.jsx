import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './index.css'
import './ctscan.css'
import './xray.css'
import './mri.css'
import './ultrasound.css'
import Home from './pages/Home';
import About from './pages/About';
import Ctscan from './pages/Ctscan';
import Xray from './pages/Xray';
import Mri from './pages/Mri';
import Ultrasound from './pages/Ultrasound';

const App = () => {
  return (
    <div className='overflow-x-hidden'> 

      <Router>
       
        <Routes>
          <Route path="/home" element={ <Home />} />
          <Route path="/ctscan" element={ <Ctscan />} />
          <Route path="/xray" element={ <Xray />} />
          <Route path="/mri" element={ <Mri />} />
          <Route path="/ultrasound" element={ <Ultrasound />} />
          <Route path="/about" element={ <About />} />
        </Routes>
       
      </Router>
    </div>
  )
}

export default App