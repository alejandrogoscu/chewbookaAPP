import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './components/auth/RegisterForm/RegisterForm';
import { Login } from './components/auth/LoginForm/LoginForm';

import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
