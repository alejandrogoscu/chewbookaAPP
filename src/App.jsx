import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Profile from './components/users/Profile';
import { Login } from './components/auth/LoginForm/LoginForm';
import { Register } from './components/auth/RegisterForm/RegisterForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* ...otras rutas */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
