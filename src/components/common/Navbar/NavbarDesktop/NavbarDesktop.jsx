import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './navbarDesktop.css';
import { BookFilled } from '@ant-design/icons';

const NavbarDesktop = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  /* const dispatch = useDispatch(); */

  return (
    <nav className="navbar__desktop">
      <ul className="navbar__list">
        <li className="navbar__item">
          <img className="navbar__user-img" src={user.image} />
          <span className="navbar__text">{user.username}</span>
        </li>
        <Link className="navbar__link" to={'/dashboard'}>
          <li className="navbar__item">
            <span className="navbar__icon">
              <BookFilled style={{ fontSize: '32px', color: '#00a1e0' }} />
            </span>
            <span className="navbar__text">Dashboard</span>
          </li>
        </Link>
        <li className="navbar__item">
          <span className="navbar__text">Buscador</span>
        </li>
        <Link className="navbar__link" to={'/profile'}>
          <li className="navbar__item">
            <span className="navbar__text">Profile</span>
          </li>
        </Link>
        <li className="navbar__item">
          <span className="navbar__text">Postear</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
