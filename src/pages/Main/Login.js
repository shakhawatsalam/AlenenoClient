import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Perform login logic (you can add your API call here)

    // Clear form and error state
    setEmail("");
    setPassword("");
    setError("");
  };
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

          <button
            type='submit'
            className='w-full h-10 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-500'>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
