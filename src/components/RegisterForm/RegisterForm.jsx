// import { Form, Wrapper, Input, Label, RegTitle, Button } from './RegisterForm.styled';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations/operation';

export const RegisterForm = () => {
  const dispatch = useDispatch();

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
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h2>Registration</h2>
      <>
        <input type="text" name="name" placeholder="Username" required />
        <label>Username</label>
      </>
      <>
        <input type="email" name="email" placeholder="Email" required />
        <label>Email</label>
      </>
      <>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <label>Password</label>
      </>
      <button type="submit">Register</button>
    </form>
  );
};
