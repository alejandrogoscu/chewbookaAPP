import { Login } from '../auth/LoginForm/LoginForm';
import { Button } from 'antd';
import Background from '../common/Layout/Background';
import chewLogo from '../../assets/chewLogo.png';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
      <Background>
        <main className="home">
          <div className="home__info">
            <div className="home__logoTitle-container">
              <img className="home__logo" src={chewLogo}></img>
              <h1 className="home__title">Chewbooka</h1>
            </div>
            <h2 className="home__text">Explora. Conecta. Postea desde cualquier rincón del hiperespacio</h2>
          </div>
          <div className="home__formContainer">
            <div className="home__loginForm">
              <Login />
            </div>
            <div className="home__register">
              <p className="home__register-text">¿Nuevo en la galaxia?</p>
              <Link to={'/register'}>
                <Button className="home__register-btn">Crea tu cuenta</Button>
              </Link>
            </div>
          </div>
        </main>
      </Background>
    </>
  );
};

export default Home;
