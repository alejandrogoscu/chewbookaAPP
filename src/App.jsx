import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './components/auth/RegisterForm/RegisterForm';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
