import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import Axios  from 'axios';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<p>Oops... Something goes wrong :(</p>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
