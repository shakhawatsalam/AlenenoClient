import React, { useState } from "react";
import { useLogInMutation } from "../../redux/auth/auth";
import { Link, useNavigate } from "react-router-dom";
import { setToLocalStorage } from "../../utils/local-storage";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [logIn, { isSuccess, isLoading, data }] = useLogInMutation();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Perform login logic (you can add your API call here)
    const loginData = {
      email,
      password,
    };

    await logIn(loginData);

    // Clear form and error state
    setEmail("");
    setPassword("");
    setError("");
  };
  if (isSuccess) {
    setToLocalStorage("accessToken", data?.data?.accessToken);
    navigate("/");
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='max-w-md mx-auto mt-8 p-8 bg-white shadow-md rounded-md w-[350px]'>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>

        {error && <p className='text-red-500 mb-4'>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-600'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={handleEmailChange}
              className='w-full h-10 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500'
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-600'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={handlePasswordChange}
              className='w-full h-10 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500'
            />
          </div>
          <p className='font-thin'>
            If you don't have account please
            <span className='text-indigo-500'>
              <Link to={'/signup'}> Sign Up</Link>
            </span>
          </p>
          {isLoading ? (
            <button
              type='submit'
              className='w-full h-10 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-500'>
              Loading
            </button>
          ) : (
            <button
              type='submit'
              className='w-full h-10 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-500'>
              Log In
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
