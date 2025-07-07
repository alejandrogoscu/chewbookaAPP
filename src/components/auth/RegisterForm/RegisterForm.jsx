import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, reset } from '../../../features/auth/authSlice';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CustomInput } from '../../common/Inputs/Input';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { InputPass } from '../../common/Inputs/InputPass';
import { CustomButton } from '../../common/Button/Button';
import chewLogo from '../../../assets/chewLogo.png';
import Background from '../../common/Layout/Background';
import './registerForm.css';

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const { username, email, password, password2 } = formData;
  const { isSuccess, message, isError } = useSelector((state) => state.auth);

  const clearForm = () => {
    setFormData({ username: '', email: '', password: '' });
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return notification.error({
        message: 'Error',
        description: 'La contraseña no coincide',
      });
    } else {
      return dispatch(register(formData));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: 'Registrado con éxito',
        description: message || 'Te enviamos un mail de confirmación',
      });
      clearForm();
      navigate('/');
    }
    if (isError) {
      notification.error({
        message: 'Error al registrarte',
        description: message || 'Se ha producido un error en el registro',
      });
    }
    dispatch(reset());
  }, [isSuccess, isError, message]);

  return (
    <Background>
      <main className="register">
        <div className="home__logoTitle-container">
          <img className="home__logo" src={chewLogo}></img>
          <h1 className="home__title">Chewbooka</h1>
        </div>

        <div className="register__container">
          <form className="registerForm__form" onSubmit={onSubmit}>
            <label className="registerForm__label">
              <CustomInput
                className="registerForm__input"
                type="text"
                name="username"
                value={username}
                onChange={onChange}
                placeholder="Han Solo"
                prefix={<UserOutlined />}
              />
            </label>

            <label className="registerForm__label">
              <CustomInput
                className="registerForm__input"
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="hansolo@milleniumfalcon.com"
                prefix={<MailOutlined />}
              />
            </label>

            <label className="registerForm__label">
              <InputPass
                className="registerForm__input"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="hansolomola123"
              />
            </label>

            <label className="registerForm__label">
              <InputPass
                className="registerForm__input"
                name="password2"
                value={password2}
                onChange={onChange}
                placeholder="hansolomola123"
              />
            </label>

            <CustomButton className="registerform__btn" htmlType="submit">
              Registrarse
            </CustomButton>
          </form>
        </div>
      </main>
    </Background>
  );
};
