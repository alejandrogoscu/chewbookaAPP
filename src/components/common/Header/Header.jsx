import chewLogo from '../../../assets/chewLogo.png';
import './header.css';

export const Header = () => {
  return (
    <header className="header__container">
      <img className="header__logo" src={chewLogo}></img>
      <h1 className="header__title">Chewbooka</h1>
    </header>
  );
};
