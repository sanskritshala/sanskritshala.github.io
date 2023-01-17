import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from '../src/pages/home'
import React, { useState } from 'react';
import WebFont from 'webfontloader';
import Publications from './pages/publications';
import Team from './pages/team';
import JJ from './pages/jj';
import Resources from './pages/Resources'
import Dp from './pages/Dp';
import 'bootstrap/dist/css/bootstrap.min.css'
import Old_Dp from './pages/Old_Dp';

// function CC() {
//   // 👇️ redirect to external URL
//   window.location.replace('http://172.29.92.118:4040/');

//   return null;
// }

function App() {
  WebFont.load({
    google:{
      families:['Roboto:300,400,700','Montserrat']
    }
  })
  const [width,setwidth]=useState(window.innerWidth)
  window.addEventListener('resize',()=>{
    setwidth(window.innerWidth)
  })
  return (<div className='App' >
      <Router basename="/">
      <Routes>
        <Route index element={<Home width={width} />} />
        <Route path="/publications" element={<Publications/> } />
        <Route path="/team" element={<Team/>} />
        <Route path="/jj" element={<JJ/>}/>
        <Route path="/resources" element={<Resources/>} />
        <Route path='/dp' element={<Dp/>}/>
        {/* <Route path="/CC" element={<CC />} /> */}
      </Routes>
    </Router>
  </div>
  );
}

export default App;
