import { useState } from 'react';

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

  const onSubmit = (e) => {
    e.preventDefault();
    // El dispatch aquí
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
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Hansolomola"
          required
        />
      </label>

      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};
