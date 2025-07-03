import { Login } from '../auth/LoginForm/LoginForm';
import chewLogo from '../../assets/chewLogo.png';
import './Home.css';

const Home = () => {
  return (
    <>
      <main className="home">
        <div className="home__info">
          <div className="home__logoTitle-container">
            <img className="home__logo" src={chewLogo}></img>
            <h1 className="home__title">Chewbooka</h1>
          </div>
          <h2 className="home__text">Explora. Conecta. Postea desde cualquier rincón del hiperespacio</h2>
        </div>
        <div className="home__loginForm">
          <Login />
        </div>
      </main>
    </>
  );
};

export default Home;
