import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EditFilled, RobotFilled, SecurityScanFilled, WechatFilled } from '@ant-design/icons';
import './navbarMobile.css';

const NavbarMobile = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  /* const dispatch = useDispatch(); */

  return (
    <nav className="navbar__mobile">
      <ul className="navbarm__list">
        <li className="navbarm__userItem">
          <img className="navbarm__user-img" src={user.image} />
        </li>

        <li className="navbarm__item">
          <NavLink to="/dashboard" className={({ isActive }) => `navbarm__link ${isActive ? 'active' : ''}`}>
            <span className="navbarm__icon">
              <WechatFilled style={{ fontSize: '32px', color: '#00a1e0' }} />
            </span>
          </NavLink>
        </li>

        <li className="navbarm__item">
          <NavLink to="/search" className={({ isActive }) => `navbarm__link ${isActive ? 'active' : ''}`}>
            <span className="navbarm__icon">
              <SecurityScanFilled style={{ fontSize: '32px', color: '#00a1e0' }} />
            </span>
          </NavLink>
        </li>

        <li className="navbarm__item">
          <NavLink to="/profile" className={({ isActive }) => `navbarm__link ${isActive ? 'active' : ''}`}>
            <span className="navbarm__icon">
              <RobotFilled style={{ fontSize: '30px', color: '#00a1e0' }} />
            </span>
          </NavLink>
        </li>

        <li className="navbarm__item">
          <NavLink to="/newpost" className={({ isActive }) => `navbarm__link ${isActive ? 'active' : ''}`}>
            <span className="navbarm__icon">
              <EditFilled style={{ fontSize: '30px', color: '#00a1e0' }} />
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarMobile;
