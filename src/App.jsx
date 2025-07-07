import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import HomeLogueado from './components/HomeLogueado/HomeLogueado';
import { Register } from './components/auth/RegisterForm/RegisterForm';
import Profile from './components/users/Profile/Profile';
import './App.css';
import { Login } from './components/auth/LoginForm/LoginForm';
import PostCard from './components/posts/PostCard/PostCard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<HomeLogueado />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='posts/:_id' element={<PostCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
