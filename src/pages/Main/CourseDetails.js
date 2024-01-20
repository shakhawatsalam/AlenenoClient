import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCourseQuery } from "../../redux/course/courseApi";
import Loader from "../../components/Loader";

const CourseDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleCourseQuery(id);
  const course = data ? data?.data : {};
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='max-w-2xl mx-auto mt-8 p-8 bg-white shadow-md rounded-md'>
      <img
        src='https://th.bing.com/th/id/OIP.zXu2vsYPZ5mqF0tOB7kupAHaHa?w=512&h=512&rs=1&pid=ImgDetMain'
        alt={course?.name}
        className='w-full h-48 object-cover mb-4 rounded-md'
      />
      <h2 className='text-3xl font-bold mb-2'>{course?.name}</h2>
      <p className='text-gray-600 mb-4'>Instructor: {course.instructor}</p>
      <p className='text-lg mb-4'>{course.description}</p>

      <div className='mb-4'>
        <strong>Enrollment Status:</strong> {course.enrollmentStatus}
      </div>

      <div className='mb-4'>
        <strong>Duration:</strong> {course.duration}
      </div>

      <div className='mb-4'>
        <strong>Schedule:</strong> {course.schedule}
      </div>

      <div className='mb-4'>
        <strong>Location:</strong> {course.location}
      </div>

      <div className='mb-4'>
        <strong>Prerequisites:</strong>
        <ul>
          {course?.prerequisites?.map((prerequisite, index) => (
            <li key={index}>{prerequisite}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Syllabus:</strong>
        <ul>
          {course?.syllabus?.map((item) => (
            <li key={item.id}>
              Week {item.week}: {item.topic} - {item.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
