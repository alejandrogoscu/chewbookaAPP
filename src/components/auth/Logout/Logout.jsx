import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../features/auth/authSlice';
import './logout.css';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogut = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate('/');
  };

  return (
    <button className="LogoutButton" onClick={onLogut}>
      Cerrar Sesión
    </button>
  );
};

export default Logout;
