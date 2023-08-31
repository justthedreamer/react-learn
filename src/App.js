import { useEffect, useState, createContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Form } from './Form'
import './App.css';

export const AppContext = createContext();

function App() {
  return (
    <div className='App'>
      <Form/>
    </div>
  )
}

export default App;
