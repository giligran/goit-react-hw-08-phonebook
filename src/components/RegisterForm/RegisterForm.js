import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label } from './RegisterForm.styled';
import { useState } from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    reset();
  };

  function reset() {
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setEmail(e.target.value)}
        />
      </Label>
      <Label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={e => setName(e.target.value)}
        />
      </Label>
      <Label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Label>
      <button type="submit">Register</button>
    </Form>
  );
};
