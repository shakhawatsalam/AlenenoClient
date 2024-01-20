import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useGetAllCourseQuery } from "../../redux/course/courseApi";
import Loader from "../../components/Loader";
import Navbar from "../../layout/Main/Navbar";

const Home = () => {
  //* arg
  // const query = {};
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState({});
  // console.log(searchTerm);
  // query["searchTerm"] = searchTerm;
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setQuery({ ...query, searchTerm });
    }, 1000); // Adjust the delay (in milliseconds) based on your preference

    return () => clearTimeout(debounceTimeout); // Clear the timeout on component unmount or when searchTerm changes
  }, [query, searchTerm]);

  const { data, isLoading, error } = useGetAllCourseQuery({ ...query });

  const courses = data?.data;
  if (isLoading) {
    return <Loader />;
  }
  // * for Toggle buttons
  const activeClass = "text-white  bg-indigo-500 border-white";

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className='max-w-7xl gap-14 mx-auto my-10'>
        <div className='mb-10 flex justify-end gap-5'></div>
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
