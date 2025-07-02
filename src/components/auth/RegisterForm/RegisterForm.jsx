import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../features/auth/authSlice';

export const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;
  const { isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notificacion;
    }
  });

  const dispatch = useDispatch();

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
