import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../features/auth/authSlice';
import { InputPass } from '../../common/Inputs./Inputs/InputPass';
import { CustomInput } from '../../common/Inputs/Input';
import './loginform.css';
import { MailOutlined } from '@ant-design/icons';
import { CustomButton } from '../../common/Button/Button';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Correo Electrónico:
        <CustomInput
          className="loginform__input"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="hansolo@falconcrew.com"
          prefix={<MailOutlined />}
        />
      </label>

      <label>
        Contraseña:
        <InputPass
          className="loginform__input"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Contraseña"
        />
      </label>

      <CustomButton className="loginform__btn" htmlType="submit">
        Iniciar Sesión
      </CustomButton>
    </form>
  );
};
