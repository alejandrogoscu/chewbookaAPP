import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { Register } from './components/auth/RegisterForm/RegisterForm';
import AppLayout from './components/common/Layout/AppLayout';
import Dashboard from './components/Home/Dashboard';
import Profile from './components/users/Profile/Profile';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
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
