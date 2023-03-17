import React, { useState } from 'react';
import axios from 'axios';
const RegisterForm = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:3000/auth/register', user).then((response) => {
      localStorage.setItem('jwt_token', response.data.access_token);
      window.location = '/';
    });
  };

  return (
    <div className='flex justify-center my-16'>
      <div className='w-1/2 bg-white p-5 rounded-lg'>
        <h3 className='pt-4 text-2xl text-center'>Create an Account!</h3>
        <form className='pt-6 pb-8 mb-4 rounded' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block mb-2 text-sm font-bold text-gray-700'>
              Username
            </label>
            <input
              className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              type='text'
              placeholder='Username'
              value={user.username}
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
                e.preventDefault();
              }}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2 text-sm font-bold text-gray-700'>
              Email
            </label>
            <input
              className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              type='email'
              placeholder='Email'
              required
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
                e.preventDefault();
              }}
            />
          </div>
          <div className='mb-4'>
            <div className='mb-4'>
              <label className='block mb-2 text-sm font-bold text-gray-700'>
                Password
              </label>
              <input
                className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                type='password'
                placeholder='******************'
                required
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                  e.preventDefault();
                }}
              />
            </div>
          </div>
          <div className='mb-6 text-center'>
            <button
              className='w-full px-4 py-2 font-bold text-white bg-second-color rounded-full hover:bg-third-color focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Register Account
            </button>
          </div>
          <hr className='mb-6 border-t' />
          <div className='text-center'>
            <a
              className='inline-block text-sm text-second-color align-baseline hover:text-third-color'
              href='/login'
            >
              Already have an account? Login!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
