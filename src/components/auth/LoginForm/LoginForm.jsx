import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../features/auth/authSlice';
import { InputPass } from '../../common/Inputs/InputPass';
import { CustomInput } from '../../common/Inputs/Input';
import { MailOutlined } from '@ant-design/icons';
import { CustomButton } from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import './loginform.css';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, message } = useSelector((state) => state.auth);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(login(formData));
    if (login.fulfilled.match(resultAction)) {
      navigate('/profile');
    }
    // Si hay error, se mostrará abajo
  };

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
