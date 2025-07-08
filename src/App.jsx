import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import { Register } from './components/auth/RegisterForm/RegisterForm';
import AppLayout from './components/common/Layout/AppLayout';
import Dashboard from './components/Home/Dashboard';
import Profile from './components/users/Profile/Profile';
import './App.css';
import { Login } from './components/auth/LoginForm/LoginForm';
import PostDetail from './components/posts/PostDetail/PostDetail';
import ResultSearch from './components/posts/ResultSearch/ResultSearch';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='posts/:_id' element={<PostDetail />} />
          <Route path='/search' element={<ResultSearch />} />
          <Route path='/search/title/:title' element={<ResultSearch />} />
          <Route
            path="/dashboard"
            element={
              <AppLayout>
                <Dashboard />
              </AppLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <AppLayout>
                <Profile />
              </AppLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
