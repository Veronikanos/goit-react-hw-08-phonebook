import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations/operation';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h2>Log In</h2>
      <>
        <input type="email" name="email" required placeholder=" " />
        <label>Email</label>
      </>
      <>
        <input type="password" name="password" required placeholder=" " />
        <label>Password</label>
      </>
      <button type="submit">Log In</button>
    </form>
  );
};
