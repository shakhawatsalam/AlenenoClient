import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useGetAllCourseQuery } from "../../redux/course/courseApi";
import Loader from "../../components/Loader";

const Home = () => {
  const { data, isLoading, error } = useGetAllCourseQuery({});

  const courses = data?.data;
  if (isLoading) {
    return <Loader />;
  }
  // * for Toggle buttons
  const activeClass = "text-white  bg-indigo-500 border-white";

  return (
    <>
      <div className='max-w-7xl gap-14 mx-auto my-10'>
        <div className='mb-10 flex justify-end gap-5'>
          {/* <button
          onClick={() => dispatch(toggle())}
          className={`border px-3 py-2 rounded-full font-semibold ${
            stock ? activeClass : null
          }  `}>
          In Stock
        </button>
        <button
          onClick={() => dispatch(toggleBrand("amd"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("amd") ? activeClass : null
          }`}>
          AMD
        </button>
        <button
          onClick={() => dispatch(toggleBrand("intel"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("intel") ? activeClass : null
          }`}>
          Intel
        </button> */}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
          {courses?.map((course) => (
            <ProductCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
