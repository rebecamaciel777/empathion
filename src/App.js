import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; 
import Whoarewe from './components/pages/whoarewe/whoarewe';
import Volunteer from './components/pages/volunter/volunteer';
import Projects from './components/pages/projects/projects';

function App() {
  return (
    <div className={Navbar}>
      <BrowserRouter>
          <Routes>
                <Route path='/whoarewe' element= {<Whoarewe/>}/> 
                <Route path='/projects' element= {<Projects/>}/> 
                <Route path='/volunteer' element= {<Volunteer/>}/> 
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
