import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { Register } from './components/auth/RegisterForm/RegisterForm';
import Profile from './components/users/Profile/Profile';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
