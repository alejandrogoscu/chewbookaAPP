import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './navbarDesktop.css';
import { EditFilled, RobotFilled, SecurityScanFilled, WechatFilled } from '@ant-design/icons';

const NavbarDesktop = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  /* const dispatch = useDispatch(); */

  return (
    <nav className="navbar__desktop">
      <ul className="navbar__list">
        <li className="navbar__userItem">
          <img className="navbar__user-img" src={user.image} />
          <span className="navbar__text">{user.username}</span>
        </li>

        <li className="navbar__item">
          <NavLink to="/dashboard" className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>
            <span className="navbar__icon">
              <WechatFilled style={{ fontSize: '32px', color: '#00a1e0' }} />
            </span>
            <span className="navbar__text">Dashboard</span>
          </NavLink>
        </li>

        <li className="navbar__item">
          <NavLink to="/buscador" className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>
            <span className="navbar__icon">
              <SecurityScanFilled style={{ fontSize: '32px', color: '#00a1e0' }} />
            </span>
            <span className="navbar__text">Buscador</span>
          </NavLink>
        </li>

        <li className="navbar__item">
          <NavLink to="/profile" className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>
            <span className="navbar__icon">
              <RobotFilled style={{ fontSize: '30px', color: '#00a1e0' }} />
            </span>
            <span className="navbar__text">Profile</span>
          </NavLink>
        </li>

        <li className="navbar__item">
          <NavLink to="/addpost" className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>
            <span className="navbar__icon">
              <EditFilled style={{ fontSize: '30px', color: '#00a1e0' }} />
            </span>
            <span className="navbar__text">Postear</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
