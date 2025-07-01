import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './components/auth/RegisterForm/RegisterForm';
import { Login } from './components/auth/LoginForm/LoginForm';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
