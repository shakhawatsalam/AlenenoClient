import React from "react";
import { useMyCourseQuery } from "../../redux/auth/auth";
import MyCourseCard from "../../components/MyCourseCard";
import Loader from "../../components/Loader";

const MyCourses = () => {
  const { data, isLoading } = useMyCourseQuery();
  console.log(data)
  if (isLoading) {
    return <Loader />;
  }
  const courses = data ? data?.data : {};
  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {courses?.map((course) => (
          <MyCourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
