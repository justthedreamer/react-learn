import { useEffect, useState, createContext } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Axios  from 'axios';
import './App.css';

export const AppContext = createContext();

function App() {
  const [username,setUsername] = useState("Pedro");
  
  const client = new QueryClient({defaultOptions:{
    queries:{
      refetchOnWindowFocus : false,
    }
  }});

  return (
    <div className='App'>
      <AppContext.Provider value= {{username,setUsername}}>
        <QueryClientProvider client={client}>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*'>Place not found</Route>
          </Routes>
        </Router>
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  )
}

export default App;
