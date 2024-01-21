import React, { useState } from "react";
import { useSignUpMutation } from "../../redux/auth/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [signUp, { isLoading, isSuccess }] = useSignUpMutation();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Perform signup logic (you can add your API call here)
    const signupData = {
      name,
      email,
      password,
    };
    await signUp(signupData);

    if (isSuccess) {
      console.log("hello");
      navigate("/login");
      console.log("hello");
    }
    // Clear form and error state
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };
  if (isSuccess) {
    console.log("hello");
    navigate("/login");
    console.log("hello");
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='max-w-md mx-auto mt-8 p-8 bg-white shadow-md rounded-md w-[350px]'>
        <h2 className='text-2xl font-bold mb-4'>Signup</h2>

        {error && <p className='text-red-500 mb-4'>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-600'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={name}
              onChange={handleNameChange}
              className='w-full h-10 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500'
            />
          </div>

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

          <div className='mb-4'>
            <label
              htmlFor='confirmPassword'
              className='block text-sm font-medium text-gray-600'>
              Confirm Password
            </label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className='w-full h-10 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-indigo-500'
            />
          </div>

          {isLoading ? (
            <button
              type='submit'
              className='w-full h-10 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-500'>
              Loading...
            </button>
          ) : (
            <button
              type='submit'
              className='w-full h-10 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-500'>
              Sign Up
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
