import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ErrorNotFound from './Pages/ErrorNotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/*' element={<ErrorNotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App