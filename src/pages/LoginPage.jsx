import React, { useState } from 'react';
import { ImFont } from 'react-icons/im';
import { createSession, getNewToken, validateGuest, validateWithLogin } from '../api';
import cookies from 'js-cookie';
import loginImage from '../assets/image/login-image.jpg';

const LoginPage = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { request_token } = await getNewToken();

      const authResponse = await validateWithLogin(data.username, data.password, request_token);

      if (authResponse.success) {
        const { session_id } = await createSession(request_token);
        cookies.set('request_token', session_id);

        window.location.href = '/dashboard'; 
      } else {
        alert(authResponse.status_message)
      }
    } catch (error) {
      alert(error.response.data.status_message)
    }
  };

  const handleLoginGuest = async() => {
    try {

      const authResponse = await validateGuest();

      if (authResponse.success) {
        cookies.set('session', authResponse.guest_session_id);
        cookies.set('expried_at', authResponse.expires_at);
        window.location.href = '/dashboard'; 
      } else {
        alert(authResponse.status_message)
      }
    } catch (error) {
      alert(error.response.data.status_message)
    }
  } 

  return (
    <div className="w-screen grid grid-cols-2">
      <div className="text-white bg-slate-900 flex justify-center items-center">
      <div className="backdrop-opacity-10 backdrop-invert bg-slate/50 w-1/2 px-15 py-10 rounded-xl backdrop-blur">
        <h1 className="lg:text-3xl sm:text-sm font-bold mb-6">
          Login Page
        </h1>
        <form onSubmit={handleLogin}>
          <div className="sm:col-span-3">
            <label className="block text-md font-medium leading-6 text-white">Username</label>
            <div className="mt-2 mb-2">
              <input
                type="username"
                name="username"
                placeholder="Enter username"
                value={data.username}
                onChange={(e) => setData({ ...data, username: e.target.value })}
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
              />
            </div>

            <label className="block text-md font-medium leading-6 text-white">Password</label>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
              />
            </div>
           <div className='flex justify-between '> 
            <button type="button" className='text-red-500' onClick={()=>handleLoginGuest()}>Login as guest</button>
            <button type="submit" className="bg-red-500 rounded-md px-3 py-2 mt-5">
              Submit
            </button></div>
          </div>
        </form>
      </div>
      </div>
      <div style={{
        backgroundImage:`url(${loginImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        width:'50vw',
        height:'100vh'
      }}></div>
      
      </div>
  );
};

export default LoginPage;
