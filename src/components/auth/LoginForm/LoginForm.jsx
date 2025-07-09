import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../../../features/auth/authSlice';
import { InputPass } from '../../common/Inputs/InputPass';
import { CustomInput } from '../../common/Inputs/Input';
import { MailOutlined } from '@ant-design/icons';
import { CustomButton } from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import './loginform.css';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const { isSuccess, message, isError } = useSelector((state) => state.auth);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: 'Logueado con éxito',
        description: message || 'Es momento de explorar la galaxia',
      });

      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }

    if (isError) {
      notification.error({
        message: 'Error al logearte',
        description: message || 'Email o contraseña incorrectos',
      });
    }
    dispatch(reset());
  }, [isSuccess, isError, message]);

  return (
    <>
      <form className="loginform__form" onSubmit={onSubmit}>
        <label className="loginform__label">
          <CustomInput
            className="loginform__input"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="hansolo@milleniumfalcon.com"
            prefix={<MailOutlined />}
          />
        </label>

        <label className="loginform__label">
          <InputPass
            className="loginform__input"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="hansolomola123"
          />
        </label>

        <CustomButton className="loginform__btn" htmlType="submit">
          Iniciar Sesión
        </CustomButton>
      </form>
      {isError && <p style={{ color: 'red' }}>{message || 'Error al iniciar sesión'}</p>}
    </>
  );
};
