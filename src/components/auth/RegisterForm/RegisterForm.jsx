import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, reset } from '../../../features/auth/authSlice';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;
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
    dispatch(register(formData));
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
    <form onSubmit={onSubmit}>
      <label>
        Nombre de Usuario:
        <input type="text" name="username" value={username} onChange={onChange} placeholder="Han Solo" required />
      </label>

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
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Hansolomola"
          required
        />
      </label>

      <button type="submit">Registrate</button>
    </form>
  );
};
