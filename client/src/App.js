import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import { Toaster } from 'react-hot-toast';
import Homepage from './components/Homepage';
import { useSelector } from 'react-redux';

function App() {
  const {loading} = useSelector(state => state.alerts);
  return (
      <Router>
        {loading && 
          <div className='spinner-parent'>
              <div class="spinner-border" role="status"></div>
          </div>
        }
        
        <Toaster position='top-center' reverseOrder={false} />
        <Routes>
          <Route path='/login' element = {<Login />} />
          <Route path='/register' element = {<Register />} />
          <Route path='/' element = {<Homepage />} />
        </Routes>
      </Router>
  );
}

export default App;
