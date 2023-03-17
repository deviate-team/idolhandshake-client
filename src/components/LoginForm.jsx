import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const loginSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:3000/auth/login', user).then((response) => {
      localStorage.setItem('jwt_token', response.data.access_token);
      window.location = '/';
    });
  };
  return (
    <div className='flex justify-center h-[750px] px-6 my-5 items-center'>
      <div className='w-4/6 lg:w-1/3 h-max bg-white p-5 rounded-lg'>
        <h3 className='pt-4 text-2xl text-center'>Login!</h3>
        <form onSubmit={loginSubmit}>
          <div>
            <label className='block mb-2 text-second-color'>Email</label>
            <input
              className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              type='email'
              placeholder='Ex. test@email.com'
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
                e.preventDefault();
              }}
            />
          </div>
          <div>
            <label className='block mb-2 text-second-color'>Password</label>
            <input
              className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              type='password'
              placeholder='******************'
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
                e.preventDefault();
              }}
            />
          </div>
          <div>
            <button
              className='w-full px-4 py-2 font-bold text-white bg-second-color rounded-full hover:bg-third-color focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Login
            </button>
          </div>
        </form>
        <div className='my-5 flex flex-col sm:flex-row justify-between'>
          <a
            className='text-second-color hover:text-third-color text-sm float-left'
            href='#'
          >
            Forgot Password?
          </a>
          <a
            className='text-second-color hover:text-third-color text-sm float-right'
            href='/register'
          >
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
