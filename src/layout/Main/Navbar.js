import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = ({ setSearchTerm, searchTerm }) => {
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLogoutClick = () => {
    console.log("hello");
    if (typeof window === "undefined") {
      return;
    }
    navigate('/login');
    localStorage.removeItem("accessToken");
  };

  return (
    <nav className='h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
        <h1>Moon Tech</h1>

        <li className='flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3'>
          <input
            className='h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none'
            type='text'
            name='search'
            id='search'
            value={searchTerm}
            onChange={handleInputChange}
            placeholder='Search...'
          />
          <button type='submit'>
            <BiSearchAlt />
          </button>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <button
            class='bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600'
            onClick={handleLogoutClick}>
            Log Out
          </button>
        </li>
        <Link to='/'>
          <li title='Wishlist' className='bg-indigo-500 p-2 rounded-full'>
            <IoIosListBox className='text-white' />
          </li>
        </Link>
        <Link to='/cart'>
          <li title='cart' className='bg-indigo-500 p-2 rounded-full'>
            <BsFillCartFill className='text-white ' />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
