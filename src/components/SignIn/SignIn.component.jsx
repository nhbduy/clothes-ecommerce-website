import React from 'react';

import Button from 'components/Button/Button.component';
import FormInput from 'components/FormInput/FormInput.component';

import './SignIn.styles.scss';

const SignIn = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail('');
    setPassword('');
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          label='Email'
          onChange={handleChange}
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          label='Password'
          onChange={handleChange}
          required
        />

        <Button type='submit'>Sign in</Button>
      </form>
    </div>
  );
};

export default SignIn;
