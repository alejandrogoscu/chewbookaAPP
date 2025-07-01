import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../features/auth/authSlice';
import { InputPass } from './InputPass';
import './loginform.css';

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
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="hansolo@milleniumfalcon.com"
          required
        />
      </label>

      <label>
        Contraseña:
        {/* <input type="password" name="password" value={password} onChange={onChange} placeholder="Contraseña" required /> */}
        <InputPass
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Contraseña"
          className="loginform__input"
        />
      </label>

      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};
