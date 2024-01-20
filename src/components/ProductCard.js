import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ course }) => {
  return (
    <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
      <div className='h-52 w-52 mx-auto'>
        <img
          src='https://th.bing.com/th/id/OIP.zXu2vsYPZ5mqF0tOB7kupAHaHa?w=512&h=512&rs=1&pid=ImgDetMain'
          alt=''
        />
      </div>
      <h1 className='font-bold text-center'>{course?.name}</h1>
      <p className='text-center font-semibold mb-3'>{course?.instructor}</p>
      <Link
        to={`course/${course?._id}`}
        className='bg-indigo-500 hover:bg-indigo-700 text-white font-thin py-1 px-2 rounded-lg text-center'>
        Course Details
      </Link>
      <div className=' flex-1'></div>
    </div>
  );
};

export default ProductCard;
