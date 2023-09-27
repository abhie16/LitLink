import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import { Toaster } from 'react-hot-toast';
import Homepage from './components/Homepage';
import { useSelector } from 'react-redux';
import ProtectedRoute from './utils/ProtectedRoute';
import PublicRoute from './utils/PublicRoute';

function App() {
  const {loading} = useSelector(state => state.alerts);
  return (
      <Router>
        {loading && 
          <div className='spinner-parent'>
              <div className="spinner-border" role="status"></div>
          </div>
        }
        
        <Toaster position='top-center' reverseOrder={false} />
        <Routes>
          <Route path='/login' element = {<PublicRoute><Login /></PublicRoute>} />
          <Route path='/register' element = {<PublicRoute><Register /></PublicRoute>} />
          <Route path='/' element = {
          <ProtectedRoute>
            <Homepage />
          </ProtectedRoute>} />
        </Routes>
      </Router>
  );
}

export default App;
