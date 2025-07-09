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
import NewPost from './components/posts/AddPostForm/AddPost';
import PrivateZone from './guards/PrivateZone';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/newpost"
            element={
              <PrivateZone>
              <AppLayout>
                <NewPost />
              </AppLayout>
              </PrivateZone>
            }
          />
          <Route path="posts/:_id" element={<PostDetail />} />
          <Route
            path="/search"
            element={
              <PrivateZone>
              <AppLayout>
                <ResultSearch />
              </AppLayout>
              </PrivateZone>
            }
          />
          <Route
            path="/search/title/:title"
            element={
              <PrivateZone>
              <AppLayout>
                <ResultSearch />
              </AppLayout>
              </PrivateZone>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateZone>
              <AppLayout>
                <Dashboard />
              </AppLayout>
              </PrivateZone>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateZone>
              <AppLayout>
                <Profile />
              </AppLayout>
              </PrivateZone>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
