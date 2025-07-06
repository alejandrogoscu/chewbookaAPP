import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './navbarDesktop.css';
import { EditFilled, IdcardFilled, RobotFilled, SecurityScanFilled, WechatFilled } from '@ant-design/icons';

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
        <Link className="navbar__link" to={'/dashboard'}>
          <li className="navbar__item active">
            <span className="navbar__icon">
              <WechatFilled style={{ fontSize: '32px', color: '#00a1e0' }} />
            </span>
            <span className="navbar__text">Dashboard</span>
          </li>
        </Link>
        <Link className="navbar__link" to={'/buscador'}>
          <li className="navbar__item">
            <span className="navbar__icon">
              <SecurityScanFilled style={{ fontSize: '32px', color: '#00a1e0' }} />
            </span>
            <span className="navbar__text">Buscador</span>
          </li>
        </Link>
        <Link className="navbar__link" to={'/profile'}>
          <li className="navbar__item">
            <span className="navbar__icon">
              <RobotFilled style={{ fontSize: '30px', color: '#00a1e0' }} />
            </span>
            <span className="navbar__text">Profile</span>
          </li>
        </Link>
        <Link className="navbar__link" to={'/addpost'}>
          <li className="navbar__item">
            <span className="navbar__icon">
              <EditFilled style={{ fontSize: '30px', color: '#00a1e0' }} />
            </span>
            <span className="navbar__text">Postear</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
